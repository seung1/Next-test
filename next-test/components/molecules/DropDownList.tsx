import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useMemo } from "react";

const DropDownList = ({
  open,
  title,
  selectedList,
  list,
  addElement,
}: {
  open: boolean;
  title: string;
  selectedList: { name: string; value: number }[];
  list: () => { value: string }[];
  addElement: (name: string, value: number) => void;
}) => {
  const nameList = useMemo(
    () => selectedList.map((item) => item.name),
    [selectedList]
  );

  return (
    <Box
      sx={{
        backgroundColor: "#F2EDD7",
        p: 1,
        pb: 0,
        borderRadius: 2,
        mb: "8px",
      }}
    >
      <Typography variant="subtitle2" sx={{ fontWeight: 700, pl: 1 }}>
        {title}
      </Typography>
      <List
        component="div"
        sx={{
          display: "inline-flex",
          fontSize: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {[...list()].map((item, idx) => (
          <ListItemButton
            key={idx}
            sx={{
              p: 0.5,
              height: "24px",
              minWidth: "72px",
              maxWidth: "72px",
              backgroundColor: nameList.includes(item.value)
                ? "#755139"
                : "white",
              color: nameList.includes(item.value) ? "#ffffff" : "black",
              borderRadius: 4,
              ":hover": {
                backgroundColor: nameList.includes(item.value)
                  ? "#755139"
                  : "white",
              },
            }}
            onClick={() => addElement(item.value, 3)}
          >
            <Typography
              variant="caption"
              sx={{
                mx: "auto",
                fontWeight: nameList.includes(item.value) ? 700 : 500,
              }}
            >
              {item.value}
            </Typography>
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default DropDownList;
