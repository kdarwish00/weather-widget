'use client';

import { Button, Box } from '@mui/material';

export default function LogoutButton() {
  return (
    <Box position="absolute" top={20} right={20} zIndex={30}>
      <form action="/auth/signout" method="POST">
        <Button
          type="submit"
          variant="contained"
          sx={{
            px: 3,
            py: 1,
            fontWeight: 'bold',
            fontFamily: 'monospace',
            color: 'grey',
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(6px)',
            textTransform: 'none',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
            },
          }}
        >
          Logout
        </Button>
      </form>
    </Box>
  );
}