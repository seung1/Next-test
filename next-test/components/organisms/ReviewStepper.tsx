import {
  Box,
  InputBase,
  Paper,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import ReviewSlider from "../atoms/ReviewSlider";
import ElementChart from "../molecules/ElementChart";

import { useEffect, useMemo, useState } from "react";

import List from "@mui/material/List";
import getDataList from "@/data/getDataList";
import DropDownList from "../molecules/DropDownList";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";

interface ReviewType {
  elementList: { name: string; value: number }[];
  comment: string;
}

const ReviewStepper = ({
  step,
  review,
  handleUpdateReview,
}: {
  step: number;
  review: ReviewType;
  handleUpdateReview: (step: number, review: ReviewType) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [elementList, setElementList] = useState<
    { name: string; value: number }[]
  >(review.elementList);
  const [comment, setComment] = useState<string>(review.comment);

  const nameList = useMemo(
    () => elementList.map((element) => element.name),
    [elementList]
  );
  const valueList = useMemo(
    () => elementList.map((element) => element.value),
    [elementList]
  );

  const {
    getElList1,
    getElList2,
    getElList3,
    getElList4,
    getElList5,
    getElList6,
  } = getDataList();

  const handleDeleteElement = (value: string) => {
    const newList = elementList.filter((element) => element.name !== value);
    setElementList(newList);
  };

  const handleClickElement = (name: string, value: number) => {
    if (!nameList.includes(name) && elementList.length < 8) {
      const newList = [...elementList, { name: name, value: value }];
      setElementList(newList);
      handleUpdateReview(step, {
        ...review,
        elementList: newList,
      });
    }
    if (nameList.includes(name)) {
      const newList = elementList.filter((element) => {
        return element.name !== name;
      });
      setElementList(newList);
      handleUpdateReview(step, {
        ...review,
        elementList: newList,
      });
    }
  };

  const handleChangeElementValue = (id: string, newValue: number) => {
    const newList = elementList.map((element) => {
      if (element.name === id) element.value = newValue;
      return element;
    });
    setElementList(newList);
    handleUpdateReview(step, {
      ...review,
      elementList: newList,
    });
  };

  const handleOpenElements = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          height: open ? 0 : "28vh",
          transition: "height 0.5s",
          overflow: "hidden",
        }}
      >
        <Paper sx={{ height: "27vh", p: 1 }}>
          <Typography sx={{ px: 1 }}>Diagram</Typography>
          <Divider sx={{ m: 0.5 }} />
          <Box
            sx={{
              width: { xs: "180px", sm: "240px" },
              display: "flex",
              justifyContent: "center",
              mt: nameList.length < 3 ? "4vh" : 0,
            }}
          >
            {nameList.length > 0 && (
              <ElementChart
                id={`${step}`}
                nameList={nameList}
                valueList={valueList}
              />
            )}
          </Box>
        </Paper>

        <Paper
          sx={{
            py: 1,
            display: "flex",
            flexDirection: "column",
            flex: 1,
            height: "27vh",
          }}
        >
          <Typography sx={{ px: 1 }}>Elements</Typography>
          <Divider sx={{ m: 0.5 }} />
          {elementList.map((element, index) => (
            <ReviewSlider
              title={element.name}
              value={element.value}
              onClick={handleDeleteElement}
              handleChangeElementValue={handleChangeElementValue}
              key={index}
            />
          ))}
        </Paper>
      </Box>

      <Box sx={{ mb: 1 }}>
        <Paper sx={{ p: 1, pb: 0 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pr: 1,
            }}
          >
            <Typography sx={{ mx: 1 }}>Element List</Typography>
            <IconButton onClick={handleOpenElements}>
              {open ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
            </IconButton>
          </Box>
          <Divider sx={{ m: 0.5 }} />
          <List
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              borderRadius: 1,
              height: open ? "70vh" : "30vh",
              transition: "height 0.5s",
              overflow: "auto",
            }}
          >
            <DropDownList
              open={open}
              title={"이탄(피트)"}
              list={getElList1}
              addElement={handleClickElement}
              selectedList={elementList}
            />
            <DropDownList
              open={open}
              title={"과일"}
              list={getElList2}
              addElement={handleClickElement}
              selectedList={elementList}
            />
            <DropDownList
              open={open}
              title={"유제품"}
              list={getElList3}
              addElement={handleClickElement}
              selectedList={elementList}
            />
            <DropDownList
              open={open}
              title={"식물"}
              list={getElList4}
              addElement={handleClickElement}
              selectedList={elementList}
            />
            <DropDownList
              open={open}
              title={"향신료"}
              list={getElList5}
              addElement={handleClickElement}
              selectedList={elementList}
            />
            <DropDownList
              open={open}
              title={"기타"}
              list={getElList6}
              addElement={handleClickElement}
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
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                handleUpdateReview(step, {
                  ...review,
                  comment: e.target.value,
                });
              }}
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

export default ReviewStepper;
