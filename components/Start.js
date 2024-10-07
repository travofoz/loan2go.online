'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import Link from 'next/link';

const Start = () => {

    const searchParams = useSearchParams();

    const [loanAmount, setLoanAmount] = useState(500);
    const [loanPurpose, setLoanPurpose] = useState('');
    const [clickID, setClickID] = useState(searchParams.get("CID"));
    const [affiliateID, setAffiliateID] = useState(searchParams.get("AID"));
    const [affiliateSubID, setAffiliateSubID] = useState(searchParams.get("SID"));
    const [affiliateRefID, setAffiliateRefID] = useState(searchParams.get("ARID"));

    useEffect(() => {
        localStorage.setItem('clickid', clickID);
        localStorage.setItem('affiliate_id', affiliateID);
        localStorage.setItem('affiliate_sub_id', affiliateSubID);
        localStorage.setItem('affiliate_ref_id', affiliateRefID);

        const storedLoanAmount = localStorage.getItem('loan_amount');
        const storedLoanPurpose = localStorage.getItem('loan_purpose');
        const storedClickID = localStorage.getItem('clickid');
        const storedAffiliateID = localStorage.getItem('affiliate_id');
        const storedAffiliateSubID = localStorage.getItem('affiliate_sub_id');
        const storedAffiliateRefID = localStorage.getItem('affiliate_ref_id');


        if (storedLoanAmount) setLoanAmount(storedLoanAmount);
        if (storedLoanPurpose) setLoanPurpose(storedLoanPurpose);
        if (storedClickID) setClickID(storedClickID);
        if (storedAffiliateID) setAffiliateID(storedAffiliateID);
        if (storedAffiliateSubID) setAffiliateSubID(storedAffiliateSubID);
        if (storedAffiliateRefID) setAffiliateRefID(storedAffiliateRefID);

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
        <form className="space-y-4 mb-8 p-16 shadow-lg rounded-lg bg-white flex flex-col items-right border-zinc-900 border-4 border-opacity-30">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4 capitalize">Step 1/6: Loan Details</h2>

            <div className="mt-2">
                <label htmlFor="loan_amount" className="block text-sm font-black text-zinc-900">Loan Amount</label>
                <input
                    type="range"
                    name="loan_amount"
                    min="500"
                    max="5000"
                    step="500"
                    value={loanAmount}
                    onChange={handleChange}
                    required
                    className="m-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white accent-emerald-700"
                />
                <p className="block text-4xl font-black text-emerald-700 text-center">${loanAmount}</p>
            </div>
            <div className="mt-2">
                <label htmlFor="loan_purpose" className="block text-sm font-black text-zinc-900">Loan Purpose</label>
                <select name="loan_purpose" value={loanPurpose} onChange={handleChange} required className= "mt-1 p-2 block w-auto rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"
                >
                    <option value="OTHER">Select Loan Purpose</option>
                    <option value="EMERGENCY_SITUATION">Emergency</option>
                    <option value="AUTO_REPAIR">Auto Repairs</option>
                    <option value="HOME_IMPROVEMENT">Home Improvement</option>
                    <option value="MOVING">Moving Expenses</option>
                    <option value="MEDICAL">Medical Care / Bills</option>
                    <option value="MAJOR_PURCHASE">MAJOR_PURPOSE</option>
                    <option value="CREDIT_CARD_CONSOLIDATION">Credit Card Consolidation</option>
                    <option value="DEBT_CONSOLIDATION">Debt Consolidation</option>
                    <option value="OTHER">Other</option>
                    <option value="OTHER">Prefer Not To Say</option>
                </select>
            </div>

            <Link href="/personal-details" className="w-auto flex justify-center py-2 px-4 border-2 border-green-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Next
            </Link>
        </form>
    );
};

export default Start;
