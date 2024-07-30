//import logo from './logo.svg';
import './App.css';
import SideBar from './components/sidebar';
import MainContainer from './components/mainContainer';

function App() {
  return (
    <div className="flex">
      <SideBar/>
      <MainContainer/>
    </div>
  );
}

export default App;
