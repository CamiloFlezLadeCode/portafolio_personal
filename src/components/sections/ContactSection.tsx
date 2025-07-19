'use client';
// import React, { forwardRef, useCallback } from 'react';
import * as React from 'react';
import { IconButton, Box, Typography, Card, CardHeader, CardContent, Divider, Input, TextareaAutosize, Button, Alert, AlertColor, Snackbar, FormControl, OutlinedInput, FormHelperText } from '@mui/material';
import {
    SiLinkedin
} from 'react-icons/si';
import { MdOutlineEmail } from "react-icons/md";
// Herramientas para validaciones de formularios
import { z as zod } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

// Tipos para TypeScript
type IdServicio = string;
type IdPlantilla = string;

interface MensajeAlertaProps {
    open: boolean;
    tipo: AlertColor; // 'success' | 'error' | 'info' | 'warning'
    mensaje: string;
    onClose: () => void;
    duracion?: number; // Opcional, duración en ms
}

const MensajeAlerta: React.FC<MensajeAlertaProps> = ({
    open,
    tipo,
    mensaje,
    onClose,
    duracion = 3000,
}) => {
    return (
        <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            autoHideDuration={duracion}
            onClose={onClose}
        >
            <Alert
                variant="filled"
                severity={tipo}
                sx={{ width: '100%' }}
                onClose={onClose}
            >
                {/* <strong style={{ color: '#000000' }}>{mensaje}</strong> */}
                <span className='text-white text-base'>{mensaje}</span>
            </Alert>
        </Snackbar>
    );
};

const schema = zod.object({
    Nombre: zod.string().min(1, { message: 'El nombre es requerido' }),
    Correo: zod.string().min(1, { message: 'El correo es requerido' })
        .email({ message: 'Debe ser un correo válido' }),
    Mensaje: zod.string().min(1, { message: 'El mensaje es requerido' }),
});

type Values = zod.infer<typeof schema>;
const defaultValues = { Nombre: '', Correo: '', Mensaje: '' } satisfies Values;

interface SectionProps {
    id: string;
}

const ContactSection = React.forwardRef<HTMLDivElement, SectionProps>(({ id }, ref) => {
    //Para el manejo de las notificiones/alertas
    const [mostrarAlertas, setMostrarAlertas] = React.useState(false);
    const [mensajeAlerta, setMensajeAlerta] = React.useState('');
    const [tipoAlerta, setTipoAlerta] = React.useState<'success' | 'error'>('success');

    // Estados para validación de formulario
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<Values>({ defaultValues, resolver: zodResolver(schema) });
    const [isPending, setIsPending] = React.useState<boolean>(false);
    // ...

    // Función para copiar correo
    const CopiarCorreo = async () => {
        try {
            await navigator.clipboard.writeText('camilodesarrollador@outlook.com');
            mostrarMensaje('Correo copiado', 'success');
        } catch (error) {
            mostrarMensaje(`Error al copiar el correo: ${error}`, 'error');
        }
    };
    // ...
    // Función para mostrar mensaje
    const mostrarMensaje = (mensaje: string, tipo: 'success' | 'error') => {
        setMensajeAlerta(mensaje);
        setTipoAlerta(tipo);
        setMostrarAlertas(true);
    };
    // ...
    // Función para contactar / enviar correo
    // Inicializa EmailJS al montar el componente
    React.useEffect(() => {
        emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID!);
    }, []);

    const EnviarCorreo = React.useCallback(
        async (values: Values): Promise<void> => { // Usa el tipo Values de Zod
            setIsPending(true);
            try {
                // Usa los mismos nombres que en tu schema
                const { Nombre, Correo, Mensaje } = values;

                await emailjs.send(
                    process.env.NEXT_PUBLIC_ID_SERVICIO_EMAILJS!,
                    process.env.NEXT_PUBLIC_ID_PLANTILLA_EMAILJS!,
                    {
                        title: "Nuevo mensaje de contacto - Portafolio Personal",
                        name: Nombre, // Mapea correctamente a las variables de tu plantilla EmailJS
                        email: Correo,
                        message: Mensaje,
                        time: new Date().toLocaleString(),
                    }
                );

                mostrarMensaje('Mensaje enviado correctamente', 'success');
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
                mostrarMensaje(`Error al enviar el mensaje: ${errorMessage}`, 'error');
                console.error('Error detallado:', error);
            } finally {
                setIsPending(false);
            }
        },
        [setIsPending, mostrarMensaje]
    );

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
                    Contáctame
                </Typography>
            </Box>
            <Box
                sx={{
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
                    <CardContent
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3
                            }}
                        >
                            <form style={{ display: 'flex', flexDirection: 'column', gap: 10 }} onSubmit={handleSubmit(EnviarCorreo)}>
                                <Controller
                                    control={control}
                                    name='Nombre'
                                    render={({ field }) => (
                                        <FormControl error={Boolean(errors.Nombre)} sx={{ width: '100%' }}>
                                            <Input
                                                {...field}
                                                type='text'
                                                placeholder='Nombre'
                                            />
                                            {errors.Nombre ? <FormHelperText sx={{ color: 'red', margin: 0 }}>{errors.Nombre.message}</FormHelperText> : null}
                                        </FormControl>
                                    )}
                                />

                                <Controller
                                    control={control}
                                    name='Correo'
                                    render={({ field }) => (
                                        <FormControl error={Boolean(errors.Correo)} sx={{ width: '100%' }}>
                                            <Input
                                                {...field}
                                                type='text'
                                                placeholder='Correo'
                                            />
                                            {errors.Correo ? <FormHelperText sx={{ color: 'red', margin: 0 }}>{errors.Correo.message}</FormHelperText> : null}
                                        </FormControl>
                                    )}
                                />
                                <Controller
                                    control={control}
                                    name="Mensaje"
                                    render={({ field }) => (
                                        <FormControl error={Boolean(errors.Mensaje)} sx={{ width: '100%' }}>
                                            <TextareaAutosize
                                                {...field}
                                                minRows={5}
                                                placeholder="Mensaje"
                                                style={{
                                                    border: `1px solid ${errors.Mensaje ? '#f44336' : '#ccc'}`, // Rojo si hay error
                                                    borderRadius: '4px',
                                                    padding: '10px',
                                                    fontFamily: 'inherit',
                                                }}
                                            />
                                            {errors.Mensaje && (
                                                <FormHelperText sx={{ color: 'error.main', margin: 0 }}>
                                                    {errors.Mensaje.message}
                                                </FormHelperText>
                                            )}
                                        </FormControl>
                                    )}
                                />

                                <Box>
                                    <Button type='submit' variant='contained' sx={{ marginTop: 1, marginBottom: 1 }}>Contactar</Button>
                                </Box>
                            </form>
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <a
                                    href="https://www.linkedin.com/in/juan-camilo-florez-laverde-138ab9322/"
                                    target='__blank'
                                >
                                    <IconButton title='Visitar LinkedIn'>
                                        <SiLinkedin size={30} />
                                    </IconButton>
                                </a>
                                <Typography variant='subtitle1' mt={1}>https://www.linkedin.com/in/juan-camilo-florez-laverde-138ab9322/</Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <IconButton title='Copiar correo' onClick={CopiarCorreo}>
                                    <MdOutlineEmail size={30} />
                                </IconButton>
                                <Typography variant='subtitle1' mt={1}>camilodesarrollador@outlook.com</Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <MensajeAlerta
                open={mostrarAlertas}
                tipo={tipoAlerta}
                mensaje={mensajeAlerta}
                onClose={() => setMostrarAlertas(false)}
            />
        </Box>
    );
});

ContactSection.displayName = 'ContactSection';
export default ContactSection;