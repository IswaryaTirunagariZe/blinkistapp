import CategoryType from '../../molecules/CategoryType/CategoryType';
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';

const categeories = ['Entrepreneurship',
  'Politics',
  'Marketing & Sales',
  'Science',
  'Health & Nutrition',
  'Personal Development',
  'Economics',
  'History',
  'Communication Skills',
  'Corporate Culture',
  'Management & Leadership',
  'Motivation & Inspiration',
  'Money & Investments',
  'Psychology',
  'Productivity',
  'Sex & Relationships',
  'Technology & the Future',
  'Mindfulness & Happiness',
  'Parenting',
  'Society & Culture',
  'Nature & the Environment',
  'Biography & Memoir',
  'Career & Success',
  'Education',
  'Religion & Spirituality',
  'Creativity',
  'Philosophy'];
export default function CategeoriesList() {
  return (
    <Box style={{
      position: "relative",
      top: "100%",
      width: "100vw",
      left: "50%",
      padding: "3em",
      background: "#dfdfdf",
      boxSizing: "border-box",
      zIndex: 9,
      fontSize: "smaller",
      transform: "translateX(-50%)"
    }}>
      <Grid container spacing={0.5}>
        {categeories.map(categeories => (
          <Grid item xs={3} sm={2}>
            <CategoryType categoryType={categeories}></CategoryType>
          </Grid>
        ))}
      </Grid>
    </Box>);
}