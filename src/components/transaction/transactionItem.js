import headerStyle from "../../CSS/components/transaction/TableHeader.module.css";

export const TransactionItem = ({ transactionList }) => {
  const columnHeaderStyle = [headerStyle.table_header_column];
  return transactionList.map((elem, index) => {
    return (
      <tr
        key={elem.id}
        className={
          index % 2 === 0
            ? headerStyle.table_row_odd
            : headerStyle.table_row_even
        }
      >
        <td className={columnHeaderStyle}>{elem.type}</td>
        <td className={columnHeaderStyle}>{elem.amount}</td>
        <td className={columnHeaderStyle}>{elem.currency}</td>
      </tr>
    );
  });
};
