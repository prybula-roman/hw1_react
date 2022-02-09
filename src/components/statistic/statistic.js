import React from "react";
import listStatisticStyle from "../../CSS/components/statistic/StatisticList.module.css";
import statsItemStyle from "../../CSS/components/stats/StatsListItem.module.css";
import statsItemText from "../../CSS/components/stats/StatsListText.module.css";

export const Statistic = ({ statist } /*followers, views, likes*/) => {
  const listStyle = [listStatisticStyle.list_statistic];
  const itemStyle = [statsItemStyle.stats_list_item];
  const itemText = [statsItemText.stats_text];
  const colorArr = ["blue", "purple", "red", "green", "yellow"];
  return (
    <div className="container">
      <h2 className="h2 div-statistic-h2">Upload stats</h2>
      <ul className={listStyle}>
        {statist.map((elem, index) => {
          console.log("index=", index);
          return (
            <li
              key={elem.id}
              className={itemStyle}
              style={{
                backgroundColor: `${colorArr[index]}`,
              }}
            >
              <span className={itemText}>{elem.label}</span>
              <span className={itemText}>{elem.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
