import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, ChipProps, Divider, Grid, IconButton, InputBase, Paper, TextField, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Rating from '@mui/material/Rating';

const ReviewBox = () => {

    return (
        <Box>
            <Grid sx={{
                display: 'flex', gap: 1, my: 4,
                justifyContent: 'center'
            }}>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        // boxShadow: 'none'
                    }}
                >
                    <InputBase placeholder='Whiskey' sx={{ ml: 1, flex: 2 }} />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <InputBase placeholder='ABV' sx={{ ml: 1, flex: 1 }} />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <InputBase placeholder='WB code' sx={{ ml: 1, flex: 1 }} />
                </Paper>
            </Grid>
            <Box sx={{
                display: 'flex',
                height: '25vh',
                justifyContent: 'space-evenly',
                mb: 1
            }}>
                <Box sx={{
                    backgroundColor: 'lightgray',
                    width: '40%'
                }}>
                </Box>
                <Box sx={{
                    backgroundColor: 'lightgreen',
                    width: '50%'
                }}>
                    <Rating name="size-large" defaultValue={2} max={10} size="small" />
                    <Rating name="silarge" defaultValue={7} max={10} size="small" />
                </Box>
            </Box>
            <Box sx={{ mb: 1 }}>
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        '&::-webkit-scrollbar': {
                            width: '12px',
                            backgroundColor: 'lightgray'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'gray',  // 스크롤바 색상
                            borderRadius: '20px',  // 스크롤바 모양
                        },
                    }}
                >
                    <InputBase placeholder='Comment' sx={{ ml: 1, flex: 1 }} multiline maxRows={4} rows={4} />
                </Paper>
            </Box>
            <Box sx={{
                height: '45vh',
                justifyContent: 'center',
                backgroundColor: 'lightblue',
                width: '100%',
                margin: 'auto',
                overflow: 'auto'
            }}>

                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
};

export default ReviewBox;