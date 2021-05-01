import React from "react"
import PropTypes from "prop-types";
import statisticsData from '../data/statistical-data.json'

const Statistics = () => {
  return <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul >
      {statisticsData.map(({ id, label, percentage }) => {
        return <li className="stat-list" key={id}>
          <span className="label">{label}: </span>
    <span className="percentage">{percentage}%</span>
        </li>
        

      })}
  </ul>
</section>
}

Statistics.defaultProps = {
  percentage: 0,
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number
}

export default Statistics