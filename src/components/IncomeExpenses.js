import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);

  const income = transactions.reduce(
    (subIncome, transactions) => subIncome + (transactions.amount > 0 ? transactions.amount : 0), 0);

  const expense = transactions.reduce(
    (subIncome, transactions) => subIncome + (transactions.amount < 0 ? transactions.amount : 0), 0);

    return (
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-${Math.abs(expense)}</p>
        </div>
      </div>
    );
};

export default IncomeExpenses;
