import TestState from './State/Test/TestState'
import { BrowserRouter } from 'react-router-dom'
import Route from './Route'
import UseEffectState from './State/UseEffect/UseEffectState'
import UseState from './State/UseState/UseState'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import TopNavaigation from './Component/TopNavigation/TopNavaigation'
import './app.css'

function App () {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <UseState>
          <TestState>
            <UseEffectState>
              <TopNavaigation />
              <Route />
            </UseEffectState>
          </TestState>
        </UseState>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
