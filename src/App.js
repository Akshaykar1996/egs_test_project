import './App.css';
import Header from './componet/Navber/Header';
import Navber from './componet/Navber/Navber';
import Navbersec from './componet/Navber/Navbersec';
import Herosection from './componet/Handpicked/Herosection';
import { Groups } from './componet/Groups/Groups';


function App() {
  return (
 <>
   <Navber/>
   <Header/>
   <Navbersec/>
   <Herosection/>
   {/* Add */}
   <Groups/>
 </>
  );
}

export default App;
