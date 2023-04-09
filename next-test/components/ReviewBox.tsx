import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReviewSlider from "./atoms/ReviewSlider";

const ReviewBox = () => {
  const handleDeleteElement = () => {
    console.log("요소 삭제");
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          height: "27vh",
          justifyContent: "space-evenly",
          mb: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "lightgray",
            width: "40%",
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: "lightgreen",
            width: "60%",
            py: 1,
          }}
        >
          <ReviewSlider title={"오렌지 껍질"} onClick={handleDeleteElement} />
          <ReviewSlider title={"사과"} onClick={handleDeleteElement} />
          <ReviewSlider title={"커피"} onClick={handleDeleteElement} />
          <ReviewSlider title={"식빵"} onClick={handleDeleteElement} />
          <ReviewSlider title={"꿀"} onClick={handleDeleteElement} />
          <ReviewSlider title={"담배"} onClick={handleDeleteElement} />
          <ReviewSlider title={"메이플시럽"} onClick={handleDeleteElement} />
          <ReviewSlider title={"솔향"} onClick={handleDeleteElement} />
        </Box>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            "&::-webkit-scrollbar": {
              width: "12px",
              backgroundColor: "lightgray",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "gray", // 스크롤바 색상
              borderRadius: "20px", // 스크롤바 모양
            },
          }}
        >
          <InputBase
            placeholder="Comment"
            sx={{ ml: 1, flex: 1 }}
            multiline
            rows={3}
          />
        </Paper>
      </Box>
      <Box
        sx={{
          height: "35vh",
          justifyContent: "center",
          backgroundColor: "lightblue",
          width: "100%",
          margin: "auto",
          overflow: "auto",
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
            <Button variant="outlined">라임</Button>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default ReviewBox;
