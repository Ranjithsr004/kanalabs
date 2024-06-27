import './App.css';
import Home from './components/Home/Home';
import { ReactComponent as MySVG } from "./arrow.svg";
import ScrollToTop from 'react-scroll-to-top'
import WalletCard from './components/WalletCard/Walletcard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className=''>
      <ScrollToTop smooth top='100' component={<MySVG />}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/swap' element={<WalletCard />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
