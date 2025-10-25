import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainAppBar from './components/appBar'
import ProfessionalsListPage from './components/professionalsListPage'
import SubmitFormPage from './components/submitFormPage'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0046FF',
    },
    secondary: {
      main: '#6C63FF',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainAppBar />
        <Routes>
          <Route path="/" element={<ProfessionalsListPage />} />
          <Route path="/form" element={<SubmitFormPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
