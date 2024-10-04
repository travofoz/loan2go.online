import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AddressDetails = () => {
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [residenceLength, setResidenceLength] = useState('');
    const [residenceType, setResidenceType] = useState('');
    const [errors, setErrors] = useState({});


    useEffect(() => {
        const storedAddress1 = localStorage.getItem('address1');
        const storedAddress2 = localStorage.getItem('address2');
        const storedCity = localStorage.getItem('city');
        const storedState = localStorage.getItem('state');
        const storedZipcode = localStorage.getItem('zipcode');
        const storedResidenceLength = localStorage.getItem('residence_length');
        const storedResidenceType = localStorage.getItem('residence_type');
        if (storedAddress1) setAddress1(storedAddress1);
        if (storedAddress2) setAddress2(storedAddress2);
        if (storedCity) setCity(storedCity);
        if (storedState) setState(storedState);
        if (storedZipcode) setZipcode(storedZipcode);
        if (storedResidenceLength) setResidenceLength(storedResidenceLength);
        if (storedResidenceType) setResidenceType(storedResidenceType);


    }, []);

    const validate = (name, value) => {
        switch (name) {
            case 'address1':
            case 'address2':
            case 'city':
                if (!value.match(/^[a-zA-Z0-9\s,'-]*$/)) {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: 'Invalid input' }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
                }
                break;
            case 'state':
                if (!value.match(/^[A-Z]{2}$/)) {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: 'Invalid state' }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
                }
                break;
            case 'zipcode':
                if (!value.match(/^\d{5}(?:-\d{4})?$/)) {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: 'Invalid zip code' }));
                } else {
                    setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
                }
                break;
            default:
                break;
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validate(name, value);
        localStorage.setItem(name, value);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'address1') {
            setAddress1(value);
        } else if (name === 'address2') {
            setAddress2(value);
        } else if (name === 'city') {
            setCity(value);
        } else if (name === 'state') {
            setState(value);
        } else if (name === 'zipcode') {
            setZipcode(value);
        } else if (name === 'residence_length') {
            setResidenceLength(value);
        } else if (name === 'residence_type') {
            setResidenceType(value);
        }
    };

    return (
        <form className="space-y-4 mb-8 p-4 shadow-lg rounded-lg bg-white flex flex-col items-right border-zinc-900 border-4 border-opacity-30">
            <h2 className="text-lg font-semibold text-zinc-900 mb-4 capitalize">Step 3/6: Address Details</h2>
            <div>
                <label htmlFor="address1" className="block text-sm font-black text-zinc-900">Address Line 1</label>
                <input name="address1" value={address1} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="address2" className="block text-sm font-black text-zinc-900">Address Line 2</label>
                <input name="address2" value={address2} onChange={handleChange} onBlur={handleBlur} className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="city" className="block text-sm font-black text-zinc-900">City</label>
                <input name="city" value={city} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="state" className="block text-sm font-black text-zinc-900">State</label>
                <select name="state" value={state} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white">
                    <option value="">Select State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="DC">District of Columbia</option>
                    <option value="PR">Puerto Rico</option>
                </select>
            </div>
            <div>
                <label htmlFor="zipcode" className="block text-sm font-black text-zinc-900">Zip Code</label>
                <input name="zipcode" value={zipcode} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="residence_type" className="block text-sm font-black text-zinc-900">Residence Type</label>
                <select name="residence_type" value={residenceType} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white">
                    <option value="">Residence Type</option>
                    <option value="YES">Own Home</option>
                    <option value="NO">Rent</option>
                </select>
            </div>
            <div>
                <label htmlFor="residence_length" className="block text-sm font-black text-zinc-900">Residence Length</label>
                <input
                    type="range"
                    name="residence_length"
                    min="0"
                    max="10"
                    value={residenceLength}
                    onChange={handleChange} onBlur={handleBlur}
                    required
                    className="m-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white accent-emerald-700"
                />
                <p>Years: {residenceLength === "0" ? "Less than a year" : `${residenceLength} years`}</p>
            </div>
            <Link href="/employment-details" className="w-auto flex justify-center py-2 px-4 border-2 border-green-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 {Object.keys(errors).some(key => errors[key]) ? 'pointer-events-none' : ''}">
                Next
            </Link>
        </form>
    );
};

export default AddressDetails;
