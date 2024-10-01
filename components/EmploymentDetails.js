import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EmploymentDetails = () => {
    const [employer, setEmployer] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [employerPhone, setEmployerPhone] = useState('');
    const [hireDate, setHireDate] = useState('');

    useEffect(() => {
        const storedEmployer = localStorage.getItem('employer');
        const storedJobTitle = localStorage.getItem('job_title');
        const storedEmployerPhone = localStorage.getItem('employer_phone');
        const storedHireDate = localStorage.getItem('hire_date');
        if (storedEmployer) setEmployer(storedEmployer);
        if (storedJobTitle) setJobTitle(storedJobTitle);
        if (storedEmployerPhone) setEmployerPhone(storedEmployerPhone);
        if (storedHireDate) setHireDate(storedHireDate);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
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
        }
    };

    return (
        <form className="space-y-4 mb-8 p-4 shadow-lg rounded-lg bg-white flex flex-col items-right border-zinc-900 border-4 border-opacity-30">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4 capitalize">Step 4/6: Employment Details</h2>
            <div>
                <label htmlFor="employer" className="block text-sm font-black text-zinc-900">Employer</label>
                <input name="employer" value={employer} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="job_title" className="block text-sm font-black text-zinc-900">Job Title</label>
                <input name="job_title" value={jobTitle} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="employer_phone" className="block text-sm font-black text-zinc-900">Employer Phone</label>
                <input type="tel" name="employer_phone" value={employerPhone} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="hire_date" className="block text-sm font-black text-zinc-900">Hire Date</label>
                <input type="date" name="hire_date" value={hireDate} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <Link href="/bank-details" className="w-auto flex justify-center py-2 px-4 border-2 border-green-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 {Object.keys(errors).some(key => errors[key]) ? 'pointer-events-none' : ''}">
                Next
            </Link>
        </form>
    );
};

export default EmploymentDetails;
