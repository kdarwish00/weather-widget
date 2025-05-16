
import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm';
import { Box } from '@mui/material';

export default function ForgotPasswordContainer() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" px={2}>
      <ForgotPasswordForm />
    </Box>
  );
}