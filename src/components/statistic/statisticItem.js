import statsItemStyle from "../../CSS/components/stats/StatsListItem.module.css";
import statsItemText from "../../CSS/components/stats/StatsListText.module.css";

export const StatisticItem = ({ items }) => {
  const itemStyle = [statsItemStyle.stats_list_item];
  const itemText = [statsItemText.stats_text];
  const colorArr = ["blue", "purple", "red", "green", "yellow"];
  return items.map((elem, index) => {
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
  });
};
