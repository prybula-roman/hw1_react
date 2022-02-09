import React from "react";
// import basicStyle from "./basic.module.css";
import headerStyle from "../../CSS/components/transaction/TableHeader.module.css";
export const Transaction = ({ trans }) => {
  const tableHeaderStyle = [headerStyle.table_header];
  const rowHeaderStyle = [headerStyle.table_header_row];
  const columnHeaderStyle = [headerStyle.table_header_column];
  const rowStyle = [headerStyle.table_row_even];
  return (
    <table className="table table-transaction">
      <thead className={tableHeaderStyle}>
        <tr className={rowHeaderStyle}>
          <th className={columnHeaderStyle}>TYPE</th>
          <th className={columnHeaderStyle}>AMOUNT</th>
          <th className={columnHeaderStyle}>CURRENCY</th>
        </tr>
      </thead>
      {/* <thead className={tableHeaderStyle}>
        <tr className={rowHeaderStyle}>
          <th className={columnHeaderStyle}>Type</th>
        </tr>
      </thead> */}
      <tbody className="table-tbody table-transaction-tbody">
        {trans.map((elem, index) => {
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
        })}
      </tbody>
    </table>
  );
};
