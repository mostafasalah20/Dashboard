

export const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
           
            primary: { main: '#1976d2' },
            background: { default: '#ffffff' },
          }
        : {
        
            primary: { main: '#90caf9' },
            background: { default: '#121212' },
          }),
    }
})
