import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import IndexPage from './pages/index.page'

ReactDOM.render(<IndexPage />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
