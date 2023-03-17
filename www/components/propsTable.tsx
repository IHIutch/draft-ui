import React from 'react'

export default function PropsTable(props: any) {
  const formatProps = () => {
    return props
  }

  return <div>{JSON.stringify(formatProps, null, 2)}</div>
}
