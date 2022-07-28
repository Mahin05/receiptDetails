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
    
    // Cancel button functionalities
    const handleCancelButton = (e) => {
        e.preventDefault();
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
                <form autoComplete='off'>
                    <div className='form-style'>
                        <div>
                            <label>Date<span>*</span></label> <br />
                            <label>Amount<span>*</span></label> <br />
                            <label className='mt-3'>Payment Method<span>*</span></label> <br />
                            <label  className='mt-3'>Remark</label> <br />
                        </div>
                        <div>
                            <input required onChange={(e) => setDate(e.target.value)} value={date} placeholder="Enter Date" type="text" /> <br />
                            <input required onChange={(e) => setAmount(e.target.value)} value={amount} placeholder="Enter Amount (in INR)" className='input-full' type="text" /> <br />
                            <select required value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                <option>Chose</option>
                                <option value="Cash">Cash</option>
                                <option value="Card">Card</option>
                            </select> <br />
                            <input className='input-full' onChange={(e) => setRemark(e.target.value)} value={remark} placeholder="Enter Remark" type="text" /> <br />
                        </div>
                    </div>
                    <div className='button-style'>
                        <div>
                            <button className='cancel' onClick={handleCancelButton}>CANCEL <br />
                            <u>(ESC)</u>
                            </button>
                        </div>
                        <div>
                            <button onClick={handleAddReceiptSubmit} className='submit'>SUBMIT <br />
                            <u>(S)</u>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='container'>
                {receipts.length > 0 && <>
                    <div>
                        <table class="table table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Serial</th>
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
                {receipts.length < 1 && <div className='fs-5 text-danger'>No records available</div>}
            </div>
        </div>
    );
};

export default Form;