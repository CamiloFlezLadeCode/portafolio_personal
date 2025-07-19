'use client';
import React from 'react';
import { Box, Button, Card, CardContent, IconButton, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function NavBar(): React.JSX.Element {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const handleScroll = (id: string) => {
        if (isHomePage) {
            const element = document.getElementById(id);
            element?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(`/#${id}`);
        }
        setMobileOpen(false);
    };

    const MobileMenu = () => (
        <Collapse in={mobileOpen} sx={{ display: { xs: 'block', md: 'none' } }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                p: 2,
                backgroundColor: 'background.paper',
                borderTop: '1px solid',
                borderColor: 'divider'
            }}>
                <Button fullWidth onClick={() => handleScroll('sobre_mi')}>
                    Sobre Mi
                </Button>
                <Button fullWidth onClick={() => handleScroll('tecnologias')}>
                    Tecnologías
                </Button>
                <Button fullWidth onClick={() => handleScroll('proyectos')}>
                    Proyectos
                </Button>
                <Button fullWidth onClick={() => handleScroll('contacto')}>
                    Contacto
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    href="./HV_CAMILO.pdf"
                    target="_blank"
                    title='Ver CV'
                >
                    CV
                </Button>
            </Box>
        </Collapse>
    );

    return (
        <Card sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            borderRadius: 0,
            boxShadow: 'none',
            borderBottom: '1px solid',
            borderColor: 'divider'
        }}>
            <CardContent sx={{
                p: '0 !important',
                display: 'flex',
                height: '100%',
                '&.MuiCardContent-root:last-child': {
                    pb: '0 !important'
                }
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '64px',
                    px: { xs: 2, md: 5 },
                    py: 0
                }}>
                    {/* Logo */}
                    <Box
                        sx={{
                            position: 'relative',
                            height: 40,
                            width: 192,
                            cursor: 'pointer',
                            aspectRatio: '192/40',
                        }}
                        onClick={() => router.push('/')}
                    >
                        <Image
                            src="/texto_logo_company_sm.jpg"
                            alt="FlezLade Softworks"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                            quality={100} // Máxima calidad (1-100)
                            unoptimized={false} // Asegura que Next.js optimice
                        />
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        gap: 1,
                        '& .MuiButton-root': {
                            minHeight: 40
                        }
                    }}>
                        {isHomePage ? (
                            <>
                                <Button onClick={() => handleScroll('sobre_mi')}>Sobre Mi</Button>
                                <Button onClick={() => handleScroll('tecnologias')}>Tecnologías</Button>
                                <Button onClick={() => handleScroll('proyectos')}>Proyectos</Button>
                                <Button onClick={() => handleScroll('contacto')}>Contacto</Button>
                            </>
                        ) : (
                            <>
                                <Button component={Link} href="/#sobre_mi">Sobre Mi</Button>
                                <Button component={Link} href="/#tecnologias">Tecnologías</Button>
                                <Button component={Link} href="/#proyectos">Proyectos</Button>
                                <Button component={Link} href="/#contacto">Contacto</Button>
                            </>
                        )}
                        <Button
                            variant="outlined"
                            href="./HV_CAMILO.pdf"
                            target="_blank"
                            title='Ver CV'
                        >
                            CV
                        </Button>
                    </Box>

                    {/* Mobile Menu Button */}
                    <IconButton
                        sx={{
                            display: { md: 'none' },
                            color: 'text.primary'
                        }}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Box>
            </CardContent>

            {/* Mobile Menu */}
            <MobileMenu />
        </Card>
    );
};