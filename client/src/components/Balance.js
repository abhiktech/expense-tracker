import {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {

    const {transactions} = useContext(GlobalContext);
    
    const balance = transactions.reduce(
        (subBalance, transaction) => subBalance + transaction.amount, 0);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </>
    );
};

export default Balance;
