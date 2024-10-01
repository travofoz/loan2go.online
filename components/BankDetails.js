import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const BankDetails = () => {
    const [ssn, setSsn] = useState('');
    const [routingNumber, setRoutingNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [accountType, setAccountType] = useState('');
    const [bankLength, setBankLength] = useState('');
    const [directDeposit, setDirectDeposit] = useState('');

    useEffect(() => {
        const storedSsn = localStorage.getItem('ssn');
        const storedRoutingNumber = localStorage.getItem('routing_number');
        const storedBankName = localStorage.getItem('bank_name');
        const storedAccountNumber = localStorage.getItem('account_number');
        const storedAccountType = localStorage.getItem('account_type');
        const storedBankLength = localStorage.getItem('bank_length');
        const storedDirectDeposit = localStorage.getItem('direct_deposit');

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
                    <option value="checking">Checking</option>
                    <option value="savings">Savings</option>
                </select>
            </div>
            <div>
                <label htmlFor="bank_length" className="block text-sm font-black text-zinc-900">Bank Length</label>
                <input type="number" name="bank_length" value={bankLength} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="direct_deposit" className="block text-sm font-black text-zinc-900">Direct Deposit</label>
                <select name="direct_deposit" value={directDeposit} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white">
                    <option value="">Select Direct Deposit</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <Link href="/final-details"  className="w-auto flex justify-center py-2 px-4 border-2 border-green-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 {Object.keys(errors).some(key => errors[key]) ? 'pointer-events-none' : ''}">
                Next
            </Link>
        </form>
    );
};

export default BankDetails;
