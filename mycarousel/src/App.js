import { Routes, Route } from 'react-router-dom';
import Navigation1 from './components/components/navigation.component';
import ArrayPush1 from   './components/components/vector-left-component';



    const App = () => {
      return(

        
        
    <Routes>
      <Route path='/' element={<div><ArrayPush1/><Navigation1/></div>}>
      
      
        </Route>
      </Routes>
  );
};

export default App;
