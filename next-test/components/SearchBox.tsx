import { TextFields } from '@mui/icons-material';
import { Box, Button, Chip, ChipProps, Divider, Grid, IconButton, InputBase, ListItem, ListItemButton, ListItemText, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
    const [searchResult, setSearchResult] = useState(['검색조건1', '검색조건2', '검색조건3']);
    const testData = Array.from({ length: 20 }, (_, index) => index + 1);
    return (<>
        <Box sx={{
            backgroundColor: '#B6C5B8',
        }}>
            <Grid sx={{ my: 4 }}>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        // boxShadow: 'none'
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
            <Grid >
                <Box sx={{ justifyContent: 'center' }}>
                    <Box sx={{
                        width: { xs: '90vw', md: '42vw' },
                        height: { xs: '75vh', md: '80vh' },
                        overflow: 'auto',
                        backgroundColor: "white",
                        borderRadius: 3,
                        p: 2,
                        '&::-webkit-scrollbar': {
                            width: '12px',
                            backgroundColor: 'lightgray'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'gray',  // 스크롤바 색상
                            borderRadius: '20px',  // 스크롤바 모양
                        },
                    }}>
                        {testData.map((item, index) => (
                            <ListItem key={index} sx={{ py: 0 }}>
                                <ListItemButton>
                                    <ListItemText primary={`Item ${item}`} />
                                </ListItemButton>
                            </ListItem>
                        ))}

                    </Box>
                </Box>
            </Grid>
        </Box>
    </>
    );
};

export default SearchBox;