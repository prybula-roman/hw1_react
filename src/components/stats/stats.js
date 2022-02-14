import React from "react";
import statsStyle from "../../CSS/components/stats/StatsList.module.css";
// import container from "../../CSS/base/Container.module.css";
import statsItemStyle from "../../CSS/components/stats/StatsListItem.module.css";
import statsItemText from "../../CSS/components/stats/StatsListText.module.css";
export const Stats = ({ stats } /*followers, views, likes*/) => {
  const listStyle = [statsStyle.stats__list];
  const itemStyle = [statsItemStyle.stats_list_item];
  const itemText = [statsItemText.stats_text];

  return (
    <div>
      <ul className={listStyle}>
        {Object.entries(stats).map((elem) => {
          return (
            <li key={elem[0]} className={itemStyle}>
              <span className={itemText}>{elem[0]}</span>
              <span className={itemText}>{elem[1]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
