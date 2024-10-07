'use client'
import React from 'react';
import Script from 'next/script';


const TrustedForm = () => {
    const tfSrc = 'https://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&ping_field=xxTrustedFormPingUrl&use_tagged_consent=true&l=' + new Date().getTime() + Math.random();
    return (
        <>
            <Script
            src={tfSrc}
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`trusted form loaded`)
            }
            />
        </>
    )
};

export default TrustedForm;
