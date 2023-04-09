import { TextFields } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  ChipProps,
  Divider,
  Grid,
  IconButton,
  InputBase,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState, KeyboardEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  const [searchResult, setSearchResult] = useState([
    "검색조건1",
    "검색조건2",
    "검색조건3",
  ]);
  const getTestData = () => [
    {
      title: "드로낙 리뷰) 드로낙이라는 걸 처음 먹어보는데 리뷰한번 해봄",
      recommendCount: 235,
      commentCount: 312,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 255,
      commentCount: 1323,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 12,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 122,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 35,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 300,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
    {
      title: "드로낙 리뷰",
      recommendCount: 2,
      commentCount: 3,
      createdAt: "2023-04-04",
    },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const enterKeyEventOnSearch = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      target.blur();
      setSearchQuery(searchInput);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#B6C5B8",
        }}
      >
        <Box sx={{ my: 4 }}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              // boxShadow: 'none'
            }}
          >
            <InputBase
              type="search"
              placeholder="검색어를 입력하세요."
              sx={{ ml: 1, flex: 1 }}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={enterKeyEventOnSearch}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={() => setSearchQuery(searchInput)}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <Box>{` "${searchQuery}" 에 대한 검색 결과`}</Box>
        <Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              width: { xs: "90vw", md: "42vw" },
              height: { xs: "70vh", md: "78vh" },
            }}
          >
            <Box
              id="list label"
              sx={{
                display: "flex",
                fontWeight: 700,
                gap: 1,
                p: "8px 16px 0",
                width: "100%",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>제목</Box>
              <Box sx={{ minWidth: "40px" }}>추천수</Box>
              <Box sx={{ minWidth: "40px" }}>댓글수</Box>
              <Box sx={{ minWidth: "85px", whiteSpace: "nowrap" }}>작성일</Box>
            </Box>
            <Box
              sx={{
                // width: { xs: '90vw', md: '42vw' },
                height: { xs: "65vh", md: "75vh" },
                overflow: "auto",
                // backgroundColor: "white",
                // borderRadius: 3,
                position: "relative",
                p: "6px 12px 12px",
                "&::-webkit-scrollbar": {
                  width: "12px",
                  backgroundColor: "lightgray",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "gray", // 스크롤바 색상
                  borderRadius: "20px", // 스크롤바 모양
                },
              }}
            >
              {[...getTestData()].map((item, index) => (
                <>
                  <ListItemButton
                    key={index}
                    title={item.title}
                    sx={{ gap: 1, px: 0 }}
                  >
                    <Box
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflowWrap: "anywhere",
                        flexGrow: 1,
                      }}
                    >
                      {item.title}
                    </Box>
                    <Box sx={{ minWidth: "40px" }}>{item.recommendCount}</Box>
                    <Box sx={{ minWidth: "40px" }}>{item.commentCount}</Box>
                    <Box sx={{ minWidth: "85px", whiteSpace: "nowrap" }}>
                      {item.createdAt}
                    </Box>
                  </ListItemButton>
                  <Divider />
                </>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchBox;
