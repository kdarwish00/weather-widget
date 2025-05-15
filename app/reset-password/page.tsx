import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import UpdatePasswordPage from '@/components/UpdatePasswordForm';

export default async function ResetPasswordPage() {
    const supabase = await createClient();
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect('/login');
    }

    return <UpdatePasswordPage />;
}