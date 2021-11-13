import { useDocTitle } from '../src/hooks/useDocTitle'
import { APP_NAME } from '../src/config/constants'
import InputList from './views/InputList'
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useLocalStorage } from './hooks/useLocalStorege'

import WikiList from './views/WikiList'
import Header from './components/Header'

function App() {
  useDocTitle(APP_NAME)
  const [articlesList, setArticlesList] = useLocalStorage('articles', [])

  const handleAddArticles = (articles) => {
    setArticlesList((prevState) => prevState.concat(articles))
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact>
          <InputList addArticles={handleAddArticles} />
        </Route>
        <Route path='/wikilist' exact>
          <WikiList items={articlesList} />
        </Route>
      </Switch>
    </>
  )
}

export default App
