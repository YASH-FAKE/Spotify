import '../App.css';
import Sidebar from './Sidebar'
import Header from './Header';
import Section1 from './Section1';
import Advertise from './Advertise';
import {SectionData,CardData} from '../ContentResource/cardData';
import {Section2Data,Card2Data} from '../ContentResource/card2Data';
import {Section3Data,Card3Data} from '../ContentResource/card3Data';
import Footer from './Footer';


export default function Home (){
    return(
        <>
        <Sidebar/>
    <div className='overflow-y-auto w-[100%] h-[525px]'>
    <Header />
    <Section1 secData={SectionData} secCardData={CardData}/>
    <Section1 secData = {Section2Data} secCardData={Card2Data}/>
    <Section1 secData={Section3Data} secCardData={Card3Data}/>
    <Footer/>
    </div>
    <Advertise />
    </>
    )
}