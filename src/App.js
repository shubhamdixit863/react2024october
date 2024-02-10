import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Banner from './components/Banner';
const style={
  marginTop:"100px"
}
function App() {
 
  return (
    <div className="container-fluid">
      <Header/>
      <div className='row' style={style}>
        <div className='col-3' >
            <SideBar/>
        </div>

<div className='col-8'>
  <Banner/>

</div>
      </div>

      <Footer/>
   
    </div>
  );
}

export default App;
