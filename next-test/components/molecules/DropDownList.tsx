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

const DropDownList = ({
  open,
  title,
  selectedList,
  onClick,
  list,
  addElement,
}: {
  open: boolean;
  title: string;
  selectedList: string[];
  onClick: () => void;
  list: () => { value: string }[];
  addElement: (value: string) => void;
}) => {
  return (
    <>
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
            display: "flex",
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
                backgroundColor: selectedList.includes(item.value)
                  ? "#755139"
                  : "white",
                color: selectedList.includes(item.value) ? "#ffffff" : "black",
                borderRadius: 4,
                ":hover": {
                  backgroundColor: selectedList.includes(item.value)
                    ? "#755139"
                    : "white",
                },
              }}
              onClick={() => addElement(item.value)}
            >
              <Typography
                variant="caption"
                sx={{
                  mx: "auto",
                  fontWeight: selectedList.includes(item.value) ? 700 : 500,
                }}
              >
                {item.value}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </Box>
      {/* <ListItemButton onClick={onClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          sx={{
            display: "flex",
            fontSize: "12px",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {[...list()].map((item, idx) => (
            <ListItemButton
              key={idx}
              sx={{
                p: 0.5,
                minWidth: "90px",
                maxWidth: "90px",
                fontWeight: selectedList.includes(item.value) ? 700 : 500,
                backgroundColor: selectedList.includes(item.value)
                  ? "#755139"
                  : "white",
                color: selectedList.includes(item.value) ? "#ffffff" : "black",
                borderRadius: 4,
                ":hover": {
                  backgroundColor: selectedList.includes(item.value)
                    ? "#755139"
                    : "white",
                },
              }}
              onClick={() => addElement(item.value)}
            >
              <Typography variant="subtitle2" sx={{ mx: "auto" }}>
                {item.value}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </Collapse> */}
    </>
  );
};

export default DropDownList;
