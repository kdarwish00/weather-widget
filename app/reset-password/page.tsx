import ResetPasswordContainer from '@/components/containers/ResetPasswordContainer';
// import { requireSession } from '@/utils/auth/requireAuth';

export const metadata = {
    title: 'Reset Password',
    description: 'Set a new password for your account.',
};

export default async function ResetPasswordPage() {
    return <ResetPasswordContainer />;
}
