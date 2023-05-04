import './App.css';
import Login from './components/Login';
import Header from './components/logged in/Header';
import LeftNavBar from './components/logged in/LeftNavBar';
import MyFeed from './components/logged in/MyFeed';
import RightNavBar from './components/logged in/RightNavBar';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Header />
      <div style={{backgroundColor: '#e9e9e9'}} className='flex h-fit'>
        <LeftNavBar />
        <MyFeed />
        <RightNavBar />
      </div>
    </div>
  );
}

export default App;
