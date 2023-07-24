import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import Header from './components/Header';
import Section1 from './components/Section1';
import {SectionData,CardData} from './ContentResource/cardData';
import {Section2Data,Card2Data} from './ContentResource/card2Data';
import {Section3Data,Card3Data} from './ContentResource/card3Data';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <Sidebar/>
    <div className='overflow-y-auto w-[100%] h-[525px]'>
    <Header />
    <Section1 secData={SectionData} secCardData={CardData}/>
    <Section1 secData = {Section2Data} secCardData={Card2Data}/>
    <Section1 secData={Section3Data} secCardData={Card3Data}/>
    <Footer/>
    </div>
    </>
  );
}

export default App;
