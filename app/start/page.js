'use client';
import LoanDetails from '@/components/LoanDetails';

export default function start() {
    return (
        <div className="page-container">
            {/*}
            <div className="flex-container">
                <div className="page-title-container">
                    <h2 className="page-title">
                        Start
                    </h2>
                </div>
                <div className="section-title-container">
                    <p className="section-title ">Lets Go!</p>
                </div>
            </div>
            */}
            <div className="max-w-2xl mx-auto">
                <LoanDetails />
            </div>
        </div>
    );
}