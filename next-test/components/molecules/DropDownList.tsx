import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const DropDownList = ({
  open,
  onClick,
  title,
  list,
}: {
  open: boolean;
  onClick: () => void;
  title: string;
  list: () => { value: string }[];
}) => {
  return (
    <>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          sx={{ display: "flex", fontSize: "12px", flexWrap: "wrap" }}
        >
          {[...list()].map((item, idx) => (
            <ListItemButton key={idx} sx={{ p: 1, width: "78px" }}>
              {item.value}
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default DropDownList;
