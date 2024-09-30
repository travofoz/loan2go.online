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
        <div>
            <div>
                <label htmlFor="employer">Employer</label>
                <input name="employer" value={employer} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="job_title">Job Title</label>
                <input name="job_title" value={jobTitle} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="employer_phone">Employer Phone</label>
                <input type="tel" name="employer_phone" value={employerPhone} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="hire_date">Hire Date</label>
                <input type="date" name="hire_date" value={hireDate} onChange={handleChange} required />
            </div>
            <Link href="/bank-details">
                Next
            </Link>
        </div>
    );
};

export default EmploymentDetails;
