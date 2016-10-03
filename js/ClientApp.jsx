const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const Layout = require('./Layout')
const Details = require('./Details')
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const dataSets = require('../public/list')

const App = React.createClass({
  assignShow (nextState, replace) {
    Object.assign(nextState.params, nextState.params.filename)
    return nextState
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} dataSets={dataSets} />
          <Route path='/details:filename' component={Details} onEnter={this.assignShow}/>
        </Route>
      </Router>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
