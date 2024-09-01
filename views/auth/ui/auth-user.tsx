import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface Props {
    className?: string;
}

const AuthUser: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('')}>
            <Button variant="default">Sign In</Button>
        </div>
    );
};

export default AuthUser;
