'use client';
import React, { forwardRef } from 'react';
import { Box, Typography, Card, CardHeader, CardContent, Divider, IconButton } from '@mui/material';
import { SiGithub } from 'react-icons/si';

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
                    borderRadius: '2px',
                }} />
                <Typography
                    variant='h4'
                    sx={{
                        fontWeight: 'bold',
                        filter: 'drop-shadow(1px 1px 10px #9c27b0)'
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
                        title='Aplicación para la longevidad de la batería de la laptop'
                    />
                    <Divider />
                    <CardContent>
                        <strong>Tecnologías: </strong><span>Python, Twilio, smtplib, psutil</span>
                        <p className='w-100% text-justify'>
                            Aplicación de escritorio que se encarga de analizar el estado de la batería. Si la batería se encuentra cargando y en porcentaje 100,
                            se muestra una notificación en la laptop para que sea desconectado el cargador, además realiza envío de email y sms; alertando que la batería llegó a su límite de carga.
                        </p>
                        <IconButton sx={{ color: '#000000' }} title='Visitar repositorio' target='__blank' href='https://github.com/CamiloFlezLadeCode/longevidad_bateria_laptop'>
                            <SiGithub size={30} />
                        </IconButton>
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
                        <strong>Tecnologías: </strong><span>Nodejs, Express, JWT, Nextjs, TypeScript, Material MUI, MySQL</span>
                        <p className='w-100% text-justify'>
                            Panel administrativo para la gestión de una empresa dedicada al alquiler y reparación de equipos para la construcción.
                        </p>
                        <strong>Modulos:</strong>
                        <li>Ordenes de servicio</li>
                        <li>Remisiones</li>
                        <li>Devoluciones</li>
                        <li>Equipos</li>
                        <li>Bodegas</li>
                        <li>Usuarios</li>
                        <li>Proyectos</li>
                        <li>Repuestos</li>
                        <li>Vehículos</li>
                        <li>Ajustes de cuenta</li>
                        <Box>
                            <IconButton sx={{ color: '#000000' }} title='Visitar repositorio' target='__blank' href='https://github.com/CamiloFlezLadeCode/Admin-Tecni-Servicios-BackEnd'>
                                <SiGithub size={30} />
                            </IconButton>
                            <IconButton sx={{ color: '#000000' }} title='Visitar repositorio' target='__blank' href='https://github.com/CamiloFlezLadeCode/Admin-Tecni-Servicios'>
                                <SiGithub size={30} />
                            </IconButton>
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: '100%'
                    }}
                >
                    <CardHeader title='Sitio web personal' />
                    <Divider />
                    <CardContent>
                        <strong>Tecnologías: </strong><span>Nextjs, Material MUI, Tailwindcss, TypeScript, Emailjs</span>
                        <p className='w-100% text-justify'></p>
                        <IconButton sx={{ color: '#000000' }} title='Visitar repositorio' target='__blank' href='https://github.com/CamiloFlezLadeCode/portafolio_personal'>
                            <SiGithub size={30} />
                        </IconButton>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
});

ProjectsSection.displayName = 'ProjectsSection';
export default ProjectsSection;