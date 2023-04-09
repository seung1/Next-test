import { Box, InputBase, Paper, Typography, Button } from "@mui/material";
import ReviewSlider from "./atoms/ReviewSlider";
import ElementChart from "./molecules/ElementChart";

import { useState } from "react";

import List from "@mui/material/List";
import getDataList from "@/data/getDataList";
import DropDownList from "./molecules/DropDownList";
import ElementDialog from "./organisms/ElementDialog";

const ReviewBox = () => {
  const [dialog, setDialog] = useState(false);
  const {
    getElList1,
    getElList2,
    getElList3,
    getElList4,
    getElList5,
    getElList6,
  } = getDataList();

  const handleDeleteElement = () => {
    console.log("요소 삭제");
  };

  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          height: "27vh",
          justifyContent: "space-evenly",
          mb: 1,
          gap: 1,
        }}
      >
        <Paper
          sx={{
            width: "43%",
          }}
        >
          <Button onClick={() => setDialog(true)}>DIALOG OPEN</Button>
          <ElementDialog
            dialogOpen={dialog}
            openControll={() => setDialog(false)}
          />
        </Paper>
        <Paper
          sx={{
            width: "57%",
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
        </Paper>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Paper
          component="form"
          sx={{
            height: "82px",
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
            maxRows={3}
          />
        </Paper>
      </Box>
      <Box
        sx={{
          height: "35vh",
          justifyContent: "center",
          width: "100%",
          margin: "auto",
          overflow: "auto",
        }}
      >
        <List
          sx={{ width: "100%", bgcolor: "background.paper", borderRadius: 1 }}
        >
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"이탄(피트)"}
            list={getElList1}
          />
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"과일"}
            list={getElList2}
          />
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"유제품"}
            list={getElList3}
          />
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"식물"}
            list={getElList4}
          />
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"향신료"}
            list={getElList5}
          />
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"기타"}
            list={getElList6}
          />
        </List>
      </Box>
    </Box>
  );
};

export default ReviewBox;
