import { Montserrat,Lemon, Racing_Sans_One} from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundImage from "@/components/backgroundimage";
//import { JsonResume } from 'jsonresume-component';
import React from "react";
import "./globals.css";

const myfont = Montserrat({ subsets: ["latin"] });
const titlefont = Lemon({ subsets: ["latin"], weight: "400" });
const altfont = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const monoFur = localFont({ src: "../public/MonofurNerdFont-Regular.ttf", display: "swap" });

export const metadata = {
    title: "Loan2GO.Online",
    description: "Fast, Easy, and Safe Loans",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`w-full h-full ${myfont.className} overflow-y-auto`}>
                 <BackgroundImage src="money-bg.webp" /> 
                <div className="bg-overlay">
                    <Header font={altfont.className} slug="Loan2GO.Online" />
                    <main className="w-full relative z-10 flex-grow">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
