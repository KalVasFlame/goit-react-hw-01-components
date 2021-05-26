import PropTypes from "prop-types"
import defaultAvatar from "./default-avatar.jpg"

import styles from './UserCard.module.css'
const UserCard = ({ avatar, name, tag, location, stats }) =>
  <>
  <div className={styles.UserCard}>
    <img
        src={avatar}
      alt="Аватар пользователя"
    />
      <ul className={styles.UserInfoList}>
      <li className={styles.UserInfoText}>{name} </li>
      <li className={styles.UserInfoText}>@{tag} </li>
      <li className={styles.UserInfoText}>{location}</li>
      </ul>
  <ul className={styles.UserStatisticList}>
    <li>
      <span className="">Followers: </span>
        <span className={styles.UserStatistic}>{stats.followers}</span>
    </li>
    <li>
      <span className="">Views: </span>
        <span className={styles.UserStatistic}>{stats.views}</span>
    </li>
    <li>
      <span className="">Likes: </span>
      <span className={styles.UserStatistic}>{stats.likes}</span>
    </li>
  </ul>
  </div>

</>

UserCard.defaultProps = {
  avatar: defaultAvatar
}

UserCard.propTypes = {
avatar: PropTypes.string,
alt: PropTypes.string.isRequired,
tag: PropTypes.string.isRequired,
location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  }).isRequired,
}

export default UserCard