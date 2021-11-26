import InputList from './views/InputList'
import { Route, Switch } from 'react-router-dom'
import WikiList from './views/WikiList'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact>
          <InputList />
        </Route>
        <Route path='/wikilist' exact>
          <WikiList />
        </Route>
      </Switch>
    </>
  )
}

export default App
