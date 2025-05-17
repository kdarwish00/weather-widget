import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

/**
 * Redirects to /login if no user is found (used for pages like /weather)
 */
export async function requireUser() {
    const supabase = await createClient();
    let user;
    try {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
            console.error('Auth error:', error.message);
            redirect('/login');
        }
        user = data.user;
    } catch (err) {
        console.error('Failed to get user:', err);
        redirect('/login');
    }

    if (!user) {
        redirect('/login');
    }

    // return user;
}
