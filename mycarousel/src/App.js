import { Routes, Route } from 'react-router-dom';
import Navigation from './components/components/navigation.component';




    const App = () => {
      return(

        
        
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Navigation/>} />
        </Route>
      </Routes>
  );
};

export default App;
