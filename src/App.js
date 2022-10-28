import './App.css';
import React from 'react';

// import images
// import BlueBgImage from './images/blueBg.png';
import client1 from './images/CLIENT-1.png';
import client2 from './images/client-2.png';
import client3 from './images/client-3.png';
import curveArrow from './images/curveArrow.png';
import Ellipse from './images/roundEllipse.png';
import user from './images/bguserwithGreen.png';
import map from './images/map.png';
import slideOneImage from  './images/slideImage-1.jpg';
import om from './images/blue-om.png'
import dottedImage from './images/dottedImage.png'
import w1 from './images/w-1.jpg'
import w2 from './images/w-2.jpg'
import w3 from './images/w-3.jpg'
import model from './images/model.jpg'
import GetinTouch from './images/getInTouch.jpg'
import Promoter from './images/promoter.jpg'
import DR from './images/DR.jpg'
import newLOGo from './images/newLogo.png'

// import Video
import video from './video/video.mp4';

// import components
import SlideOne from "./component1.0/SlideOne";
import WhyWe from "./component1.0/WhyWe";
import Emerging_India from "./component1.0/Emerging_India";
import PartnershipModels from "./component1.0/PartnershipModels";
import HowWeWork from "./component1.0/HowWeWork";
import CoFounderModel from "./component1.0/CoFounderModel";
import GetInTouch from "./component1.0/GetInTouch";
import CoPromoterModel from "./component1.0/CoPromoterModel";
import EcosystemOfNetwork from "./component1.0/EcosystemOfNetwork";
import SkillsExpertise from "./component1.0/SkillsExpertise";
// import Header from "./components/Header";
// import HomeBody from "./components/HomeBody";
// import SuccessRate from "./components/SuccessRate";
// import FirmAgency from "./components/FirmAgency";
// import PracticeAreas from "./components/PracticeAreas";
// import Clients from "./components/Clients";
// import FindLawyer from "./components/FindLawyer";
// import Footer from "./components/Footer";

// import  fontawsome icon
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faStar, faScaleBalanced, faArrowUp, faCopyright, faBars, faChevronRight} from '@fortawesome/free-solid-svg-icons'

// import boosttrap


function App() {
  return (
    <div className="App">
        <SlideOne bgImage={slideOneImage}/>
        <WhyWe om={newLOGo} />
        <Emerging_India dotImage={dottedImage}/>
        <PartnershipModels dotImage={dottedImage} />
        <HowWeWork w1={w1} w2={w2} w3={w3}/>
        <CoFounderModel model={model} arrowIcon={faChevronRight}/>
        <GetInTouch bgImage={GetinTouch}  fbicon={faFacebook} instaIcon={faInstagram} linkedInIcon={faLinkedin}/>
        <CoPromoterModel promotpr={Promoter}/>
        <EcosystemOfNetwork DR={DR} om={newLOGo}/>
        <SkillsExpertise DR={DR}/>
        {/*<Header logoIcon={faScaleBalanced} mobileBar={faBars} />*/}
        {/*<HomeBody user={user} client1={client1} client2={client2} client3={client3} arraow={curveArrow} ellipse={Ellipse} starIcon={faStar} />*/}
        {/*<SuccessRate video={video} ellipse={Ellipse} />*/}
        {/*<FirmAgency/>*/}
        {/*<PracticeAreas uparroe={faArrowUp} />*/}
        {/*<Clients client1={client1} client2={client2} client3={client3}/>*/}
        {/*<FindLawyer/>*/}
        {/*<Footer map={map} logoIcon={faScaleBalanced} fbicon={faFacebook} instaIcon={faInstagram} linkedInIcon={faLinkedin} cpwrite={faCopyright}/>*/}
        {/*<FontAwesomeIcon icon={Ellipse} />*/}
    </div>
  );
}

export default App;
