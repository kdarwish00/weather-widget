import { Suspense } from 'react';
import AuthCallback from '@/components/Auth/AuthCallback';

export default function AuthCallbackPage() {
    return (
        <Suspense fallback={<p>Signing you in...</p>}>
            <AuthCallback />
        </Suspense>
    );
}