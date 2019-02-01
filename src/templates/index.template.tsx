import * as React from 'react';
import Header from 'src/components/Header';

/**
 * @description
 */
export interface IndexProps {
  title: string
  description: string
}

const IndexTemplate: React.SFC<IndexProps> = (props: IndexProps) => {
  return (
    <div>
      <Header title="Hello" />
    </div>
  )
}

export default IndexTemplate
