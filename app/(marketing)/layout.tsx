import React from "react";
import { Navbar } from "./_component/navbar";
import { Footer } from "./_component/footer";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full bg-slate-100">
            <Navbar />
            <main className="pt-40 pb-20 bg-slate-100">{children}</main>
            <Footer />
        </div>
    );
};

export default MarketingLayout;
