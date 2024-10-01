import React, { useState, useEffect } from 'react';

const FinalDetails = () => {
    const [tcpa, setTcpa] = useState('');
    const [tcpaPhone, setTcpaPhone] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);

    useEffect(() => {
        const storedTcpa = localStorage.getItem('tcpa');
        const storedTcpaPhone = localStorage.getItem('tcpa_phone');
        const storedAcceptTerms = localStorage.getItem('accept_terms');
        if (storedTcpa) setTcpa(storedTcpa);
        if (storedTcpaPhone) setTcpaPhone(storedTcpaPhone);
        if (storedAcceptTerms) setAcceptTerms(JSON.parse(storedAcceptTerms));
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'tcpa') {
            setTcpa(value);
            localStorage.setItem('tcpa', value);
        } else if (name === 'tcpa_phone') {
            setTcpaPhone(value);
            localStorage.setItem('tcpa_phone', value);
        } else if (name === 'accept_terms') {
            setAcceptTerms(checked);
            localStorage.setItem('accept_terms', checked);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validation logic here
        const formData = {
            loan_amount: localStorage.getItem('loan_amount'),
            loan_purpose: localStorage.getItem('loan_purpose'),
            first_name: localStorage.getItem('first_name'),
            last_name: localStorage.getItem('last_name'),
            email: localStorage.getItem('email'),
            phone: localStorage.getItem('phone'),
            address1: localStorage.getItem('address1'),
            address2: localStorage.getItem('address2'),
            city: localStorage.getItem('city'),
            state: localStorage.getItem('state'),
            zipcode: localStorage.getItem('zipcode'),
            residence_length: localStorage.getItem('residence_length'),
            employer: localStorage.getItem('employer'),
            job_title: localStorage.getItem('job_title'),
            employer_phone: localStorage.getItem('employer_phone'),
            hire_date: localStorage.getItem('hire_date'),
            ssn: localStorage.getItem('ssn'),
            routing_number: localStorage.getItem('routing_number'),
            bank_name: localStorage.getItem('bank_name'),
            account_number: localStorage.getItem('account_number'),
            account_type: localStorage.getItem('account_type'),
            bank_length: localStorage.getItem('bank_length'),
            direct_deposit: localStorage.getItem('direct_deposit'),
            tcpa,
            tcpa_phone: tcpaPhone,
            accept_terms: acceptTerms ? 'yes' : 'no'
        };
        try {
            // Send form data to /api/process route
            const response = await fetch('/api/process', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response);

            // Parse redirect_url from the response and redirect the user
            const { redirectUrl } = await response.json();
            localStorage.clear();
            window.location.href = redirectUrl;

        } catch (error) {
            console.error(error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}  className="space-y-4 mb-8 p-4 shadow-lg rounded-lg bg-white flex flex-col items-right border-zinc-900 border-4 border-opacity-30">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4 capitalize">Final Step 6/6</h2>
            <div>
                <label htmlFor="tcpa_phone" className="block text-sm font-black text-zinc-900">TCPA Phone</label>
                <input type="tel" name="tcpa_phone" value={tcpaPhone} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div className="flex items-center">
                <label htmlFor="tcpa" className="text-sm font-black text-zinc-900 mr-2">TCPA</label>
                <input type="checkbox" name="tcpa" checked={tcpa === 'yes'} onChange={handleChange} className="mt-1 p-2 rounded-md border-zinc-700 border-2 border-opacity-20 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div className="flex items-center">
                <label htmlFor="accept_terms" className="text-sm font-black text-zinc-900 mr-2">Accept Terms</label>
                <input type="checkbox" name="accept_terms" checked={acceptTerms} onChange={handleChange} required className="mt-1 p-2 rounded-md border-zinc-700 border-2 border-opacity-20 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <button type="submit"  className="w-auto flex justify-center py-2 px-4 border-2 border-green-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 {Object.keys(errors).some(key => errors[key]) ? 'pointer-events-none' : ''}">Submit</button>
        </form>
    );
};

export default FinalDetails;
