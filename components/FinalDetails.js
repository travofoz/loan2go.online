import React, { useState, useEffect } from 'react';

const FinalDetails = (req) => {
    const [consent, setConsent] = useState('');
    const [tcpaPhone, setTcpaPhone] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [tfCcertURL, setTfCertURL] = useState('');
    const [tfToken, setTfToken] = useState('');
    const [tfPingURL, setTfPingURL] = useState('');




    useEffect(() => {
        const storedConsent = localStorage.getItem('consent_sms_email');
        const storedTcpaPhone = localStorage.getItem('tcpa_phone');
        const storedAcceptTerms = localStorage.getItem('accept_terms');
        const storedTfCertURL = document.querySelector('#xxTrustedFormCertUrl_0');
        const storedTfToken = document.querySelector('#xxTrustedFormToken_0');
        const storedTfPingURL = document.querySelector('#xxTrustedFormPingUrl_0');
        if (storedConsent) setConsent(storedConsent);
        if (storedTcpaPhone) setTcpaPhone(storedTcpaPhone);
        if (storedAcceptTerms) setAcceptTerms(JSON.parse(storedAcceptTerms));
        if (storedTfCertURL) setTfCertURL(storedTfCertURL);
        if (storedTfToken) setTfToken(storedTfToken);
        if (storedTfPingURL) setTfPingURL(storedTfPingURL);

    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'consent_sms_email') {
            setConsent(value);
            localStorage.setItem('consent_sms_email', checked);
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
            employer: localStorage.getItem('employer'),
            job_title: localStorage.getItem('job_title'),
            active_military: localStorage.getItem('active_military'),
            hire_date: localStorage.getItem('hire_date'),
            ssn: localStorage.getItem('ssn'),
            id_number: localStorage.getItem('id_number'),
            id_state: localStorage.getItem('id_state'),
            income_type: localStorage.getItem('income_type'),
            income_payment_frequency: localStorage.getItem('pay_frequency'),
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
            employer_phone: localStorage.getItem('employer_phone'),
            routing_number: localStorage.getItem('routing_number'),
            bank_name: localStorage.getItem('bank_name'),
            account_number: localStorage.getItem('account_number'),
            account_type: localStorage.getItem('account_type'),
            bank_length: localStorage.getItem('bank_length'),
            direct_deposit: localStorage.getItem('direct_deposit'),
            consent_sms_email: consent ? 'YES' : 'NO',
            tcpa_phone: tcpaPhone,
            accept_terms: acceptTerms ? 'YES' : 'NO',
            clickid: localStorage.getItem('clickid'),
            affiliate_id: localStorage.getItem('affiliate_id'),
            affiliate_ref_id: localStorage.getItem('affiliate_ref_id'),
            affiliate_sub_id: localStorage.getItem('affiliate_sub_id'),
            offer_id: "9",
            xxTrustedFormCertUrl: tfCcertURL,
            xxTrustedFormToken: tfToken,
            xxTrustedFormPingUrl: tfPingURL
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
                <input type="tel" name="tcpa_phone" value={tcpaPhone} onChange={handleChange} className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div className="flex items-center">
                <label htmlFor="consent_sms_email" className="text-sm font-black text-zinc-900 mr-2">Consent to receive Email and SMS</label>
                <input type="checkbox" name="consent_sms_email" checked={consent} onChange={handleChange} className="mt-1 p-2 rounded-md border-zinc-700 border-2 border-opacity-20 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
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
