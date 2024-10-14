import React, { useState, useEffect } from 'react';
//import Link from 'next/link';
import dynamic from 'next/dynamic';
const DynamicLink = dynamic(() => import('next/link'), { ssr: false });

const EmploymentDetails = () => {
    const [employer, setEmployer] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [employerPhone, setEmployerPhone] = useState('');
    const [hireDate, setHireDate] = useState('');
    const [incomeType, setIncomeType] = useState('');
    const [payFrequency, setPayFrequency] = useState(''); 
    const [nextPayDate1, setNextPayDate1] = useState(''); 
    const [nextPayDate2, setNextPayDate2] = useState(''); 
    const [incomeNetMonthly, setIncomeNetMonthly] = useState('500');
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        const storedEmployer = localStorage.getItem('employer');
        const storedJobTitle = localStorage.getItem('job_title');
        const storedEmployerPhone = localStorage.getItem('employer_phone');
        const storedHireDate = localStorage.getItem('hire_date');
        const storedIncomeType = localStorage.getItem('income_type');
        const storedPayFrequency = localStorage.getItem('pay_frequency'); 
        const storedNextPayDate1 = localStorage.getItem('next_pay_date_1'); 
        const storedNextPayDate2 = localStorage.getItem('next_pay_date_2'); 
        const storedIncomeNetMonthly = localStorage.getItem('income_net_monthly'); 
        if (storedEmployer) setEmployer(storedEmployer);
        if (storedJobTitle) setJobTitle(storedJobTitle);
        if (storedEmployerPhone) setEmployerPhone(storedEmployerPhone);
        if (storedHireDate) setHireDate(storedHireDate);
        if (storedIncomeType) setIncomeType(storedIncomeType);
        if (storedPayFrequency) setPayFrequency(storedPayFrequency); 
        if (storedNextPayDate1) setNextPayDate1(storedNextPayDate1); 
        if (storedNextPayDate2) setNextPayDate1(storedNextPayDate2); 
        if (storedIncomeNetMonthly) setIncomeNetMonthly(storedIncomeNetMonthly); 


    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const error = validate(name, value);

        if (name === 'employer') {
            setEmployer(value);
            localStorage.setItem('employer', value);
        } else if (name === 'job_title') {
            setJobTitle(value);
            localStorage.setItem('job_title', value);
        } else if (name === 'employer_phone') {
            setEmployerPhone(value);
            localStorage.setItem('employer_phone', value);
        } else if (name === 'hire_date') {
            setHireDate(value);
            localStorage.setItem('hire_date', value);
        } else if (name === 'income_type') {
            setIncomeType(value);
            localStorage.setItem('income_type', value);
        } else if (name === 'pay_frequency') { 
            setPayFrequency(value);
            localStorage.setItem('pay_frequency', value);
        } else if (name === 'next_pay_date_1') { 
            setNextPayDate1(value);next_pay_date_1
            localStorage.setItem('next_pay_date_1', value);
        } else if (name === 'next_pay_date_2') { 
            setNextPayDate2(value);
            localStorage.setItem('next_pay_date_2', value);
        } else if (name === 'income_net_monthly') { 
            setIncomeNetMonthly(value);
            localStorage.setItem('income_net_monthly', value);
        }
        // Clear the error message if the input is valid
        if (!error) {
            setErrors({ ...errors, [name]: '' });
        }
    };
    const validate = (name, value) => {
        let error = '';
        switch (name) {
            case 'employer':
            case 'job_title':
            case 'hire_date':
            case 'income_type':
            case 'pay_frequency':
            case 'next_pay_date_1':
            case 'next_pay_date_2':
            case 'income_net_monthly':
                if (!value) error = 'This field is required';
                break;
            case 'employer_phone':
                if (!value) error = 'This field is required';
                else if (!/^\d{10}$/.test(value)) error = 'Invalid phone number';
                break;
            default:
                break;
        }
        return error;
    };
    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validate(name, value);
        setErrors({ ...errors, [name]: error });
        setTouched({ ...touched, [name]: true });
        localStorage.setItem(name, value);
    };

    
    const isFormValid = () => {
        return Object.keys(errors).every(key => !errors[key]);
    };

    return (
        <form className="space-y-4 mb-8 p-4 shadow-lg rounded-lg bg-white flex flex-col items-right border-zinc-900 border-4 border-opacity-30">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4 capitalize">Step 4/6: Employment Details</h2>
            <div>
                <label htmlFor="income_type" className="block text-sm font-black text-zinc-900">Income Type</label>
                <select name="income_type" value={incomeType} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white">
                    <option value="">Select...</option>
                    <option value="EMPLOYMENT">Employment</option>
                    <option value="BENEFITS">Benefits</option>
                </select>
                {touched.income_type && errors.income_type && <p className="text-red-500 text-xs italic">{errors.income_type}</p>}
            </div>
            <div>
                <label htmlFor="employer" className="block text-sm font-black text-zinc-900">Employer</label>
                <input name="employer" value={employer} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
                {touched.employer && errors.employer && <p className="text-red-500 text-xs italic">{errors.employer}</p>}

            </div>
            <div>
                <label htmlFor="job_title" className="block text-sm font-black text-zinc-900">Job Title</label>
                <input name="job_title" value={jobTitle} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
                {touched.job_title && errors.job_title && <p className="text-red-500 text-xs italic">{errors.job_title}</p>}

            </div>
            <div>
            <label htmlFor="pay_frequency" className="block text-sm font-black text-zinc-900">Pay Frequency</label>
                <select name="pay_frequency" value={payFrequency} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white">
                    <option value="BIWEEKLY">Select...</option>
                    <option value="WEEKLY">Weekly</option>
                    <option value="BIWEEKLY">Biweekly</option>
                    <option value="TWICEMONTHLY">Twice monthly</option>
                    <option value="MONTHLY">Monthly</option>
                </select>
                {touched.pay_frequency && errors.pay_frequency && <p className="text-red-500 text-xs italic">{errors.pay_frequency}</p>}

            </div>
            <div>
                <label htmlFor="next_pay_date_1" className="block text-sm font-black text-zinc-900">Next Pay Date 1</label>
                <input type="date" name="next_pay_date_1" value={nextPayDate1} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
                {touched.next_pay_date_1 && errors.next_pay_date_1 && <p className="text-red-500 text-xs italic">{errors.next_pay_date_1}</p>}

            </div>
            <div>
                <label htmlFor="next_pay_date_2" className="block text-sm font-black text-zinc-900">Next Pay Date 2</label>
                <input type="date" name="next_pay_date_2" value={nextPayDate2} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
                {touched.next_pay_date_2 && errors.next_pay_date_2 && <p className="text-red-500 text-xs italic">{errors.next_pay_date_2}</p>}

            </div>
            <div>
                <label htmlFor="income_net_monthly" className="block text-sm font-black text-zinc-900">Net Monthly Income</label>
                <input
                    type="range"
                    name="income_net_monthly"
                    min="500"
                    max="10000"
                    step="500"
                    value={incomeNetMonthly}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className="m-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white accent-emerald-700"
                />
                {touched.income_net_monthly && errors.income_net_monthly && <p className="text-red-500 text-xs italic">{errors.income_net_monthly}</p>}

                <p className="block text-4xl font-black text-emerald-700 text-center">${incomeNetMonthly}</p>
            </div>
            <div>
                <label htmlFor="employer_phone" className="block text-sm font-black text-zinc-900">Employer Phone</label>
                <input type="tel" name="employer_phone" value={employerPhone} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
                {touched.employer_phone && errors.employer_phone && <p className="text-red-500 text-xs italic">{errors.employer_phone}</p>}

            </div>
            <div>
                <label htmlFor="hire_date" className="block text-sm font-black text-zinc-900">Hire Date</label>
                <input type="date" name="hire_date" value={hireDate} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
                {touched.hire_date && errors.hire_date && <p className="text-red-500 text-xs italic">{errors.hire_date}</p>}

            </div>
            <DynamicLink  href="/bank-details" className={`w-auto flex justify-center py-2 px-4 border-2 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${!isFormValid() ? 'pointer-events-none opacity-50' : 'border-green-300'}`}>
                Next
            </DynamicLink>
        </form>
    );
};

export default EmploymentDetails;
