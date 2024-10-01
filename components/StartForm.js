import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

export default function StartForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cellphone: '',
    email: '',
    optIn: false,
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prevState => ({
      ...prevState,
      cellphone: value
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.state) errors.state = 'State is required';
    if (!formData.zip) errors.zip = 'Zip code is required';
    if (!formData.cellphone) errors.cellphone = 'Cellphone is required';
    if (!formData.email) errors.email = 'Email is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (formData.cellphone && !/^\+?[1-9]\d{1,14}$/.test(formData.cellphone)) errors.cellphone = 'Cellphone number is invalid';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    try {
      toast.success('step 1 completed!', {
        autoClose: 2000,
        onClose: () => router.push({
          pathname: '/employment',
          query: formData,
        }),
      });
      setFormData({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cellphone: '',
        email: '',
        optIn: false,
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  const customDropdownStyle = {
    backgroundColor: '#fff',
    color: '#000',
    border: '1px solid #d1d5db',
  };

  const customFlagStyle = {
    backgroundColor: '#fff',
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold text-zinc-900 mb-4 capitalize">Please use the following form to contact us</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-8 p-4 shadow-lg rounded-lg bg-white">
      <div className="mt-2">
        <label htmlFor="firstName" className="block text-sm font-medium text-zinc-900">First Name *</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"
        />
        {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
      </div>
      <div className="mt-2">
        <label htmlFor="lastName" className="block text-sm font-medium text-zinc-900">Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"
        />
        {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
      </div>
      <div className="mt-2">
        <label htmlFor="address" className="block text-sm font-medium text-zinc-900">Address *</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"
        />
        {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
      </div>
      <div className="mt-2">
        <label htmlFor="city" className="block text-sm font-medium text-zinc-900">City *</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"
        />
        {errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
      </div>
      <div className="mt-2">
        <label htmlFor="state" className="block text-sm font-medium text-zinc-900">State *</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"
        />
        {errors.state && <p className="text-red-500 text-xs italic">{errors.state}</p>}
      </div>
        <div className="mt-2">
          <label htmlFor="zip" className="block text-sm font-medium text-zinc-900">Zip *</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"
          />
          {errors.zip && <p className="text-red-500 text-xs italic">{errors.zip}</p>}
        </div>
        <div className="mt-2">
          <label htmlFor="cellphone" className="mt-4 block text-sm font-medium text-zinc-900">Cellphone *</label>
          <PhoneInput
            country={'us'}
            value={formData.cellphone}
            onChange={handlePhoneChange}
            dropdownStyle={customDropdownStyle}
            buttonStyle={customFlagStyle}
            inputStyle={{
              width: '100%',
              backgroundColor: '#fff',
              color: '#000',
              border: '0',
              borderRadius: '0.375rem',
              padding: '0.5rem 1rem',
              paddingLeft: '3rem',
            }}
            containerClass="w-full"
            dropdownClass="custom-phone-dropdown"
            inputProps={{
              name: 'cellphone',
              required: true,
              className: 'focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50'
            }}
          />
          {errors.cellphone && <p className="text-red-500 text-xs italic">{errors.cellphone}</p>}
        </div>
        <div className="mt-2">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-900">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50 bg-white"
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="optIn"
            name="optIn"
            checked={formData.optIn}
            onChange={handleChange}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="optIn" className="ml-2 block text-sm text-zinc-900">
            Permission to contact
          </label>
        </div>
        <div className="mt-2">
          <button type="submit" className="w-full flex justify-center py-2 px-4 border-2 border-green-300 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
