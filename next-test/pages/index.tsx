import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Grid,
  MenuItem,
  Select,
  Skeleton,
  Tab,
  Tabs,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SearchBox from '@/components/SearchBox';
import ReviewBox from '@/components/ReviewBox';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Home() {
  const [isSearchBox, setIsSearchBox] = useState(true);

  return (
    <>
      <Head children={undefined} />
      {/* MOBILE */}
      <Grid container sx={{
        display: { xs: 'flex', md: 'none' },
        backgroundColor: '#B6C5B8',
        width: '100%',
        height: '100vh',
        justifyContent: 'space-evenly',
      }}>
        {isSearchBox ?
          <Grid item xs={0} md={5}>
            <SearchBox />
          </Grid>
          :
          <Grid item xs={10} md={5}>
            <ReviewBox />
          </Grid>
        }
        <Grid item xs={10} sx={{
          display: 'flex',
          position: 'absolute',
          bottom: '1vh',
          width: '90vw',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <Button
            variant='outlined'
            onClick={() => { setIsSearchBox(!isSearchBox) }}
            sx={{ border: '2px solid white', color: 'white', }}
          >
            {isSearchBox ? '리뷰 작성하기' : '리뷰 검색하기'}
          </Button>
        </Grid>
      </Grid>

      {/* DESKTOP */}
      <Grid container sx={{
        display: { xs: 'none', md: 'flex' },
        backgroundColor: '#B6C5B8',
        width: '100%',
        height: '100vh',
        justifyContent: 'space-evenly',
      }}>
        <Grid item xs={0} md={5}>
          <SearchBox />
        </Grid>
        <Grid item xs={10} md={5}>
          <ReviewBox />
        </Grid>
      </Grid>
    </>
  )
}
