import React from 'react'
import { useGlopalContext } from './context'
import PagePost from './component/page_post'
import Alert from './component/alert'
import PageManageReq from './component/page_manage_req'
import { Route, Switch } from 'react-router-dom'

function App() {
  const {
    alert: { show },
  } = useGlopalContext()
  return (
    <main>
      {show && <Alert />}
      <Switch>
        <Route exact path='/' component={PagePost} />
        <Route exact path='/manage' component={PageManageReq} />
      </Switch>
    </main>
  )
}

export default App
