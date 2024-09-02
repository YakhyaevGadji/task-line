'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    console.log('test');
    return (
        <div className={cn('mx-auto max-w-[1280px] p-20', className)}>
            {children}
        </div>
    );
};

export default Container;
