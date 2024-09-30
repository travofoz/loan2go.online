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
        <div>
            <div>
                <label htmlFor="ssn">SSN</label>
                <input type="password" name="ssn" value={ssn} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="routing_number">Routing Number</label>
                <input name="routing_number" value={routingNumber} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="bank_name">Bank Name</label>
                <input name="bank_name" value={bankName} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="account_number">Account Number</label>
                <input name="account_number" value={accountNumber} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="account_type">Account Type</label>
                <select name="account_type" value={accountType} onChange={handleChange} required>
                    <option value="">Select Account Type</option>
                    <option value="checking">Checking</option>
                    <option value="savings">Savings</option>
                </select>
            </div>
            <div>
                <label htmlFor="bank_length">Bank Length</label>
                <input type="number" name="bank_length" value={bankLength} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="direct_deposit">Direct Deposit</label>
                <select name="direct_deposit" value={directDeposit} onChange={handleChange} required>
                    <option value="">Select Direct Deposit</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <Link href="/final-details">
                Next
            </Link>
        </div>
    );
};

export default BankDetails;
