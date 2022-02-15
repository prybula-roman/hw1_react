import "./App.css";
import React from "react";
import { Profile } from "./components/profile/profile";
import user from "./JSON/user.json";
import statistic from "./JSON/statistic.json";
import userFriends from "./JSON/friends.json";
import transaction from "./JSON/transaction.json";
import { FriendList } from "./components/friendlist/friendlist";
import { Statistic } from "./components/statistic/statistic";
import { Transaction } from "./components/transaction/transaction";

function App() {
  const dataTitle = "my title statistic";
  const friendListTitle = "my friends";
  return (
    <>
      <Profile user={user} />
      <Statistic statist={statistic} title={dataTitle} />
      <FriendList friends={userFriends} title={friendListTitle} />
      <Transaction trans={transaction} />
    </>
  );
}

export default App;
