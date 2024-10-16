import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PersonalDetails = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [activeMilitary, setActiveMilitary] = useState('');
    const [dob, setDob] = useState(''); 
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        const storedFirstName = localStorage.getItem('first_name');
        const storedLastName = localStorage.getItem('last_name');
        const storedEmail = localStorage.getItem('email');
        const storedPhone = localStorage.getItem('phone');
        const storedDob = localStorage.getItem('dob');
        const storedActiveMilitary = localStorage.getItem('active_military');
        if (storedFirstName) setFirstName(storedFirstName);
        if (storedLastName) setLastName(storedLastName);
        if (storedEmail) setEmail(storedEmail);
        if (storedPhone) setPhone(storedPhone);
        if (storedDob) setDob(storedDob);
        if (storedActiveMilitary) setActiveMilitary(storedActiveMilitary);
    }, []);


    const validate = (name, value) => {
        let error = '';
        switch (name) {
            case 'dob':
            case 'first_name':
            case 'last_name':
                if (!value) error = 'This field is required';
                break;
            case 'email':
                if (!value) error = 'This field is required';
                else if (!/\S+@\S+\.\S+/.test(value)) error = 'Invalid email';
                break;
            case 'phone':
                if (!value) error = 'This field is required';
                else if (!/^\d{10}$/.test(value)) error = 'Invalid phone number';
                break;
            default:
                break;
        }
        return error;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const error = validate(name, value);
    
        if (name === 'first_name') {
            setFirstName(value);
            localStorage.setItem('first_name', value);
        } else if (name === 'last_name') {
            setLastName(value);
            localStorage.setItem('last_name', value);
        } else if (name === 'email') {
            setEmail(value);
            localStorage.setItem('email', value);
        } else if (name === 'phone') {
            setPhone(value);
            localStorage.setItem('phone', value);
        } else if (name === 'active_military') {
            setActiveMilitary(value);
            localStorage.setItem('active_military', value);
        } else if (name === 'dob') {
            setDob(value);
            localStorage.setItem('dob', value);
        }
    
        // Clear the error message if the input is valid
        if (!error) {
            setErrors({ ...errors, [name]: '' });
        }
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
            <h2 className="text-lg font-semibold text-zinc-900 mb-4 capitalize">Step 2/6: Personal Details</h2>
            <div>
                <label htmlFor="first_name" className="block text-sm font-black text-zinc-900">First Name</label>
                <input name="first_name" value={firstName} onChange={handleChange} onBlur={handleBlur} required className={`mt-1 p-2 block w-full rounded-md border-2 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white ${touched.first_name && errors.first_name ? 'border-red-500' : 'border-zinc-700 border-opacity-20'}`} />
                {touched.first_name && errors.first_name && <p className="text-red-500 text-xs italic">{errors.first_name}</p>}
            </div>
            <div>
                <label htmlFor="last_name" className="block text-sm font-black text-zinc-900">Last Name</label>
                <input name="last_name" value={lastName} onChange={handleChange} onBlur={handleBlur} required className={`mt-1 p-2 block w-full rounded-md border-2 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white ${touched.last_name && errors.last_name ? 'border-red-500' : 'border-zinc-700 border-opacity-20'}`} />
                {touched.last_name && errors.last_name && <p className="text-red-500 text-xs italic">{errors.last_name}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-black text-zinc-900">Email</label>
                <input type="email" name="email" value={email} onChange={handleChange} onBlur={handleBlur} required className={`mt-1 p-2 block w-full rounded-md border-2 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white ${touched.email && errors.email ? 'border-red-500' : 'border-zinc-700 border-opacity-20'}`} />
                {touched.email && errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-black text-zinc-900">Phone</label>
                <input type="tel" name="phone" value={phone} onChange={handleChange} onBlur={handleBlur} required className={`mt-1 p-2 block w-full rounded-md border-2 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white ${touched.phone && errors.phone ? 'border-red-500' : 'border-zinc-700 border-opacity-20'}`} />
                {touched.phone && errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
            </div>
            <div>
                <label htmlFor="dob" className="block text-sm font-black text-zinc-900">Date of Birth</label>
                <input type="date" name="dob" value={dob} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
                {touched.dob && errors.dob && <p className="text-red-500 text-xs italic">{errors.dob}</p>}
            </div>
            <div>
                <label htmlFor="active_military" className="block text-sm font-black text-zinc-900">Active Military</label>
                <select name="active_military" value={activeMilitary} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white">
                    <option value="NO">No</option>
                    <option value="YES">Yes</option>
                </select>
            </div>
            <Link href="/address-details" className={`w-auto flex justify-center py-2 px-4 border-2 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${!isFormValid() ? 'pointer-events-none opacity-50' : 'border-green-300'}`}>
                Next
            </Link>
        </form>
    );
};
export default PersonalDetails;
