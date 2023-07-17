import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import Header from './components/Header';
import Section1 from './components/Section1';
import {SectionData,CardData} from './ContentResource/cardData';
import {Section2Data,Card2Data} from './ContentResource/card2Data';
import {Section3Data,Card3Data} from './ContentResource/card3Data';

function App() {
  return (
    <>
    <Sidebar/>
    <Header />
    <Section1 secData={SectionData} secCardData={CardData}/>
    <Section1 secData = {Section2Data} secCardData={Card2Data}/>
    <Section1 secData={Section3Data} secCardData={Card3Data}/>
    </>
  );
}

export default App;
