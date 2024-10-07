import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request) {
    const formData = await request.json();
    const userIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = navigator.userAgent;


    // Write form data to loan application table using Prisma
    await prisma.loanApplication.create({
        data: formData,
    });

    // Send form data to remote API using fetch
    const url = "https://leads-inst523-client.phonexa.com/lead/";
    const jsonBody = {
        "testMode": 1 ,
        "apiId": "F3F4A0A3E8AE439CA241AC6FCFB1C841",
        "apiPassword": "5d3c3291",
        "productId": "1",
        "price": "0.01",
        "userIp": userIp ,
        "userAgent": userAgent ,
        "loanAmount": formData.loan_amount ,
        "workCompanyName": formData.employer ,
        "jobTitle": formData.job_title ,
        "activeMilitary": formData.active_military , 
        "workTimeAtEmployer": formData.hire_date ,
        "ssn": formData.ssn ,
        "driversLicenseNumber": formData.id_number , 
        "driversLicenseState": formData.id_state , 
        "incomeType": formData.income_type , 
        "incomePaymentFrequency": formData.income_payment_frequency , 
        "incomeNetMonthly": formData.income_net_monthly , 
        "incomeNextDate1": formData.income_next_date1 , 
        "incomeNextDate2": formData.income_next_date2 , 
        "bankDirectDeposit": formData.direct_deposit ,
        "bankAba": formData.routing_number ,
        "bankName": formData.bank_name ,
        "bankAccountNumber": formData.account_number ,
        "bankAccountType": formData.account_type ,
        "bankAccountLengthMonths": (formData.bank_length *12),
        "firstName": formData.first_name ,
        "lastName": formData.last_name ,
        "dob": formData.dob , 
        "address": formData.address1 ,
        "zip": formData.zipcode ,
        "city": formData.city ,
        "state": formData.state ,
        "ownHome": formData.residence_type ,
        "addressLengthMonths": (formData.residence_length * 12),
        "email": formData.email ,
        "homePhone": formData.phone , 
        "workPhone": formData.employer_phone ,
        "cellPhone": formData.phone ,
        "consentEmailSms": formData.consent_email_sms   , 
        "loanPurpose": formData.loan_purpose , 
        "clickid": formData.clickid , 
        "source": formData.affiliate_sub_id , 
        "webSiteUrl": "https://loan2go.online" , 
        "tPar": {
            "affiliateId": formData.affiliate_id , 
            "affiliateSubId": formData.affiliate_sub_id , 
            "transactionId": formData.affiliate_ref_id , 
            "offerId": formData.offer_id // investigate this field
        }
    }
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(jsonBody)
    });

    const data = await response.json();

    // Parse redirect_url from the response and return it as a JSON object
    const redirectUrl = data.redirect_url;

    return NextResponse.json({ redirectUrl });
}
export function GET() {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
