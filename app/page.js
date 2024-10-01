'use client'
import React, { useState } from 'react';
import LoanDetails from '@/components/LoanDetails';

export default function Home() {
  const [loanAmount, setLoanAmount] = useState(500);

  const handleSliderChange = (event) => {
    setLoanAmount(event.target.value);
  };
  return (
    <div className="page-container p-0">

      <div className="flex-container m-0 p-0" style={{
        backgroundImage: `url('/family.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '100vh',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#993300',
          opacity: 0.30
        }}></div>
        <div className="page-title-container">
          <h2 className="page-title">Find Cash</h2>
        </div>
        <div className="section-title-container">
          <p className="section-title">Fast, Easy, Secure</p>
        </div>
        <div className="p-12 m-12 md:absolute md:right-20 md:top-1/2 md:transform md:-translate-y-1/2 p-4 bg-none rounded-lg shadow-lg">
          <LoanDetails />
        </div>
      </div>
      {/*}
      <div className="">
        <p className="body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </p>
      </div>
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
      <div className="text-center border-2 border-zinc-400 rounded-md shadow-xl bg-emerald-100 bg-opacity-80 p-6 m-6">
      <h3 className="text-2xl font-black">Safe & Secure</h3>
            <h4 className="text-xl italic font-bold">Connect with a Helpful Lender</h4>
            <p>Connect with
a Helpful Lender
We commit to connecting you with an approved lender. We also made the process simple. No need to visit hundreds of websites and fill out numerous paperwork.</p>
          </div>
          <div className="text-center border-2 border-zinc-400 rounded-md shadow-xl bg-emerald-200 bg-opacity-80 p-6 m-6">
            <h3 className="text-2xl font-black">As Fast As 24 Hrs</h3>
            <h4 className="text-xl italic font-bold">The Need for Speed</h4>
            <p>If you have questions regarding a loan inquiry, approval, funded loan, payments or any other question about a particular loan, please contact your lender or lending partner directly. If you received a loan, you should already have the lender’s or lending partner’s contact information.</p>
          </div>
          <div className="text-center border-2 border-zinc-400 rounded-md shadow-xl bg-emerald-300 bg-opacity-80 p-6 m-6">
            <h3 className="text-2xl font-black">Loans from $500</h3>
            <h4 className="text-xl italic font-bold">Your Loan, Your Business</h4>
            <p>We recognize a personal loan is a private matter. Reasons for needing money range from critical automobile maintenance, unexpected medical expenses, etc.</p>
          </div>
        </div>
    </div>
  );
}