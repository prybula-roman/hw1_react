import "./App.css";
import React from "react";
import { Profile } from "./components/profile/profile";
import user from "./JSON/user.json";
import statistic from "./JSON/statistic.json";
import userFriends from "./JSON/friends.json";
import { FriendList } from "./components/friendlist/friendlist";
import { Stats } from "./components/stats/stats";
import { Statistic } from "./components/statistic/statistic";

function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
      />
      <Stats stats={user.stats} />
      <Statistic statist={statistic} />
      <FriendList friends={userFriends} />
    </>
  );
}

export default App;
