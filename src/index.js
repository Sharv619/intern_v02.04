import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Caraosal from './components/Caraosal';
import Campaign from './components/Campaign';
import Members from './components/Members';
import Login from './components/Login';
import Donation from './components/Donation';
import CreateCampaign from './components/CreateCampaign';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Caraosal />
    <Campaign />
    <Members />
    <Login />
    <Donation />
    <CreateCampaign />
    <AboutUs />
    <ContactUs />

    <Footer />

  </React.StrictMode>
);

reportWebVitals();
