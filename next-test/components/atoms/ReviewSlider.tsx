import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import CloseIcon from "@mui/icons-material/Close";

function valuetext(value: number) {
  return `${value}`;
}

const ReviewSlider = ({
  title,
  onClick,
}: {
  title: string;
  onClick: () => void;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: 1.5,
        px: 1,
        alignItems: "center",
        height: "24px",
        mb: 0.5,
      }}
    >
      <Box sx={{ whiteSpace: "nowrap", minWidth: "70px", textAlign: "center" }}>
        <Typography variant="subtitle2" sx={{ fontSize: "12px" }}>
          {title}
        </Typography>
      </Box>
      <Slider
        defaultValue={3}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />
      <CloseIcon
        onClick={onClick}
        sx={{ color: "gray", fontSize: "20px", cursor: "pointer" }}
      />
    </Box>
  );
};

export default ReviewSlider;
