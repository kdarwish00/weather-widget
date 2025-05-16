import UpdatePasswordForm from '@/components/forms/UpdatePasswordForm';
import { Box } from '@mui/material';

export default function ResetPasswordContainer() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" px={2}>
      <UpdatePasswordForm />
    </Box>
  );
}