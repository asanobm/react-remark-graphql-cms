import * as React from 'react'
import IndexTemplate from 'src/templates/index.template'

export default class IndexPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div>
        <IndexTemplate title='hello1' description='hello2' />
      </div>
    )
  }
}
