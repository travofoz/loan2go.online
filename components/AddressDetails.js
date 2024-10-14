import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AddressDetails = () => {
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [residenceLength, setResidenceLength] = useState('1');
    const [residenceType, setResidenceType] = useState('');
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

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

    const validate = (name, value) => {
        let error = '';
        switch (name) {
            case 'address1':
            case 'city':
            case 'state':
            case 'residence_length':
            case 'residence_type':
                if (!value) error = 'This field is required';
                break;
            case 'zipcode':
                if (!value) error = 'This field is required';
                else if (!/^\d{5}$/.test(value)) error = 'Invalid zip code';
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
            <h2 className="text-lg font-semibold text-zinc-900 mb-4 capitalize">Step 3/6: Address Details</h2>
            <div>
                <label htmlFor="address1" className="block text-sm font-black text-zinc-900">Address Line 1</label>
                <input name="address1" value={address1} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
                {touched.address1 && errors.address1 && <p className="text-red-500 text-xs italic">{errors.address1}</p>}
            </div>
            <div>
                <label htmlFor="address2" className="block text-sm font-black text-zinc-900">Address Line 2</label>
                <input name="address2" value={address2} onChange={handleChange} onBlur={handleBlur} className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
            </div>
            <div>
                <label htmlFor="city" className="block text-sm font-black text-zinc-900">City</label>
                <input name="city" value={city} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
                {touched.city && errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
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
                {touched.state && errors.state && <p className="text-red-500 text-xs italic">{errors.state}</p>}

            </div>
            <div>
                <label htmlFor="zipcode" className="block text-sm font-black text-zinc-900">Zip Code</label>
                <input name="zipcode" value={zipcode} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"/>
                {touched.zipcode && errors.zipcode && <p className="text-red-500 text-xs italic">{errors.zipcode}</p>}

            </div>
            <div>
                <label htmlFor="residence_type" className="block text-sm font-black text-zinc-900">Residence Type</label>
                <select name="residence_type" value={residenceType} onChange={handleChange} onBlur={handleBlur} required className="mt-1 p-2 block w-full rounded-md border-zinc-700 border-2 border-opacity-20  shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white">
                    <option value="">Residence Type</option>
                    <option value="YES">Own Home</option>
                    <option value="NO">Rent</option>
                </select>
                {touched.residence_type && errors.residence_type && <p className="text-red-500 text-xs italic">{errors.residence_type}</p>}

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
                {touched.residence_length && errors.residence_length && <p className="text-red-500 text-xs italic">{errors.residence_length}</p>}
                <p>Years: {residenceLength === "0" ? "Less than a year" : `${residenceLength} years`}</p>
            </div>
            <Link href="/employment-details" className={`w-auto flex justify-center py-2 px-4 border-2 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${!isFormValid() ? 'pointer-events-none opacity-50' : 'border-green-300'}`}>
                Next
            </Link>
        </form>
    );
};

export default AddressDetails;
