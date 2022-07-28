import React, { useEffect, useState } from 'react';
import View from '../View/View';
import './Form.css'

// get values of local storage
const getData = () => {
    const data = localStorage.getItem('receipts');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return [];
    }
}

const Form = () => {
    const [receipts, setReceipts] = useState(getData());
    // input field states
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [remark, setRemark] = useState('');

    // form submit
    const handleAddReceiptSubmit = (e) => {
        e.preventDefault();
        // creating object
        let receipt = {
            date: date,
            amount: amount,
            paymentMethod: paymentMethod,
            remark: remark
        }
        setReceipts([...receipts, receipt]);
        console.log('added');
        setDate('');
        setAmount('');
        setPaymentMethod('');
        setRemark('');
    }

    // saving data to local storage
    useEffect(() => {
        localStorage.setItem('receipts', JSON.stringify(receipts));
    }, [receipts])
    return (
        <div>
            <div className='container main-div'>
                <h4>Receipt Details</h4>
                <form onSubmit={handleAddReceiptSubmit} autoComplete='off'>
                    <div className='form-style'>
                        <div>
                            <label>Date:</label> <br />
                            <label>Amount:</label> <br />
                            <label className='mt-4'>Payment Method:</label> <br />
                            <label>Remark:</label> <br />
                        </div>
                        <div>
                            <input onChange={(e) => setDate(e.target.value)} value={date} placeholder="Enter Date" type="text" /> <br />
                            <input onChange={(e) => setAmount(e.target.value)} value={amount} placeholder="Enter Amount (in INR)" className='input-full' type="text" /> <br />
                            <select onChange={(e) => setPaymentMethod(e.target.value)}  name="cars" id="cars">
                                <option value="Cash">Cash</option>
                                <option value="Card">Card</option>
                            </select> <br />
                            <input onChange={(e) => setRemark(e.target.value)} value={remark} placeholder="Enter Remark" type="text" /> <br />
                        </div>
                    </div>
                    <div className='button-style'>
                        <div>
                            <button>CANCEL</button>
                        </div>
                        <div>
                            <button>SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='container'>
                {receipts.length > 0 && <>
                    <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Payment Method</th>
                                    <th scope="col">Remark</th>
                                </tr>
                            </thead>
                            <tbody>
                                <View receipts={receipts}></View>
                            </tbody>
                        </table>
                    </div>
                </>}
                {receipts.length < 1 && <div>No records available</div>}
                {/* <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table> */}
            </div>
        </div>
    );
};

export default Form;