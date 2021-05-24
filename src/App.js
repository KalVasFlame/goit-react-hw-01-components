
import UserCard from './components/UserCard'
import Statistics from './components/Statistics'
import FriendsList from './components/FriendsList'
import TransactionHistory from './components/TransactionHistory'

import {avatar, name, tag, location, stats} from './data/user.json'
import statisticsData from './data/statistical-data.json'
import friendsData from './data/friends.json'
import transactionsData from './data/transaction.json'

const App = () => (
  <div>
    <UserCard
      avatar={avatar}
      alt={name}
      tag={tag}
      location={location}
      stats={stats} />
    <Statistics stats={statisticsData} />
    <FriendsList friends={friendsData} />
    <TransactionHistory transactions={transactionsData} />
  </div>
);

export default App;


 