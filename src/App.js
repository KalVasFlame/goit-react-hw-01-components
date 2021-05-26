import React from 'react'

import UserCard from './components/UserCard/UserCard'
import Statistics from './components/Statistics/Statistics'
import FriendsList from './components/FriendsList/FriendsList'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import Container from './components/Container/Container'

import {avatar, name, tag, location, stats} from './data/user.json'
import statisticsData from './data/statistical-data.json'
import friendsData from './data/friends.json'
import transactionsData from './data/transaction.json'

const App = () => (
  <Container>
    <UserCard
      avatar={avatar}
      alt={name}
      name={name}
      tag={tag}
      location={location}
      stats={stats} />
    <Statistics stats={statisticsData} />
    <FriendsList friends={friendsData} />
    <TransactionHistory transactions={transactionsData} />
  </ Container>
);

export default App;


 