import React from 'react';
// components
import { Card, CardContent, Box } from '@mui/material';
import ButtonComponent from '../../Shared/Button';
import Text from '../../Shared/Text';
// icons
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// style
import './curriculum.scss';
// interface
import { CurriculumCardProps } from '../../../Constants/interfaces';

const CurriculumCard: React.FC<CurriculumCardProps> = ({ title, description, image, buttonText, onButtonClick }) => {
  return (
    <Card className='curriculum-card' sx={{ display: 'flex', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '16px', padding: '16px', alignItems: 'center' }}>
      <Box className="curriculum-item-image" sx={{ width: 200, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', borderRadius: '8px', marginRight: '16px' }}>
        <img src={image} alt={title} />
      </Box>
      <CardContent sx={{ flex: 1 }} className='curriculum-content'>
        <Text className='curriculum-item-title' variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Text>
        <div className='curriculum-item-description-container'>
          <Text className='curriculum-item-description' variant="body2" color="textSecondary" sx={{ marginTop: '8px' }}>
            {description}
          </Text>
        </div>
        <ButtonComponent className='curriculum-item-button' variant="outlined" sx={{ marginTop: '16px', textTransform: 'none' }} onClick={onButtonClick}>
          {buttonText}<KeyboardArrowRightIcon />
        </ButtonComponent>
      </CardContent>
    </Card>
  );
};

export default CurriculumCard;