import { Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import theme from './styles/theme';
// "lint": "eslint 'src/**/*.js' 'src/**/*.jsx'",
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Goals from './pages/Goals';
import Navigation from './components/Navigation';
import Div from './core-components/Div';

function App() {
  return (
    <>
      <Div my={3}>
        <Navigation />
      </Div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/goals" element={<Goals />} />
      </Routes>
    </>
  );
}

export default App;
