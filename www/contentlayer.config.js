import { defineDocumentType, makeSource } from "contentlayer/source-files";
import fs from "fs";
import { parse } from "react-docgen";

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
  //     if (doc.srcPath) {
  //       const path = process.cwd() + doc.srcPath;
  //       const source = fs.readFileSync(path, "utf8", (err, data) => {
  //         if (err) {
  //           console.error(err);
  //           return;
  //         }
  //         return data;
  //       });

  //       return parse(source);
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
    srcPath: {
      type: "string",
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
});
