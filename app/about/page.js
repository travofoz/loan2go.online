import React from 'react';
import { cards } from '@/data/config';
import ContentCard from '@/components/ContentCard';
import Carousel from '@/components/Carousel';

export default function About() {
    return (
        <div className="page-container">
            <div className="flex-container">
                <div className="page-title-container">
                    <h2 className="page-title">About</h2>
                </div>
                <div className="section-title-container">
                    <p className="section-title">loan2Go.Online</p>
                </div>
            </div>
            <p className="body-text">
                We help people find money.
            </p>
        </div>
    );
}