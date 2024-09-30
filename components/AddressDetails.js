import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AddressDetails = () => {
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [residenceLength, setResidenceLength] = useState('');

    useEffect(() => {
        const storedAddress1 = localStorage.getItem('address1');
        const storedAddress2 = localStorage.getItem('address2');
        const storedCity = localStorage.getItem('city');
        const storedState = localStorage.getItem('state');
        const storedZipcode = localStorage.getItem('zipcode');
        const storedResidenceLength = localStorage.getItem('residence_length');
        if (storedAddress1) setAddress1(storedAddress1);
        if (storedAddress2) setAddress2(storedAddress2);
        if (storedCity) setCity(storedCity);
        if (storedState) setState(storedState);
        if (storedZipcode) setZipcode(storedZipcode);
        if (storedResidenceLength) setResidenceLength(storedResidenceLength);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'address1') {
            setAddress1(value);
            localStorage.setItem('address1', value);
        } else if (name === 'address2') {
            setAddress2(value);
            localStorage.setItem('address2', value);
        } else if (name === 'city') {
            setCity(value);
            localStorage.setItem('city', value);
        } else if (name === 'state') {
            setState(value);
            localStorage.setItem('state', value);
        } else if (name === 'zipcode') {
            setZipcode(value);
            localStorage.setItem('zipcode', value);
        } else if (name === 'residence_length') {
            setResidenceLength(value);
            localStorage.setItem('residence_length', value);
        }
    };

    return (
        <form>
            <div>
                <label htmlFor="address1">Address Line 1</label>
                <input name="address1" value={address1} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="address2">Address Line 2</label>
                <input name="address2" value={address2} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input name="city" value={city} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="state">State</label>
                <select name="state" value={state} onChange={handleChange} required>
                    <option value="">Select State</option>
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
                <label htmlFor="zipcode">Zip Code</label>
                <input name="zipcode" value={zipcode} onChange={handleChange} required />
            </div>
            <div>
                <label htmlFor="residence_length">Residence Length</label>
                <input type="number" name="residence_length" value={residenceLength} onChange={handleChange} required />
            </div>
            <Link href="/employment-details">
                Next
            </Link>
        </form>
    );
};

export default AddressDetails;
