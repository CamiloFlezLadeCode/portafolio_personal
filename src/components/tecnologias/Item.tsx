import React from 'react';
import { Box, Typography } from '@mui/material';
import { IconType } from 'react-icons';

// Interface para las props
interface ItemProps {
    nombre: string;
    Icono: IconType | React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
}

// Componente corregido
const Item: React.FC<ItemProps> = ({ nombre, Icono }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                gap: 1,
                p: 2
            }}
        >
            {/* Renderizado condicional del icono */}
            {'size' in Icono.prototype ? (
                <Icono size={50} />
            ) : (
                <Icono style={{ fontSize: 50 }} />
            )}
            <Typography variant="body1">
                {nombre}
            </Typography>
        </Box>
    );
};

export default Item;