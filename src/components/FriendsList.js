import PropTypes from "prop-types"
import FriendListItem from "./FriendListItem";


const FriendsList = ({ friends }) =>
  <ul className="friend-list">
    {friends.map(friend => 
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
      )}
  </ul>


FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  )
};

export default FriendsList;