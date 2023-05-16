import './App.css';
import Login from './components/Login';
import OtpVerification from './components/OtpVerification';
import ProfileSetup from './components/ProfileSetup';
import Header from './components/logged in/Header';
import Home from './components/logged in/Home';
import HomeLeaderboard from './components/logged in/HomeLeaderboard';
import HomeProfile from './components/logged in/HomeProfile';
import HomeSettings from './components/logged in/HomeSettings';
import Invite from './components/logged in/Invite';
import Leaderboard from './components/logged in/Leaderboard';
import LeftNavBar from './components/logged in/LeftNavBar';
import MyFeed from './components/logged in/MyFeed';
import RightNavBar from './components/logged in/RightNavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/SignIn' Component={Login} />
          <Route path='/signUp/otp' Component={OtpVerification} />
          <Route path='/signUp/setup' Component={ProfileSetup} />
          <Route path='/home' Component={Home} />
          <Route path='/invite' Component={Invite} />
          <Route path='/leaderboard' Component={HomeLeaderboard} />
          <Route path='/settings' Component={HomeSettings} />
          <Route path='/my-profile' Component={HomeProfile} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <OtpVerification /> */}
      {/* <ProfileSetup /> */}
      {/* <Header /> */}
      {/* <div style={{backgroundColor: '#e9e9e9'}} className='flex h-fit w-fit'>
        <LeftNavBar />
        <Leaderboard />
        <MyFeed />
        <RightNavBar />
      </div>
      <Invite /> */}
    </div>
  );
}

export default App;
