import React from 'react';
import AuthForm from '@/features/auth/ui/auth-form';

const LoginUser: React.FC = () => {
    return (
        <div className="mt-40 mx-auto w-[720px] shadow-xl rounded-md bg-white px-[140px] py-[90px]">
            <AuthForm />
        </div>
    );
};

export default LoginUser;
