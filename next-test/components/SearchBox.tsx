import { TextFields } from '@mui/icons-material';
import { Box, Button, Chip, ChipProps, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const SearchBox = () => {
    const [searchResult, setSearchResult] = useState(['sdfsdfsdafa', 'asdfsadfadf', 'asdfasdfa']);

    return (<>
        <Box >
            <Grid >
                <TextField sx={{ width: '100%', m: 2 }} id="search" label="위스키 검색" />
            </Grid>
            <Grid >
                <Box >
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