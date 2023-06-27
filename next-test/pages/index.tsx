/* eslint-disable react/no-children-prop */
import { useState } from "react";
import Head from "next/head";
import { Box, Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SearchIcon from "@mui/icons-material/Search";

import ReviewBox from "@/components/ReviewBox";
import SearchBox from "@/components/SearchBox";

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
          overflow: "auto",
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
          <ReviewBox />
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
