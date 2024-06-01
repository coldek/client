import React from "react";

export default function Centered({ children }: { children: React.ReactNode }) {
    return (
        <div className="absolute ml-16 px-2 -mt-16 inset-0 flex items-center justify-center">
            <div className="container p-4 w-full md:w-1/2 max-w-lg mt-20 rounded-md shadow-lg">
                {children}
            </div>
        </div>
    )
}