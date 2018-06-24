import React from 'react'
import Route from 'react-router-dom/Route'
import ScrollPosition from './components/ScrollPosition'
import Switch from 'react-router-dom/Switch'

import Container from './routes/Container'
import Home from './routes/Home'
import Resume from './routes/Resume'
import Skills from './routes/Skills'

const App = () => (
  <Switch>
    <ScrollPosition>
      {scroll => (
        <Route
          render={props => (
            <Container {...props} scroll={scroll}>
              <Route exact path='/' render={props => <Home {...props} scroll={scroll} />} />
              <Route exact path='/skills' render={props => <Skills {...props} scroll={scroll} />} />
              <Route exact path='/resume' render={props => <Resume {...props} scroll={scroll} />} />
            </Container>
          )}
        />
      )}
    </ScrollPosition>
  </Switch>
)

export default App
