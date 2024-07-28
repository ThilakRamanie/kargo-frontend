// Components
import Grid from '@mui/material/Grid';
import Text from "../../Shared/Text";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import CurriculumCard from './CurriculumCard';
// style
import './curriculum.scss';
// Hook
import useFetchItem from '../../../hooks/useFetchItem';
// constants
import { CurriculumConstants } from '../../../Constants/constants';
// spinner style
export const Curriculum = () => {
    const { data, loading, error } = useFetchItem();

    if (loading) {
        return (
            <Box className='spinner'>
                <CircularProgress style={{ color: '#0033ff' }} />
                <p>Loading</p>
            </Box>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="curriculum">
            <div className="curriculum-heading">
                <Text variant="h5">{CurriculumConstants.heading}</Text>
            </div>
            <Box className="curriculum-items">
                <Grid container columns={12} alignContent='center' className='items-grid' justifyContent='center' spacing={3}>
                    {data.map((item, index) => (
                        <Grid item xs={12} sm={12} md={6} lg={5.5} key={index}>
                            <CurriculumCard title={item.title}
                                description={item.description}
                                image={item.image}
                                buttonText={CurriculumConstants.curriculumButtonText}
                                onButtonClick={() => { }} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}