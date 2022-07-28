import React from 'react';

const View = ({receipts}) => {
    return receipts.map(receipt=>(
        <tr>
            <td>{receipt.date}</td>
            <td>{receipt.amount}</td>
            <td>{receipt.paymentMethod}</td>
            <td>{receipt.remark}</td>
        </tr>
    ))
};

export default View;