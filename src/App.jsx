//import logo from './logo.svg';
import './App.css';
import AllFoodRest from './Component/AllFoodRest';
import Category from './Component/Category';
import Footer from './Component/Footer';
import Header from './Component/Header';
import NearMeSection from './Component/NearMeSection';
import Toprest from './Component/Toprest';

function App() {
  return (
   <>
    <Header></Header>
    <Category></Category>
    <Toprest></Toprest>
    <AllFoodRest></AllFoodRest>
    <NearMeSection></NearMeSection>
    <Footer></Footer>
   </>
    
    
  );
}

export default App;
