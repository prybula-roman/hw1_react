import React from "react";
// import user from "../../JSON/user.json";
import listFriendStyle from "../../CSS/components/friends/ListFriends.module.css";
import statsItemStyle from "../../CSS/components/stats/StatsListItem.module.css";
import isOnline from "../../CSS/components/friends/IsOnline.module.css";
import itemText from "../../CSS/components/friends/ItemText.module.css";

export const FriendListItem = ({ friends }) => {
  const itemStyle = [statsItemStyle.stats_list_item];
  const itemTextStyle = [itemText.friend_item_text];
  //return (
  <>
    {Object.entries(friends).map((friend) => {
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
  </>;
  // );
};
