'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Title } from '@/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormData = {
    login: string;
    email: string;
    password: string;
};

const RegisterSchema = yup
    .object({
        login: yup.string().required('Login is required'),
        email: yup.string().email().required('Email is required'),
        password: yup.string().required('Password is required'),
    })
    .required();

const RegisterUser: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(RegisterSchema),
    });
    const onSubmit = handleSubmit((data) => console.log(data));
    // firstName and lastName will have correct type

    return (
        <div className="mt-40 mx-auto w-[720px] shadow-xl rounded-md bg-white px-[140px] py-[90px]">
            <Title className="font-semibold mb-4" text="Register" size="lg" />
            <Input
                {...register('login')}
                className="bg-[#F3F4F6] p-5 mb-4 rounded"
                placeholder="Login"
            />
            <Input
                {...register('email')}
                className="bg-[#F3F4F6] p-5 mb-4 rounded"
                placeholder="Email"
            />
            <Input
                {...register('password')}
                className="bg-[#F3F4F6] p-5 mb-4 rounded"
                placeholder="Password"
            />
            <Button
                onClick={onSubmit}
                className="flex mx-auto p-5 mb-4 rounded"
            >
                Register
            </Button>
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
