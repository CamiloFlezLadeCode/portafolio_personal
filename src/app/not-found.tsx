import React from 'react';
import type { Metadata } from 'next';
import RouterLink from 'next/link';
import {
    Box,
    Button,
    Stack,
    Typography
} from '@mui/material';

export default function NotFound(): React.JSX.Element {
    return (
        <Box className='text-center'>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
                404: Página no encontrada
            </Typography>
            <Button
                component={RouterLink}
                href='/'
                variant="contained"
            >
                Volver al inicio
            </Button>
        </Box>
    )
}