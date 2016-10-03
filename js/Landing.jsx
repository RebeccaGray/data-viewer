const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='home-info'>
    <h1 className='title'>Data Viewer</h1>
    <Link to='/search' className='browse-all'> Browse Data Sets</Link>
  </div>
)

module.exports = Landing
