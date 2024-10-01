import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const PersonalDetails = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const storedFirstName = localStorage.getItem('first_name');
        const storedLastName = localStorage.getItem('last_name');
        const storedEmail = localStorage.getItem('email');
        const storedPhone = localStorage.getItem('phone');
        if (storedFirstName) setFormData({ ...formData, first_name: storedFirstName });
        if (storedLastName) setFormData({ ...formData, last_name: storedLastName });
        if (storedEmail) setFormData({ ...formData, email: storedEmail });
        if (storedPhone) setFormData({ ...formData, phone: storedPhone });
    }, []);

    const validate = (name, value) => {
        let error = '';
        switch (name) {
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
        setErrors({ ...errors, [name]: error });
        if (!error) {
            localStorage.setItem(name, value);
            setFormData({ ...formData, [name]: value });
        }
    };

    return (
        <form className="space-y-4 mb-8 p-4 shadow-lg rounded-lg bg-white flex flex-col items-right border-zinc-900 border-4 border-opacity-30">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4 capitalize">Step 2/6: Personal Details</h2>
            <div>
                <label htmlFor="first_name" className="block text-sm font-black text-zinc-900">First Name</label>
                <input name="first_name" value={formData.first_name} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white {errors.first_name ? 'border-red-500' : ''}" />
                {errors.first_name && <p className="text-red-500 text-xs italic">{errors.first_name}</p>}
            </div>
            <div>
                <label htmlFor="last_name" className="block text-sm font-black text-zinc-900">Last Name</label>
                <input name="last_name" value={formData.last_name} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white {errors.last_name ? 'border-red-500' : ''}" />
                {errors.last_name && <p className="text-red-500 text-xs italic">{errors.last_name}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-black text-zinc-900">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white {errors.email ? 'border-red-500' : ''}" />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-black text-zinc-900">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white {errors.phone ? 'border-red-500' : ''}" />
                {errors.phone && <p className="text-red-500 text-xs italic">{errors.phone}</p>}
            </div>
            <Link href="/address-details" className="w-auto flex justify-center py-2 px-4 border-2 border-green-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 {Object.keys(errors).some(key => errors[key]) ? 'pointer-events-none' : ''}">
                Next
            </Link>
        </form>
    );
};

export default PersonalDetails;
