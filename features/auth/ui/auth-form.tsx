'use client';

import React from 'react';
import { Title } from '@/shared';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
    login: string;
    password: string;
};

const AuthForm = () => {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Title className="font-semibold mb-4" text="Auth" size="lg" />
            <Input
                {...register('login')}
                className="bg-[#F3F4F6] p-5 mb-4"
                placeholder="Login"
            />
            <Input
                {...register('password')}
                className="bg-[#F3F4F6] p-5 mb-4"
                placeholder="Password"
            />
            <div className="flex items-center mb-6">
                <Checkbox className="mr-2" id="know" />
                <label htmlFor="know">Remember me</label>
            </div>
            <Button className="flex mx-auto w-[100px] mb-4" type="submit">
                Login
            </Button>
            <p className="text-center text-[12px]">
                You are not registered?
                <Link className="text-slate-600 pl-1" href="/register">
                    Register in here.
                </Link>
            </p>
        </form>
    );
};

export default AuthForm;
