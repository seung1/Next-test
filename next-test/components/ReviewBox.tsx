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
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

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

  const handleAddList = (value: string) => {
    if (!elementList.includes(value) && elementList.length < 8) {
      const newList = [...elementList, value];
      setElementList(newList);
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      {!open && (
        <>
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
        </>
      )}

      <Box sx={{ mb: 1 }}>
        <Paper
          sx={{
            py: 1,
            display: "flex",
            flexDirection: "column",
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
          </Box>
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
          onClick={() => handleClick()}
          sx={{
            height: open ? "60vh" : "100px",
            cursor: "pointer",
            overflow: "hidden",
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
              addElement={handleAddList}
              selectedList={elementList}
            />
            <DropDownList
              open={open}
              onClick={handleClick}
              title={"과일"}
              list={getElList2}
              addElement={handleAddList}
              selectedList={elementList}
            />
            <DropDownList
              open={open}
              onClick={handleClick}
              title={"유제품"}
              list={getElList3}
              addElement={handleAddList}
              selectedList={elementList}
            />
            <DropDownList
              open={open}
              onClick={handleClick}
              title={"식물"}
              list={getElList4}
              addElement={handleAddList}
              selectedList={elementList}
            />
            <DropDownList
              open={open}
              onClick={handleClick}
              title={"향신료"}
              list={getElList5}
              addElement={handleAddList}
              selectedList={elementList}
            />
            <DropDownList
              open={open}
              onClick={handleClick}
              title={"기타"}
              list={getElList6}
              addElement={handleAddList}
              selectedList={elementList}
            />
          </List>
        </Paper>
      </Box>

      {!open && (
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
      )}
    </Box>
  );
};

export default ReviewBox;
