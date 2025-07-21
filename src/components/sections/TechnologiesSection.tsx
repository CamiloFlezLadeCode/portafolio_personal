'use client';
import React, { forwardRef } from 'react';
import { Typography, Box, Paper, Card, CardContent, CardActions, Avatar, CardHeader, Divider } from '@mui/material';
import {
    // Lenguajes
    SiNodedotjs,
    SiPython,
    SiJavascript,
    SiPhp,
    SiTypescript,
    SiHtml5,
    SiCss3,
    // Bases de datos
    SiMysql,
    SiPostgresql,
    SiSqlite,
    // Frameworks
    SiNextdotjs,
    SiLaravel,
    SiExpress,
    SiMongodb,
    // Herramientas y metodologías
    SiReact,
    SiGit,
    SiGithub,
    SiJsonwebtokens,
    SiAxios,
    SiBootstrap,
    SiTailwindcss,
    SiJquery,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";
import Item from '../tecnologias/Item';


interface SectionProps {
    id: string;
}

const TechnologiesSection = forwardRef<HTMLDListElement, SectionProps>(({ id }, ref) => {
    return (
        <Box
            component="section"
            id={id}
            ref={ref}
            sx={{
                // minHeight: '100vh',
                py: 3,
                // scrollMarginTop: '64px',
                scrollMarginTop: { xs: '310px', md: '64px' },
                width: { xs: '90%', md: '70%' },
                margin: '0 auto',
                // border: 'solid green',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                gap: 4,
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
                        fontWeight: 'bold',
                        filter: 'drop-shadow(1px 1px 10px #9c27b0)'
                    }}
                >
                    Tecnologías
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
                        title='Lenguajes'
                    />
                    <Divider />
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Item nombre="Nodejs" Icono={SiNodedotjs} />
                        <Item nombre="Python" Icono={SiPython} />
                        <Item nombre="PHP" Icono={SiPhp} />
                        <Item nombre="JavaScript" Icono={SiJavascript} />
                        <Item nombre="TypeScript" Icono={SiTypescript} />
                        <Item nombre="HTML5" Icono={SiHtml5} />
                        <Item nombre="CSS3" Icono={SiCss3} />
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: '100%'
                    }}
                >
                    <CardHeader
                        title='Bases de datos'
                    />
                    <Divider />
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Item nombre="MySQL" Icono={SiMysql} />
                        <Item nombre="PosgreSQL" Icono={SiPostgresql} />
                        <Item nombre="SQLite" Icono={SiSqlite} />
                        <Item nombre="SQL" Icono={FaDatabase} />
                        <Item nombre="MongoDB" Icono={SiMongodb} />
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: '100%'
                    }}
                >
                    <CardHeader
                        title='Frameworks'
                    />
                    <Divider />
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Item nombre="Nextjs" Icono={SiNextdotjs} />
                        <Item nombre="Laravel" Icono={SiLaravel} />
                        <Item nombre="Express" Icono={SiExpress} />
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        width: '100%'
                    }}
                >
                    <CardHeader
                        title='Herramientas y metodologías'
                    />
                    <Divider />
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Item nombre="Reactjs" Icono={SiReact} />
                        <Item nombre="Git" Icono={SiGit} />
                        <Item nombre="GitHub" Icono={SiGithub} />
                        <Item nombre="JWT" Icono={SiJsonwebtokens} />
                        <Item nombre="Axios" Icono={SiAxios} />
                        <Item nombre="Scrum" Icono={DiScrum} />
                        <Item nombre="Bootstrap" Icono={SiBootstrap} />
                        <Item nombre="tailwindcss" Icono={SiTailwindcss} />
                        <Item nombre="jQuery" Icono={SiJquery} />
                        <Item nombre="VSCode" Icono={VscVscode} />
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
});

TechnologiesSection.displayName = 'TechnologiesSection';
export default TechnologiesSection;