import './App.css'; 
import { ThemeProvider } from './themes/themeContext.jsx';
import RoutesApp from './routes/RoutesApp.jsx';


const App = () => {
  return (
    <ThemeProvider>
      <RoutesApp />
    </ThemeProvider>
  );
};

export default App;