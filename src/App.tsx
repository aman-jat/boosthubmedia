import { CssBaseline, Stack, ThemeProvider } from '@mui/material';
import './App.css';
import theme from './style/theme';
import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
