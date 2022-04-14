import { Paper, TextField } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

const TodaysEntry = (data) => {
  return (
    <Paper elevation={3} sx={{
        width: "75vw",
        display: 'inline',
        mx: 'auto'
    }}>
        <h1>{data.dateselected}</h1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '75vw' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="standard-basic" label="Today's Highlight" variant="standard"></TextField>
        <br></br>
        <TextField id="standard-basic" label="What happened today?" variant="standard"></TextField>
        </Box>
    </Paper>
  );
};
export default TodaysEntry;

