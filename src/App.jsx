import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom'; 
import Appbar from './Components/Appbar/Appbar.jsx';
import { getDesignTokens } from './Theme.jsx';

function App() {
  const [mode, setMode] = useState(localStorage.getItem('currentMode') || 'light');

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Appbar mode={mode} setMode={setMode} />
      <Outlet /> 
    </ThemeProvider>
  );
}

export default App;
