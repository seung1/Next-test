import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  MenuItem,
  Paper,
  Select,
  Skeleton,
  Tab,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchBox from "@/components/SearchBox";
import ReviewStepper from "@/components/organisms/ReviewStepper";
import { useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isSearchBox, setIsSearchBox] = useState(true);

  return (
    <>
      <Head children={undefined} />
      <Grid
        container
        sx={{
          display: "flex",
          backgroundColor: "#F2EDD7",
          width: "100%",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <Grid
          item
          xs={0}
          md={5}
          sx={{
            display: isMobile ? (isSearchBox ? "block" : "none") : "block",
          }}
        >
          <SearchBox />
        </Grid>
        <Grid
          item
          xs={11}
          md={5}
          sx={{
            display: isMobile ? (isSearchBox ? "none" : "block") : "block",
          }}
        >
          <ReviewStepper />
        </Grid>

        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            position: "absolute",
            bottom: "1vh",
            width: "90vw",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isMobile && (
            <Paper
              onClick={() => setIsSearchBox(!isSearchBox)}
              sx={{
                display: "flex",
                position: "absolute",
                bottom: "10px",
                p: "4px 12px",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                width: "150px",
                fontSize: "14px",
              }}
            >
              {isSearchBox ? (
                <>
                  <BorderColorIcon
                    sx={{ display: "block", fontSize: "16px" }}
                  />
                  <Box sx={{ mx: "auto" }}>리뷰 작성하기</Box>
                </>
              ) : (
                <>
                  <SearchIcon sx={{ display: "block", fontSize: "16px" }} />
                  <Box sx={{ mx: "auto" }}>검색하기</Box>
                </>
              )}
            </Paper>
          )}
        </Grid>
      </Grid>
    </>
  );
}
