import React from 'react';
// components
import Typography from '@mui/material/Typography';
// interfaces
import { TextProps } from '../../../Constants/interfaces';

const Text: React.FC<TextProps> = ({ children, ...props }) => {
    return (
        <Typography {...props}>
            {children}
        </Typography>
    );
};

export default Text;
