import React from "react";

const TestLayout = ({
    children,
} : {
    children: React.ReactNode;
    }
) => {
    return (
        <div className="bg-rose-300">
            {children}
        </div>
    )
}

export default TestLayout;