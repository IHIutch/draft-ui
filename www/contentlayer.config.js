import { defineDocumentType, makeSource } from "contentlayer/source-files";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import { codeImport } from "remark-code-import";
import { getHighlighter } from "shiki";
import { loadTheme } from "shiki";
import { visit } from "unist-util-visit";
import { rehypeComponent } from "./lib/rehype-component";
import { rehypeNpmCommand } from "./lib/rehype-npm-command";

// import fs from "fs";
// import path from "path";
// import { parse } from "react-docgen";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => {
      return `/${doc._raw.flattenedPath}`;
    },
  },
  // propsList: {
  //   type: "json",
  //   resolve: (doc) => {
  //     if (doc.storyPath) {
  //       const storyPath = path.resolve(process.cwd(), "..", doc.storyPath)
  //       const source = fs.readFileSync(storyPath, "utf8", (err, data) => {
  //         if (err) {
  //           console.error(err);
  //           return;
  //         }
  //         return data;
  //       });
  //       return parse(source);;
  //     }
  //     return {};
  //   },
  // },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "docs/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    component: {
      type: "boolean",
      default: false,
      required: false,
    },
    // srcPath: {
    //   type: "string",
    //   required: false,
    // },
    // storyPath: {
    //   type: "string",
    //   required: false,
    // },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [codeImport],
    rehypePlugins: [
      rehypeComponent,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") {
              return;
            }

            node.__rawString__ = codeEl.children?.[0].value;
            node.__src__ = node.properties?.__src__;
          }
        });
      },
      [
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            const theme = await loadTheme(
              path.join(process.cwd(), "lib/vscode-theme.json")
            );
            return await getHighlighter({ theme });
          },
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
              return;
            }

            const preElement = node.children.at(-1);
            if (preElement.tagName !== "pre") {
              return;
            }

            preElement.properties["__withMeta__"] =
              node.children.at(0).tagName === "div";
            preElement.properties["__rawString__"] = node.__rawString__;

            if (node.__src__) {
              preElement.properties["__src__"] = node.__src__;
            }
          }
        });
      },
      rehypeNpmCommand,
    ],
  },
});
