'use client';
import React, { forwardRef } from 'react';
import { Box, Typography, Card, CardHeader, CardContent, Divider } from '@mui/material';

interface SectionProps {
    id: string;
}

const ProjectsSection = forwardRef<HTMLDivElement, SectionProps>(({ id }, ref) => {
    return (
        <Box
            component="section"
            id={id}
            ref={ref}
            sx={{
                // minHeight: '100vh',
                py: 3,
                // scrollMarginTop: '64px',
                scrollMarginTop: { xs: '310px', md: 64 },
                width: { xs: '90%', md: '70%' },
                margin: '0 auto',
                // border: 'solid green',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 4
            }}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                pl: 2,
                alignSelf: { xs: 'center', md: 'flex-start' },
                width: { xs: '100%', md: '30%' }
            }}>
                <Box sx={{
                    width: '4px',
                    height: '40px',
                    bgcolor: 'secondary.main',
                    mr: .5,
                    borderRadius: '2px'
                }} />
                <Typography
                    variant='h4'
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    Proyectos
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    order: { xs: 2, md: 2 },
                    width: { xs: '98%', md: '70%', }
                }}
            >
                <Card
                    sx={{
                        width: '100%'
                    }}
                >
                    <CardHeader
                        title='App para el monitoreo de equipos en tiempo real'
                    />
                    <Divider />
                    <CardContent>

                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: '100%'
                    }}
                >
                    <CardHeader
                        title='Panel Administrativo basado en el alquiler y reparación de equipos para la construcción'
                    />
                    <Divider />
                    <CardContent>

                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
});

ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection;