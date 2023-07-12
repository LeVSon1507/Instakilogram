import React, { useState } from 'react'
import InforBar from "./inforbar/Inforbar"
import Body from "./body/Body"
import Rightbar from "./rightbar/Rightbar"
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import Navbar from './navbar/Navbar'
import Add from './add/Add'

function Homes() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <InforBar setMode={setMode} mode={mode}/>
          <Body />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default Homes