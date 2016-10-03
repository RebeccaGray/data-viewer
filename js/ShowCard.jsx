const React = require('react')
const { Link } = require('react-router')

const ShowCard = (props) => (
  <Link to={`/details:${props.filename}`}>
    <div className='show-card'>
      <img src='public/img/ic_timeline_black_24px.svg' className='show-card-img' />
      <div className='show-card-text'>
        <h3 className='show-card-title'>{props.title}</h3>
        <h4 className='show-card-year'>({props.year})</h4>
        <p className='show-card-description'>{props.description}</p>
      </div>
    </div>
  </Link>
)

const { string } = React.PropTypes

ShowCard.propTypes = {
  description: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  filename: React.PropTypes.string.isRequired
}

module.exports = ShowCard
