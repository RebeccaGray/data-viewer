const React = require('react')
const Header = require('./Header')
const Highcharts = require('highcharts')
const ReactHighcharts = require('react-highcharts')
const Highlight = require('react-highlight')
const axios = require('axios')
const { string } = React.PropTypes

const Details = React.createClass({
  getInitialState () {
    return {
      config: {}
    }
  },
  componentDidMount () {
    let filename = this.props.params.filename.slice(1)
    let that = this
    axios.get(`http://localhost:8000/data/${filename}`)
    .then((response) => {
      let data = response.data
      let config = data.shift()[0]
      config.series[0].data = data[0]
      that.setState({ config })
    })
    .catch((error) => {
      console.log(error)
    })
  },
  propTypes: {
    filename: string
  },
  render () {
    return (
      <div className='container'>
        <Header />
        <div className='chart-container'>
          <ReactHighcharts config={this.state.config} ref='chart' />
        </div>
      </div>
    )
  }
})

module.exports = Details
