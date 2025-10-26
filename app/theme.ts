'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1158d5", 
    },
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
export default theme;
