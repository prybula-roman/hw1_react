import React from "react";
// import basicStyle from "./basic.module.css";
import listFriendStyle from "../../CSS/components/friends/ListFriends.module.css";
import statsItemStyle from "../../CSS/components/stats/StatsListItem.module.css";
import isOnline from "../../CSS/components/friends/IsOnline.module.css";
import itemText from "../../CSS/components/friends/ItemText.module.css";
import { FriendListItem } from "./friendlistitem";
//import { friends } from "../../JSON/friends.json";

export const FriendList = ({ friends } /*followers, views, likes*/) => {
  const listStyle = [listFriendStyle.friend_list];
  const itemStyle = [statsItemStyle.stats_list_item];
  const itemTextStyle = [itemText.friend_item_text];
  return (
    <div className="container">
      <h2 className="h2 div-friends-h2">Upload stats</h2>
      <ul className={listStyle}>
        {friends.map((friend) => {
          return (
            <li key={friend.id} className={itemStyle}>
              <div
                className={
                  friend.isOnline ? isOnline.is_online : isOnline.is_offline
                }
              ></div>
              <img
                src={friend.avatar}
                alt="User avatar"
                width="48"
                className="img div-friends-ul-img"
              />
              <p className={itemTextStyle}>{friend.name}</p>
            </li>
          );
        })}
        {/* <FriendListItem friends={friends} />; */}
      </ul>
    </div>
  );
};
