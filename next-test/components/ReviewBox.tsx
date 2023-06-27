import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  Box,
  Button,
  Divider,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";

import ElementChart from "./molecules/ElementChart";
import ReviewStepper from "./organisms/ReviewStepper";

interface ReviewType {
  elementList: { name: string; value: number }[];
  comment: string;
}

const ReviewBox = () => {
  const steps = ["Nose", "Palate", "Finish"];
  const initReview = { elementList: [], comment: "" };

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [whiskey, setWhiskey] = useState<string>("");
  const [abv, setAbv] = useState<string>("");
  const [wbCode, setWbCode] = useState<string>("");
  const [firstStepReview, setFirstStepReview] =
    useState<ReviewType>(initReview);
  const [secondStepReview, setSecondStepReview] =
    useState<ReviewType>(initReview);
  const [thridStepReview, setThridStepReview] =
    useState<ReviewType>(initReview);

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
    setFirstStepReview(initReview);
    setSecondStepReview(initReview);
    setThridStepReview(initReview);
  };

  const handleUpdateReview = (step: number, review: ReviewType) => {
    if (step === 0) setFirstStepReview({ ...firstStepReview, ...review });
    else if (step === 1)
      setSecondStepReview({ ...secondStepReview, ...review });
    else if (step === 2) setThridStepReview({ ...thridStepReview, ...review });
  };

  const getNameList = (review: ReviewType) => {
    return review.elementList.map((element) => element.name);
  };
  const getValueList = (review: ReviewType) => {
    return review.elementList.map((element) => element.value);
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
        <InputBase
          placeholder="Whiskey"
          value={whiskey}
          onChange={(e) => setWhiskey(e.target.value)}
          sx={{ ml: 1, flex: 2 }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          placeholder="ABV"
          value={abv}
          onChange={(e) => setAbv(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          placeholder="WB code"
          value={wbCode}
          onChange={(e) => setWbCode(e.target.value)}
          sx={{ ml: 1, flex: 1 }}
        />
      </Paper>
      <Stepper activeStep={activeStep} sx={{ mb: 2 }}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                onClick={(e) => setActiveStep(index)}
                sx={{ cursor: "pointer" }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 3 ? (
        <Box>
          <Paper sx={{ p: 1 }}>
            <Typography sx={{ mb: 1, color: "black" }}>
              Whiskey Review
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ width: "40%" }}>
                <ElementChart
                  id="1"
                  nameList={getNameList(firstStepReview)}
                  valueList={getValueList(firstStepReview)}
                />
              </Box>
              <Box>{firstStepReview.comment}</Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ width: "40%" }}>
                <ElementChart
                  id="2"
                  nameList={getNameList(secondStepReview)}
                  valueList={getValueList(secondStepReview)}
                />
              </Box>
              <Box>{secondStepReview.comment}</Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ width: "40%" }}>
                <ElementChart
                  id="3"
                  nameList={getNameList(thridStepReview)}
                  valueList={getValueList(thridStepReview)}
                />
              </Box>
              <Box>{thridStepReview.comment}</Box>
            </Box>
          </Paper>
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
          {activeStep === 0 && (
            <ReviewStepper
              step={0}
              handleUpdateReview={handleUpdateReview}
              review={firstStepReview}
            />
          )}
          {activeStep === 1 && (
            <ReviewStepper
              step={1}
              handleUpdateReview={handleUpdateReview}
              review={secondStepReview}
            />
          )}
          {activeStep === 2 && (
            <ReviewStepper
              step={2}
              handleUpdateReview={handleUpdateReview}
              review={thridStepReview}
            />
          )}

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
};

export default ReviewBox;
