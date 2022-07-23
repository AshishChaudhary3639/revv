import { Box } from '@chakra-ui/react';
import AllRoutes from './allroutes/AllRoutes';
import './App.css';
import LandingNav from './navbar/LandingNav';

function App() {
  return (
    <Box>
     <LandingNav />
     <AllRoutes/>
    </Box>
  );
}

export default App;
