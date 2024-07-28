import React from 'react';
//components
import { Card } from '@mui/material';
// interfaces
import { CustomCardProps } from '../../../Constants/interfaces';

const CardComponent: React.FC<CustomCardProps> = ({
  boxShadow = 'none',
  borderRadius = 0,
  sx = {},
  children,
  ...props
}) => {
  return (
    <Card
      sx={{
        boxShadow,
        borderRadius,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Card>
  );
};

export default CardComponent;