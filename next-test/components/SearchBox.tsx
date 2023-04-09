import {
  Box,
  Divider,
  IconButton,
  InputBase,
  ListItemButton,
  Paper,
  Typography,
} from "@mui/material";
import { useState, KeyboardEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import getDataList from "@/data/getDataList";

const SearchBox = () => {
  const { getTestData } = getDataList();
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
      <Box sx={{ backgroundColor: "#F2EDD7" }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, my: 2, color: "#755139" }}
        >
          Whiskey Gallery Review Search
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Paper
            component="form"
            sx={{
              p: "0 4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <InputBase
              type="search"
              placeholder="리뷰를 검색하세요."
              sx={{ ml: 1, flex: 1 }}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={enterKeyEventOnSearch}
            />
            <IconButton
              type="button"
              sx={{ p: "8px" }}
              aria-label="search"
              onClick={() => setSearchQuery(searchInput)}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 700 }}
        >{` "${searchQuery}" 에 대한 검색 결과`}</Typography>
        <Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 1.5,
              width: { xs: "90vw", md: "42vw" },
              height: { xs: "75vh", md: "78vh" },
            }}
          >
            <Box
              id="list label"
              sx={{
                display: "flex",
                fontSize: "15px",
                fontWeight: 700,
                gap: 1,
                p: "8px 16px 0",
                width: "100%",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>제목</Box>
              <Box sx={{ minWidth: "30px" }}>추천수</Box>
              <Box sx={{ minWidth: "30px" }}>댓글수</Box>
              <Box sx={{ minWidth: "80px", whiteSpace: "nowrap" }}>작성일</Box>
            </Box>
            <Box
              sx={{
                height: { xs: "70vh", md: "73vh" },
                overflow: "auto",
                position: "relative",
                p: "6px 6px 10px 12px",
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
                <Box key={index}>
                  <ListItemButton title={item.title} sx={{ gap: 1, p: 0.5 }}>
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
                      <Typography variant="subtitle2">{item.title}</Typography>
                    </Box>
                    <Box sx={{ minWidth: "30px" }}>
                      <Typography variant="subtitle2">
                        {item.recommendCount}
                      </Typography>
                    </Box>
                    <Box sx={{ minWidth: "30px" }}>
                      <Typography variant="subtitle2">
                        {item.commentCount}
                      </Typography>
                    </Box>
                    <Box sx={{ minWidth: "80px", whiteSpace: "nowrap" }}>
                      <Typography variant="subtitle2">
                        {item.createdAt}
                      </Typography>
                    </Box>
                  </ListItemButton>
                  <Divider />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchBox;
