import React from 'react';
import './Form.css'

const Form = () => {
    return (
        <div className='container main-div'>
            <h4>Receipt Details</h4>
            <form>
                <div className='form-style'>
                    <div>
                        <label for="fname">First name:</label> <br />
                        <label for="fname">Amount:</label> <br />
                        <label className='mt-4' for="fname">Payment Method:</label> <br />
                        <label for="fname">Remark:</label> <br />
                    </div>
                    <div>
                        <input type="text" id="fname" name="fname" /> <br />
                        <input className='input-full' type="text" id="fname" name="fname" /> <br />
                        <select name="cars" id="cars">
                            <option value="volvo">Cash</option>
                            <option value="saab">Card</option>
                        </select> <br />
                        <input className='input-full' type="text" id="fname" name="fname" /> <br />
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
    );
};

export default Form;