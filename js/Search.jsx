const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object } = React.PropTypes

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  propTypes: {
    route: object
  },
  handleSearchTermChange (searchTerm) {
    this.setState({ searchTerm })
  },
  render () {
    return (
      <div className='container'>
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          searchTerm={this.state.searchTerm}
          showSearch
        />
        <div className='shows'>
          {this.props.route.dataSets
            .filter((show) => `${show.title}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((dataSet) => (
              <ShowCard {...dataSet} key={dataSet.ID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
