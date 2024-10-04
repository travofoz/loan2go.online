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
        "apiId": "B2B85FCF8BCB4D7AA12C9BEBA32BE685",
        "apiPassword": "13c697d",
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
        "bankAccountLengthMonths": formData.bank_length ,
        "firstName": formData.first_name ,
        "lastName": formData.last_name ,
        "dob": formData.dob , // investigate this field
        "address": formData.address1 ,
        "zip": formData.zipcode ,
        "city": formData.city ,
        "state": formData.state ,
        "ownHome": formData.own_home , // investigate this field
        "addressLengthMonths": formData.residence_length ,
        "email": formData.email ,
        "homePhone": formData.phone , // investigate this field
        "workPhone": formData.employer_phone ,
        "cellPhone": formData.cell_phone , // investigate this field
        "consentEmailSms": formData.consent_email_sms , // investigate this field
        "unsecuredDebt": formData.unsecured_debt , // investigate this field
        "creditRating": formData.credit_rating , // investigate this field
        "loanPurpose": formData.loan_purpose , // investigate this field
        "consentToFcra": formData.consent_to_fcra , // investigate this field
        "autoTitle": formData.auto_title , // investigate this field
        "testMode": formData.test_mode , // investigate this field
        "clickid": formData.clickid , // investigate this field
        "source": formData.source , // investigate this field
        "webSiteUrl": formData.web_site_url , // investigate this field
        "tPar": {
            "affiliateId": formData.affiliate_id , // investigate this field
            "affiliateSubId": formData.affiliate_sub_id , // investigate this field
            "transactionId": formData.transaction_id , // investigate this field
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
