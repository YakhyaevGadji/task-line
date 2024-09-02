import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Title } from '@/shared';

const RegisterUser: React.FC = () => {
    return (
        <div className="mt-40 mx-auto w-[720px] shadow-xl rounded-md bg-white px-[140px] py-[90px]">
            <Title className="font-semibold mb-4" text="Register" size="lg" />
            <div className="flex gap-3">
                <Input
                    className="bg-[#F3F4F6] p-5 mb-4 rounded"
                    placeholder="Name"
                />
                <Input
                    className="bg-[#F3F4F6] p-5 mb-4 rounded"
                    placeholder="Surname"
                />
            </div>
            <Input
                className="bg-[#F3F4F6] p-5 mb-4 rounded"
                placeholder="Login"
            />
            <Input
                className="bg-[#F3F4F6] p-5 mb-4 rounded"
                placeholder="Email"
            />
            <Input
                className="bg-[#F3F4F6] p-5 mb-4 rounded"
                placeholder="Password"
            />
            <Button className="flex mx-auto p-5 mb-4 rounded">Register</Button>
            <p className="text-center text-[12px]">
                Already have an account?
                <Link
                    className="text-slate-600 pl-1"
                    href="/authentication/login"
                >
                    Sign in here.
                </Link>
            </p>
        </div>
    );
};

export default RegisterUser;
