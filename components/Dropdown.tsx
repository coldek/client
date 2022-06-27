import React, { useState } from "react"

export default function Dropdown({ children, inner, styles }: { children: React.ReactNode, inner: string | JSX.Element, styles?: string }) {
    const [show, setShow] = useState(false)

    return (
        <div className="inline-block relative">
            <button className={styles} onClick={() => setShow(!show)}>{inner}</button>
            <div className={`absolute${!show && ` hidden`} right-0
            `}>
                {children}
            </div>
        </div>
    )
}