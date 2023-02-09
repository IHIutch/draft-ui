import { allDocs } from "@/.contentlayer/generated";

export default async function Home() {
  return (
    <div>
      <pre>{JSON.stringify(allDocs, null, 2)}</pre>
    </div>
  );
}
