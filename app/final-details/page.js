'use client';
import FinalDetails from '@/components/FinalDetails';

export default function start() {
    return (
        <div className="page-container">
            <div className="flex-container">
                <div className="page-title-container">
                    <h2 className="page-title">
                        Start
                    </h2>
                </div>
                <div className="section-title-container">
                    <p className="section-title">Finish Up</p>
                </div>
            </div>
            <div className="max-w-2xl mx-auto">
                <FinalDetails />
            </div>
        </div>
    );
}