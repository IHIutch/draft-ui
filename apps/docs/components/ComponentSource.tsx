import { Highlight, themes } from 'prism-react-renderer'

export default function ComponentSource({ children }: { children: string }) {
  return (
    <div>
      <h2 className="font-bold">Component Source</h2>
      <div>
        <Highlight theme={themes.nightOwl} code={children} language="tsx">
          {({
            // className,
            style,
            tokens,
            getLineProps,
            getTokenProps,
          }) => (
            <pre style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {/* <span>{i + 1}</span> */}
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
