import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BankDetails = () => {
    const [idNumber, setIdNumber] = useState('');
    const [idState, setIdState] = useState('');
    const [ssn, setSsn] = useState('');
    const [routingNumber, setRoutingNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountType, setAccountType] = useState('');
    const [bankLength, setBankLength] = useState('');
    const [directDeposit, setDirectDeposit] = useState('');

    useEffect(() => {
        const storedIdNumber = localStorage.getItem('id_number');
        const storedIdState = localStorage.getItem('id_state');
        const storedSsn = localStorage.getItem('ssn');
        const storedRoutingNumber = localStorage.getItem('routing_number');
        const storedBankName = localStorage.getItem('bank_name');
        const storedAccountNumber = localStorage.getItem('account_number');
        const storedAccountType = localStorage.getItem('account_type');
        const storedBankLength = localStorage.getItem('bank_length');
        const storedDirectDeposit = localStorage.getItem('direct_deposit');

        if (storedIdNumber) setIdNumber(storedIdNumber);
        if (storedIdState) setIdState(storedIdState);
        if (storedSsn) setSsn(storedSsn);
        if (storedRoutingNumber) setRoutingNumber(storedRoutingNumber);
        if (storedBankName) setBankName(storedBankName);
        if (storedAccountNumber) setAccountNumber(storedAccountNumber);
        if (storedAccountType) setAccountType(storedAccountType);
        if (storedBankLength) setBankLength(storedBankLength);
        if (storedDirectDeposit) setDirectDeposit(storedDirectDeposit);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'id_number':
                setIdNumber(value);
                localStorage.setItem('id_number', value);
                break;
            case 'id_state':
                setIdState(value);
                localStorage.setItem('id_state', value);
                break;
            case 'ssn':
                setSsn(value);
                localStorage.setItem('ssn', value);
                break;
            case 'routing_number':
                setRoutingNumber(value);
                localStorage.setItem('routing_number', value);
                break;
            case 'bank_name':
                setBankName(value);
                localStorage.setItem('bank_name', value);
                break;
            case 'account_number':
                setAccountNumber(value);
                localStorage.setItem('account_number', value);
                break;
            case 'account_type':
                setAccountType(value);
                localStorage.setItem('account_type', value);
                break;
            case 'bank_length':
                setBankLength(value);
                localStorage.setItem('bank_length', value);
                break;
            case 'direct_deposit':
                setDirectDeposit(value);
                localStorage.setItem('direct_deposit', value);
                break;
            default:
                break;
        }
    };

    return (
        <form className="space-y-4 mb-8 p-4 shadow-lg rounded-lg bg-white flex flex-col items-right border-zinc-900 border-4 border-opacity-30">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4 capitalize">Step 5/6: Banks Details</h2>
            <div>
                <label htmlFor="id_number" className="block text-sm font-black text-zinc-900">ID Number</label>
                <input type="text" name="id_number" value={idNumber} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="id_state" className="block text-sm font-black text-zinc-900">ID State</label>
                <select name="id_state" value={state} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white">
                    <option value="">Select State</option>
                    <option value="">Select State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="DC">District of Columbia</option>
                    <option value="PR">Puerto Rico</option>
                </select>
            </div>
            <div>
                <label htmlFor="ssn" className="block text-sm font-black text-zinc-900">SSN</label>
                <input type="password" name="ssn" value={ssn} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="routing_number" className="block text-sm font-black text-zinc-900">Routing Number</label>
                <input name="routing_number" value={routingNumber} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="bank_name" className="block text-sm font-black text-zinc-900">Bank Name</label>
                <input name="bank_name" value={bankName} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="account_number" className="block text-sm font-black text-zinc-900">Account Number</label>
                <input name="account_number" value={accountNumber} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="account_type" className="block text-sm font-black text-zinc-900">Account Type</label>
                <select name="account_type" value={accountType} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white">
                    <option value="">Select Account Type</option>
                    <option value="CHECKING">Checking</option>
                    <option value="SAVINGS">Savings</option>
                    </select>
            </div>
            <div>
                <label htmlFor="bank_length" className="block text-sm font-black text-zinc-900">Bank Length</label>
                <input
                    type="range"
                    name="bank_length"
                    min="0.5"
                    max="20"
                    step="0.5"
                    value={bankLength}
                    onChange={handleChange}
                    required
                    className="m-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white accent-emerald-700"
                />
                <p className="block text-4xl font-black text-emerald-700 text-center">${bankLength} Years</p>
            </div>
            <div>
                <label htmlFor="direct_deposit" className="block text-sm font-black text-zinc-900">Direct Deposit</label>
                <select name="direct_deposit" value={directDeposit} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white">
                    <option value="">Select Direct Deposit</option>
                    <option value="YES">Yes</option>
                    <option value="NO">No</option>
                </select>
            </div>
            <Link href="/final-details"  className="w-auto flex justify-center py-2 px-4 border-2 border-green-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 {Object.keys(errors).some(key => errors[key]) ? 'pointer-events-none' : ''}">
                Next
            </Link>
        </form>
    );
};

export default BankDetails;

