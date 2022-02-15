// import React from "react";
import PropTypes from "prop-types";
import headerStyle from "../../CSS/components/transaction/TableHeader.module.css";
import { TransactionItem } from "./transactionItem";
export const Transaction = ({ trans }) => {
  const tableHeaderStyle = [headerStyle.table_header];
  const rowHeaderStyle = [headerStyle.table_header_row];
  const columnHeaderStyle = [headerStyle.table_header_column];
  return (
    <table className="table table-transaction">
      <thead className={tableHeaderStyle}>
        <tr className={rowHeaderStyle}>
          <th className={columnHeaderStyle}>TYPE</th>
          <th className={columnHeaderStyle}>AMOUNT</th>
          <th className={columnHeaderStyle}>CURRENCY</th>
        </tr>
      </thead>
      <tbody className="table-tbody table-transaction-tbody">
        <TransactionItem transactionList={trans} />
      </tbody>
    </table>
  );
};

Transaction.propTypes = {
  trans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
