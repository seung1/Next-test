import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {
  Box,
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

export default function Home() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <>
      <Head children={undefined} />
      <Grid container sx={{
        display: 'flex',
        backgroundColor: 'white', width: '100%',
        height: '100%',
        justifyContent: 'space-evenly'
      }}>
        {tabValue === 0 ?
          <Grid item xs={0} md={5}>
            <SearchBox />
          </Grid>
          :
          <></>
        }
        <Grid item xs={10} md={5}>
          <ReviewBox />
        </Grid>
      </Grid>
    </>
  )
}
