// components
import Grid from '@mui/material/Grid';
import Image from '../../Shared/Image';
import Text from '../../Shared/Text';
import ButtonComponent from '../../Shared/Button';
// styles
import './Hero.scss'
// constants
import { HeroConstants } from '../../../Constants/constants';

export const HeroComponent = () => {
    return (
        <Grid container columns={12} className='hero-grid'>
            <Grid item xs={12} md={6}>
                <Image src="assets/hero_img.png" alt='landing page' className='hero-img' />
            </Grid>
            <Grid item xs={12} md={6}>
                <div className="hero-text">
                    <div className="hero-title">
                        <Text variant='h1' color='black' fontSize='3rem' fontWeight={700}>
                            {HeroConstants.title[0]}<br />{HeroConstants.title[1]}<br />{HeroConstants.title[2]}
                        </Text>
                    </div>
                    <div className="hero-description">
                        <Text variant='body1' color='black' fontSize='1.2rem' fontWeight={500}>
                            {HeroConstants.text}
                        </Text>
                    </div>
                    <ButtonComponent variant='outlined' className='hero-button'>
                        {HeroConstants.buttonText}
                    </ButtonComponent>
                </div>
            </Grid>
        </Grid>
    );
}