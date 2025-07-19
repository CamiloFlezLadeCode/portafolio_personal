'use client';
import React from 'react';
import { Box, Paper, Card, CardContent, Typography, CardActions } from '@mui/material';
import Image from 'next/image';

export default function Footer(): React.JSX.Element {
    return (
        <Box
            sx={{
                // height: '60px'
            }}
            mt={20}
        >
            <Card
                sx={{
                    height: '100%',
                    p: 0,
                    borderRadius: 0,
                }}
            >
                <CardContent
                    sx={{
                        height: '100%',
                        p: 0,
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            height: 130,
                            // width: 192,
                            width: '100%',
                            aspectRatio: '192/150',
                            alignContent: 'center',
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            src="/logo_company_sm.jpg"
                            // alt="FlezLade Softworks"
                            alt=""
                            style={{ objectFit: 'contain' }}
                            priority
                            fill
                            quality={100} // Máxima calidad (1-100)
                            unoptimized={false} // Asegura que Next.js optimice
                        />
                    </Box>
                </CardContent>
                <CardActions
                    className='text-center justify-center font-black'
                >
                    <Typography variant='subtitle2'>
                        © {new Date().getFullYear()} <strong>FlezLade Softworks</strong>. Todos los derechos reservados.
                    </Typography>
                </CardActions>
            </Card>
        </Box>
    );
};