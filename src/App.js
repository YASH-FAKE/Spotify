import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Sign_up from './components/Sign_up';
import Sign_in from './components/Sign_in';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Sign-up' element={<Sign_up />}/>
        <Route path='/Sign-in' element={<Sign_in />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
