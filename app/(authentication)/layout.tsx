import React from 'react';

const LayoutAuth = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mt-40 mx-auto w-[720px] shadow-xl rounded-md bg-white px-[140px] py-[90px]">
            {children}
        </div>
    );
};

export default LayoutAuth;
