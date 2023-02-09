import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={
        "mt-2 scroll-m-20 text-4xl font-bold tracking-tight" + className
      }
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
