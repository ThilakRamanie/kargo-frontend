import React from 'react';
// components
import Button from '@mui/material/Button';
// interfaces
import { CustomButtonProps } from '../../../Constants/interfaces';

const ButtonComponent: React.FC<CustomButtonProps> = ({ ...props }) => {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    );
};

export default ButtonComponent;
