import { TextFields } from '@mui/icons-material';
import { Box, Button, Chip, ChipProps, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const SearchBox = () => {
    const [searchResult, setSearchResult] = useState(['sdfsdfsdafa', 'asdfsadfadf', 'asdfasdfa']);

    return (<>
        <Box >
            <Grid >
                <TextField sx={{ width: { xs: '90vw', md: '40vw' }, m: 2 }} id="search" label="위스키 검색" />
            </Grid>
            <Grid sx={{ backgroundColor: 'red' }} >
                <Box sx={{ height: '100%', }}>
                    {searchResult.map((item) => (
                        <Button>{item}</Button>
                    ))}
                </Box>
            </Grid>
        </Box>
    </>
    );
};

export default SearchBox;