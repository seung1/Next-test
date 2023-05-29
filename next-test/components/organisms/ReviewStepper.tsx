import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ReviewBox from "../ReviewBox";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  ChipProps,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const steps = ["Nose", "Palate", "Finish"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", pt: 2 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, mb: 2, color: "#755139" }}
      >
        리뷰 작성하기
      </Typography>
      <Paper
        component="form"
        sx={{
          p: "0 4px",
          display: "flex",
          alignItems: "center",
          my: 2,
          flex: 1,
        }}
      >
        <InputBase placeholder="Whiskey" sx={{ ml: 1, flex: 2 }} />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase placeholder="ABV" sx={{ ml: 1, flex: 1 }} />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase placeholder="WB code" sx={{ ml: 1, flex: 1 }} />
      </Paper>
      <Stepper activeStep={activeStep} sx={{ mb: 2 }}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Box>
          <Typography sx={{ mt: 2, mb: 1, color: "black" }}>
            여기에 이제 사진으로 다운 받을 수 있게
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleReset}
              sx={{ color: "#755139", fontWeight: 700, textTransform: "none" }}
            >
              Download
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>
          <ReviewBox />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 1 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, color: "#755139", fontWeight: 700 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={handleNext}
              sx={{ mr: 1, color: "#755139", fontWeight: 700 }}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
