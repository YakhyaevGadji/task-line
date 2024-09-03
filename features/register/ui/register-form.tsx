'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Title } from '@/shared';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import RegisterSchema from '../model/register-form.schema';
import { FormData } from '../model/register-form.types';

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
            <div className="mb-8">
                <Input
                    {...register('login')}
                    className="bg-[#F3F4F6] p-5 rounded"
                    placeholder="Login"
                />
                {errors.login && (
                    <p className="absolute text-red-600  text-sm">
                        {errors.login.message}
                    </p> // Отображение ошибки для login
                )}
            </div>
            <div className="mb-8">
                <Input
                    {...register('email')}
                    className="bg-[#F3F4F6] p-5  rounded"
                    placeholder="Email"
                />
                {errors.email && (
                    <p className="absolute text-red-600 text-sm">
                        {errors.email.message}
                    </p> // Отображение ошибки для login
                )}
            </div>
            <div className="mb-8">
                <Input
                    {...register('password')}
                    className="bg-[#F3F4F6] p-5  rounded"
                    placeholder="Password"
                />
                {errors.password && (
                    <p className=" absolute text-red-600 text-sm">
                        {errors.password.message}
                    </p> // Отображение ошибки для login
                )}
            </div>
            <Button
                onClick={onSubmit}
                className="flex mx-auto p-5 mb-4 rounded"
            >
                Register
            </Button>
            <p className="text-center text-[12px]">
                Already have an account?
                <Link className="text-slate-600 pl-1" href="/login">
                    Sign in here.
                </Link>
            </p>
        </div>
    );
};

export default RegisterUser;
