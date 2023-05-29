import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DropDownList from "../molecules/DropDownList";
import List from "@mui/material/List";
import getDataList from "@/data/getDataList";
import { Box, Chip } from "@mui/material";

const ElementDialog = ({
  dialogOpen,
  initList,
  openControll,
  handleChangeList,
}: {
  dialogOpen: boolean;
  initList: string[];
  openControll: () => void;
  handleChangeList: (values: string[]) => void;
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
  const [selectedList, setSelectedList] = useState<string[]>(initList);

  const addSelectedList = (value: string) => {
    if (!selectedList.includes(value) && selectedList.length < 8) {
      const newList = [...selectedList, value];
      setSelectedList(newList);
    }
  };

  const deleteSelectedList = (value: string) => {
    const newList = selectedList.filter((element) => element !== value);
    setSelectedList(newList);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Dialog open={dialogOpen} onClose={openControll}>
      <DialogTitle id="alert-dialog-title" sx={{ px: "16px", pb: 0.5 }}>
        {`Nose (${selectedList.length} / 8)`}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: 1,
          }}
        >
          {selectedList.map((item, index) => (
            <Chip
              key={index}
              label={item}
              onClick={() => deleteSelectedList(item)}
              onDelete={() => deleteSelectedList(item)}
              sx={{ height: "28px" }}
            />
          ))}
        </Box>
      </DialogTitle>

      <DialogContent sx={{ maxHeight: "600px", px: "8px", pb: 0 }}>
        <List
          sx={{ width: "100%", bgcolor: "background.paper", borderRadius: 1 }}
        >
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"이탄(피트)"}
            list={getElList1}
            addElement={addSelectedList}
            selectedList={selectedList}
          />
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"과일"}
            list={getElList2}
            addElement={addSelectedList}
            selectedList={selectedList}
          />
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"유제품"}
            list={getElList3}
            addElement={addSelectedList}
            selectedList={selectedList}
          />
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"식물"}
            list={getElList4}
            addElement={addSelectedList}
            selectedList={selectedList}
          />
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"향신료"}
            list={getElList5}
            addElement={addSelectedList}
            selectedList={selectedList}
          />
          <DropDownList
            open={open}
            onClick={handleClick}
            title={"기타"}
            list={getElList6}
            addElement={addSelectedList}
            selectedList={selectedList}
          />
        </List>
      </DialogContent>

      <DialogActions>
        <Button onClick={openControll} sx={{ color: "#755139" }}>
          취소
        </Button>
        <Button
          onClick={() => {
            handleChangeList(selectedList);
          }}
          sx={{ color: "#755139" }}
        >
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ElementDialog;
