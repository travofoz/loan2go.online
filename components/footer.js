import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { siteLinks, policyLinks, socialMediaLinks } from '../data/config';

export default function Footer() {
    return (
        <div className="border-t-2 border-zinc-700 bg-zinc-950 flex flex-col items-center px-1 py-2 relative z-10">
            <div className="px-6 mx-6 flex flex-col items-center w-full md:flex-row md:justify-center md:items-start w-full">
                <div className="text-lg w-full text-center text-zinc-200 mb-4 md:w-3/12 text-center md:text-left">
                    <p className="italic text-lime-300 pb-2 mb-2 font-bold">It&apos;s Fast, Easy, and Safe.</p>
                    <p className=" text-yellow-300 pb-2 mb-2 font-bold">Try Loan2GO.Online Today</p>
                </div>
                
                <div className="w-full flex flex-row justify-center text-zinc-400 mb-4 md:w-6/12 flex-row justify-center md:justify-between  md:pt-1">
                    <div className="w-1/2 text-center px-2  md:w-1/2  md:text-right md:mb-0">
                        <h4 className="pb-1 font-bold text-zinc-200">Navigation</h4>
                        <ul>
                            {siteLinks.map((link, index) => (
                                <li key={index}><Link href={link.href}>{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-1/2 text-center px-2  md:w-1/2  md:text-right md:mb-0">
                        <h4 className="pb-1 font-bold text-zinc-200">Policies</h4>
                        <ul>
                            {policyLinks.map((link, index) => (
                                <li key={index}><Link href={link.href}>{link.label}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
                
                <div className="w-full text-center text-zinc-400 mb-4 md:w-3/12 md:text-right md:pt-4 md:pt-1 md:flex md:flex-col md:justify-end items-center md:items-end">
                    <h4 className="pb-1 text-purple-300">Follow Us On Social Media</h4>
                    <ul className="flex flex-row justify-center w-full mt-2 md:justify-end md:w-auto md:mt-8">
                        {socialMediaLinks.map((link, index) => (
                            <li key={index} className="px-1">
                                <SocialIcon style={{ height: 32, width: 32 }} target="_blank" url={link.url} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
<div className="mt-4 px-6 mx-6 w-full md:flex md:flex-row md:justify-between bg-zinc-500">
    <div className="my-6 w-full text-center text-zinc-200 mb-4 md:w-1/2 md:text-left">
        <h4 className="pb-1 font-bold">Important Disclosures. Please Read Carefully.</h4>
    </div>
    <div className="my-6 w-full text-center text-zinc-400 mb-4 md:w-1/2 md:text-left">
        <p>Persons facing serious financial difficulties should consider other alternatives or should seek out professional financial advice.</p>

        <p>This website uses Site Visit Recordation Technology to memorialize site visits, including technology provided by third parties like Jornaya’s LeadiD. By submitting your information through this website, you consent to the use of Site Visit Recordation Technology.</p>

        <p>The owner of this website is not a lender or agent of any lender and does not take loan applications or otherwise engage in lender-related activity (including without limitation making credit decisions or arranging, brokering, originating, servicing, underwriting, funding, or collecting payments for any lender). Submitting your information via this website is a request to be connected with one or more financial service providers that may be able to help you with your financial needs, each being responsible for taking a credit application, verifying your information, and making their own credit decisions.</p>

        <p>The services offered by this website are administrative only (frequently referred to as “lead generation”) and are offered to you free of charge. Lenders and other financial service providers pay a fee to be connected to consumers in search of financial services, often based on a ping tree model similar to Google AdWords where the highest available bidder is connected to the consumer.</p>

        <p>In some cases, you may be given the option of being connected to a tribal lending enterprise (“TLE”). TLEs are subject to tribal and certain federal laws while being immune from state law including usury caps. If you are connected to a TLE, please understand that the tribal lender’s rates and fees may be higher than state-licensed lenders. Additionally, TLEs may require you to agree to dispute resolution in a tribal jurisdiction. You should read and understand the terms of any loan offered by any lender, whether tribal or state-licensed, and to reject any loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.</p>

        <p>By submitting your information via this website, you authorize the owner of this website and its network of available lenders to do a credit check, which may include verifying your social security number, driver license number, or other identification, and a review of your creditworthiness. Credit checks are usually performed by one of the major credit bureaus such as Experian, Equifax and TransUnion, but also may include alternative credit bureaus such as Clarity, DataX, or others. You also authorize the owner of this website to share your information and credit history with its network of available lenders and other service providers.</p>

        <p>This service is not available in all states.</p>
    </div>
</div>
<div className=" px-6 mx-6 w-full md:flex md:flex-row md:justify-between bg-zinc-500">
    <div className="my-6 w-full text-center text-zinc-200 mb-4 md:w-1/2 md:text-left">
        <h4 className="pb-1 font-bold">Late Payments Hurt Your Credit Score</h4>
    </div>
    <div className="my-6 w-full text-center text-zinc-400 mb-4 md:w-1/2 md:text-left">
        <p>When a lender decides to offer you a loan, it is required by law to provide documents that contain all fees and rate information pertaining to that loan, including any potential fees for late-payments, and the terms (if permitted by applicable law) to refinance, renew or rollover your loan. Loan fees and interest rates are determined solely by the lender or financial service provider based on their internal policies, underwriting criteria and applicable law. This website has no knowledge of or control over the loan terms offered to you.</p>
    </div>
</div>   
<div className=" px-6 mx-6 w-full md:flex md:flex-row md:justify-between bg-zinc-500">
 
    <div className="my-6 w-full text-center text-zinc-200 mb-4 md:w-1/2 md:text-left">
        <h4 className="pb-1 font-bold">Late Payments Hurt Your Credit Score</h4>
    </div>
    <div className="my-6 w-full text-center text-zinc-400 mb-4 md:w-1/2 md:text-left">
        <p>Please be aware that missing a payment or making a late payment can negatively impact your credit score. To protect yourself and your credit history, make sure you only accept loan terms that you can afford to repay. If you cannot make a payment on time, you should contact your lender immediately and discuss payment options.</p>
    </div>    
</div>                 


            <div className="mt-2 w-100 text-md font-bold uppercase text-zinc-200 items-center">Copyright © 2024 Loan2GO.Online.</div> 
        </div>
    );
}