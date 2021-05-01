import React from 'react'
import UserCard from './components/UserCard'
import Statistics from './components/Statistics'
import {avatar, name, tag, location, stats} from './data/user.json'



const App = () => (
  <div>
    <p>React-HW-1</p>
    <UserCard
      avatar={avatar}
      alt={name}
      tag={tag}
      location={location}
      stats={stats} />
    <Statistics />
  </div>
);

export default App;