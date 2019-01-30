import * as React from 'react'
import styled from 'styled-components'

/**
 * @description
 */
export interface IndexProps {
  title: string
  description: string
}

const Title = styled.h1`
  margin: 0px;
  background-color: #540324;
`

const IndexTemplate: React.SFC<IndexProps> = (props: IndexProps) => {
  return (
    <div>
      <Title>{props.title}</Title>
    </div>
  )
}

export default IndexTemplate
