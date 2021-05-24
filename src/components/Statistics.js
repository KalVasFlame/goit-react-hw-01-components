import PropTypes from "prop-types";


const Statistics = ({stats}) =>
   <section className="statistics">
  <h2 className="statistics-title">Upload stats</h2>
  <ul className="statistics-list"> 
      {stats.map(item =>
      <li key={item.id} className="statistics-item">
          <span>{ item.label}: </span>
          <span>{ item.percentage}%</span>
        </li>
      )}
  </ul>
</section>


Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
export default Statistics