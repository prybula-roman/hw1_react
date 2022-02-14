import React from "react";
import { Stats } from "../stats/stats";
import user from "../../JSON/user.json";
import cardItemStyle from "../../CSS/components/profile/CardItem.module.css";
import cardBoxStyle from "../../CSS/components/profile/CardBox.module.css";
import cardImgStyle from "../../CSS/components/profile/CardImg.module.css";

export const Profile = ({ avatar, username, tag, location }) => {
  const cardStyle = [cardItemStyle.card];
  const boxStyle = [cardBoxStyle.card__box];
  return (
    <div className={cardStyle}>
      <img
        src={avatar}
        alt="User avatar"
        className={cardImgStyle.card__img}
        width="270"
        height="260"
      />
      <div className={boxStyle}>
        <p className="p div-profile-p">{username}</p>
        <p className="p div-profile-p">{tag}</p>
        <p className="p div-profile-p">{location}</p>
      </div>
      <Stats stats={user.stats} />
    </div>
  );
};
