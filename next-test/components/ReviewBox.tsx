import {
  Box,
  InputBase,
  Paper,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ReviewSlider from "./atoms/ReviewSlider";
import ElementChart from "./molecules/ElementChart";

import { useState } from "react";

import List from "@mui/material/List";
import getDataList from "@/data/getDataList";
import DropDownList from "./molecules/DropDownList";
import ElementDialog from "./organisms/ElementDialog";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

const ReviewBox = () => {
  const [dialog, setDialog] = useState(false);
  const [open, setOpen] = useState(true);
  const [elementList, setElementList] = useState<string[]>([]);

  const {
    getElList1,
    getElList2,
    getElList3,
    getElList4,
    getElList5,
    getElList6,
  } = getDataList();

  const handleDeleteElement = (value: string) => {
    const newList = elementList.filter((element) => element !== value);
    setElementList(newList);
  };

  const handleChangeList = (values: string[]) => {
    setElementList(values);
    setDialog(false);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          height: "30vh",
          justifyContent: "space-evenly",
          mb: 1,
          gap: 1,
        }}
      >
        <Paper
          sx={{
            width: "100%",
            p: 1,
          }}
        >
          Diagram
        </Paper>
      </Box>

      <Box sx={{ mb: 1 }}>
        <Paper
          sx={{
            py: 1,
            display: "flex",
            flexDirection: "column",
            // gap: 0.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 1,
              mb: 0.5,
            }}
          >
            <Typography>Elements</Typography>
            <IconButton
              onClick={() => setDialog(true)}
              sx={{ width: "24px", height: "24px" }}
            >
              <LibraryAddIcon sx={{ fontSize: "24px" }} />
            </IconButton>
          </Box>
          {dialog && (
            <ElementDialog
              dialogOpen={dialog}
              openControll={() => setDialog(false)}
              handleChangeList={handleChangeList}
              initList={elementList}
            />
          )}
          {elementList.map((element, index) => (
            <ReviewSlider
              title={element}
              onClick={handleDeleteElement}
              key={index}
            />
          ))}
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
      {/* <Box
        sx={{
          height: "35vh",
          justifyContent: "center",
          width: "100%",
          margin: "auto",
          overflow: "auto",
          color: "black",
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
      </Box> */}
    </Box>
  );
};

export default ReviewBox;
