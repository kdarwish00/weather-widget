import ResetPasswordContainer from '@/components/containers/ResetPasswordContainer';
import { requireSession } from '@/utils/auth/requireAuth';

export default async function ResetPasswordPage() {
    await requireSession();
    return <ResetPasswordContainer />;
}
