import React from "react";

export default function Centered({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute md:ml-16 -mt-16 inset-0 flex items-center justify-center">
            <div className="container p-4 w-full md:w-1/2 max-w-lg mt-4 rounded-md shadow-lg">
                {children}
            </div>
        </div>
    )
}