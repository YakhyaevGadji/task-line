import React from 'react';
import { Title } from '@/shared';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LoginUser: React.FC = () => {
    return (
        <div className="mt-40 mx-auto w-[720px] shadow-2xl rounded-md bg-white px-[140px] py-[90px]">
            <Title className="font-semibold mb-4" text="Auth" size="lg" />
            <Input className="bg-[#F3F4F6] p-5 mb-4" placeholder="Login" />
            <Input className="bg-[#F3F4F6] p-5 mb-4" placeholder="Password" />
            <div className="flex items-center mb-6">
                <Checkbox className="mr-2" id="know" />
                <label htmlFor="know">Remember me</label>
            </div>
            <Button className="flex mx-auto w-[100px] mb-4">Login</Button>
            <p className="text-center text-[12px]">
                You are not registered?
                <Link
                    className="text-slate-600 pl-1"
                    href="/authentication/register"
                >
                    Register in here.
                </Link>
            </p>
        </div>
    );
};

export default LoginUser;
