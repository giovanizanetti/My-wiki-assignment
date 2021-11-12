import { Container, Col, Row } from 'react-bootstrap'
import { useDocTitle } from '../src/hooks/useDocTitle'
import { APP_NAME } from '../src/config/constants'
import InputList from './views/InputList'
import { useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import WikiList from './views/WikiList'
import Header from './components/Header'

function App() {
  useDocTitle(APP_NAME)

  const [articlesList, setArticlesList] = useState([])
  const handleAddArticles = (articles) => {
    setArticlesList((prevState) => prevState.concat(articles))
  }

  return (
    <>
      <Header />
      <Container>
        <Col xs={12} sm={8} xl={5}>
          <Switch>
            <Route path='/' exact>
              <InputList addArticles={handleAddArticles} />
            </Route>
            <Route path='/wikilist' exact>
              <WikiList items={articlesList} />
            </Route>
          </Switch>
        </Col>
      </Container>
    </>
  )
}

export default App
