import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({
    className,
    children,
}) => {
    return (
        <div className={cn('mx-auto max-w-[1280px] px-4', className)}>
            {children}
        </div>
    );
};

export default Container;
