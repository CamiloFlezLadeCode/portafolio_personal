'use client';
import React, { forwardRef } from 'react';
import { Typography, Box, Paper, Card, CardContent, CardActions, Avatar } from '@mui/material';

interface SectionProps {
    id: string;
}

const AboutSection = forwardRef<HTMLDivElement, SectionProps>(({ id }, ref) => {
    // Función para calcular la edad
    const CalcularEdad = (): number => {
        const FechaNacimiento: string = "2002-04-03T00:00:00Z";
        const FechaNacimientoObj: Date = new Date(FechaNacimiento);
        const FechaActual: Date = new Date();

        // Calcula la diferencia en milisegundos
        let edad: number = FechaActual.getFullYear() - FechaNacimientoObj.getFullYear();

        // Ajusta si aún no ha pasado el cumpleaños este año
        const mesActual: number = FechaActual.getMonth();
        const mesNacimiento: number = FechaNacimientoObj.getMonth();

        if (mesActual < mesNacimiento ||
            (mesActual === mesNacimiento && FechaActual.getDate() < FechaNacimientoObj.getDate())) {
            edad--;
        }

        return edad;
    }
    const edadActual: number = CalcularEdad();
    // ...
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
            {/* Título - Se mueve arriba en móvil y a la izquierda en desktop */}
            {/* <Typography
                variant='h4'
                sx={{
                    alignSelf: { xs: 'center', md: 'flex-center' },
                    order: { xs: 1, md: 1 },
                    fontWeight: 'bold'
                }}
            >
                Sobre mi
            </Typography> */}
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
                    Sobre mi
                </Typography>
            </Box>

            {/* Contenedor de avatar y texto */}
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
                <Avatar
                    sx={{
                        width: 150,
                        height: 150,
                        border: '2px solid',
                        borderColor: 'success.main'
                    }}
                    src='/foto_personal.jpeg'
                />
                <Card>
                    <CardContent>
                        <Typography sx={{ textAlign: 'justify' }}>
                            Mi nombre es <b>Camilo Florez</b> tengo {edadActual} años, soy desarrollador Full-Stack con más de 2 años de experiencia creando soluciones web eficientes y escalables. Apasionado por la resolución de problemas y la optimización de la experiencia del usuario. Especializado en desarrollo ágil, código limpio y entrega de productos de alta calidad. He trabajado en equipos colaborativos, implementando soluciones innovadoras que mejoran el rendimiento y la usabilidad.
                        </Typography>
                        <br />
                        <Typography>
                            Busco nuevos desafíos donde pueda aportar mi experiencia y seguir creciendo en un entorno dinámico y de alto impacto.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
});

AboutSection.displayName = 'AboutSection';
export default AboutSection;