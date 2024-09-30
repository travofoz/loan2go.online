'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const LoanDetails = () => {
    const [loanAmount, setLoanAmount] = useState(500);
    const [loanPurpose, setLoanPurpose] = useState('');

    useEffect(() => {
        const storedLoanAmount = localStorage.getItem('loan_amount');
        const storedLoanPurpose = localStorage.getItem('loan_purpose');
        if (storedLoanAmount) setLoanAmount(storedLoanAmount);
        if (storedLoanPurpose) setLoanPurpose(storedLoanPurpose);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'loan_amount') {
            setLoanAmount(value);
            localStorage.setItem('loan_amount', value);
        } else if (name === 'loan_purpose') {
            setLoanPurpose(value);
            localStorage.setItem('loan_purpose', value);
        }
    };

    return (
        <form>
            <div>
                <label htmlFor="loan_amount">Loan Amount</label>
                <input
                    type="range"
                    name="loan_amount"
                    min="500"
                    max="5000"
                    step="500"
                    value={loanAmount}
                    onChange={handleChange}
                    required
                />
                <p>Amount: ${loanAmount}</p>
            </div>
            <div>
                <label htmlFor="loan_purpose">Loan Purpose</label>
                <select name="loan_purpose" value={loanPurpose} onChange={handleChange} required>
                    <option value="">Select Loan Purpose</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Home Repairs">Home Repairs</option>
                    <option value="Home Improvement">Home Improvement</option>
                    <option value="Rent">Rent</option>
                    <option value="Bills">Bills</option>
                    <option value="Vacation">Vacation</option>
                    <option value="Vehicle Payment">Vehicle Payment</option>
                    <option value="Vehicle Purchase">Vehicle Purchase</option>
                    <option value="Vehicle Repairs">Vehicle Repairs</option>
                    <option value="Other">Other</option>
                    <option value="Prefer Not To Say">Prefer Not To Say</option>
                </select>
            </div>
            <Link href="/personal-details">
                Next
            </Link>
        </form>
    );
};

export default LoanDetails;
