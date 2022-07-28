import React from 'react';
import './View.css'

const View = ({receipts}) => {
    return receipts.map((receipt,index)=>(
        <tr>
            <td>{index+1}</td>
            <td>{receipt.date}</td>
            <td>{receipt.amount}</td>
            <td>{receipt.paymentMethod}</td>
            <td>{receipt.remark}</td>
        </tr>
    ))
};

export default View;