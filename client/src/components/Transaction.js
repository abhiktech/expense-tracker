import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Transaction = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext);

    return (
        <li className={transaction.amount >= 0 ? "plus" : "minus"}>
            {transaction.text} <span>{transaction.amount >= 0 ? '+' : '-'}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn"
            onClick={() => deleteTransaction(transaction._id)}>x</button>
        </li>
    )
}
