import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Title } from '@/shared/ui/title';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const RegisterUser: React.FC = () => {
    return (
        <div className="mt-40 mx-auto w-[720px] shadow-xl rounded-md bg-white px-[140px] py-[90px]">
            <Title className="font-semibold mb-4" text="Auth" size="lg" />

            <Input
                className="bg-[#F3F4F6] p-5 mb-4 rounded"
                placeholder="Login"
            />
            <Input
                className="bg-[#F3F4F6] p-5 mb-4 rounded"
                placeholder="Password"
            />
            <Button className="flex mx-auto p-5 mb-4 rounded"> Register</Button>
            <p className="text-center text-[12px]">
                Already have an account?{' '}
                <Link className="text-slate-600" href="/authentication/login">
                    Sign in here.
                </Link>
            </p>
        </div>
    );
};

export default RegisterUser;
