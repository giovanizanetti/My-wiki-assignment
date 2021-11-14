import InputList from './views/InputList'
import { Route, Switch } from 'react-router-dom'
import { useLocalStorage } from './hooks/useLocalStorege'

import WikiList from './views/WikiList'
import Header from './components/Header'

function App() {
  const [articlesList, setArticlesList] = useLocalStorage('articles', [])

  const handleAddArticles = (articles) => {
    setArticlesList((prevState) => prevState.concat(articles))
  }

  const handleDeleteArticle = (id) => {
    const filteredItems = articlesList.filter((item) => item.pageid !== id)
    setArticlesList(filteredItems)
  }

  return (
    <>
      <Header />
      <Switch>
        <Route path='/' exact>
          <InputList addArticles={handleAddArticles} />
        </Route>
        <Route path='/wikilist' exact>
          <WikiList items={articlesList} deleteArticle={handleDeleteArticle} />
        </Route>
      </Switch>
    </>
  )
}

export default App
