import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
 import {
   QueryClient,
   QueryClientProvider,
 } from 'react-query'
import { BrowserRouter } from "react-router-dom";
 
 const queryClient = new QueryClient()


ReactDOM.render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
    <App />
    </QueryClientProvider>
  </ThemeProvider>
  </BrowserRouter>
  ,
  document.querySelector('#root'),
);
