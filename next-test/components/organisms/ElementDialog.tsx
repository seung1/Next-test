import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DropDownList from "../molecules/DropDownList";
import List from "@mui/material/List";
import getDataList from "@/data/getDataList";
import { Box } from "@mui/material";

const ElementDialog = ({
  dialogOpen,
  openControll,
}: {
  dialogOpen: boolean;
  openControll: () => void;
}) => {
  const {
    getElList1,
    getElList2,
    getElList3,
    getElList4,
    getElList5,
    getElList6,
  } = getDataList();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <Dialog open={dialogOpen} onClose={openControll}>
        <DialogTitle id="alert-dialog-title">{"Nose"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", minWidth: "300px" }}>
            <Button>매실</Button>
            <Button>풋사과</Button>
            <Button>대추야자</Button>
          </Box>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={openControll}>취소</Button>
          <Button onClick={openControll} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ElementDialog;
