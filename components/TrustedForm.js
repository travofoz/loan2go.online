'use client'
import React, { useState, useEffect } from 'react';
import Script from 'next/script';

const TrustedForm = () => {
    const [tfCcertURL, setTfCertURL] = useState('');
    const [tfToken, setTfToken] = useState('');
    const [tfPingURL, setTfPingURL] = useState('');

    useEffect(() => {
        const storedTfCertURL = localStorage.getItem('xxTrustedFormCertUrl_0');
        const storedTfToken = localStorage.getItem('xxTrustedFormToken_0');
        const storedTfPingURL = localStorage.getItem('xxTrustedFormPingUrl_0');
        if (storedTfCertURL) setTfCertURL(storedTfCertURL);
        if (storedTfToken) setTfToken(storedTfToken);
        if (storedTfPingURL) setTfPingURL(storedTfPingURL);
    }, []);

    const handleScriptLoad = () => {
        console.log(`trusted form loaded`);
        const certUrl = document.querySelector('#xxTrustedFormCertUrl_0').value;
        const token = document.querySelector('#xxTrustedFormToken_0').value;
        const pingUrl = document.querySelector('#xxTrustedFormPingUrl_0').value;
        setTfCertURL(certUrl);
        setTfToken(token);
        setTfPingURL(pingUrl);
        localStorage.setItem('xxTrustedFormCertUrl_0', certUrl);
        localStorage.setItem('xxTrustedFormToken_0', token);
        localStorage.setItem('xxTrustedFormPingUrl_0', pingUrl);
    };

    const tfSrc = 'https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&use_tagged_consent=true&l=' + new Date().getTime() + Math.random();

    return (
        <>
            <Script
                src={tfSrc}
                strategy="lazyOnload"
                onLoad={handleScriptLoad}
            />
        </>
    );
};

export default TrustedForm;
