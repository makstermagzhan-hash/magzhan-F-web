import React, { useState } from 'react';
import Header from './components/Header.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import TraditionsScreen from './screens/TraditionsScreen.jsx';
import DetailsScreen from './screens/DetailsScreen.jsx';
import CardsScreen from './screens/CardsScreen.jsx';
import QuizScreen from './screens/QuizScreen.jsx';
import FavouritesScreen from './screens/FavouritesScreen.jsx';
import AboutScreen from './screens/AboutScreen.jsx';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [selectedItem, setSelectedItem] = useState(null);
  const [prevScreen, setPrevScreen] = useState('home');

  const openDetails = (item) => {
    setPrevScreen(screen);
    setSelectedItem(item);
    setScreen('details');
  };

  return (
    <div>
      <Header screen={screen} setScreen={setScreen} />

      {screen === 'home' && (
        <HomeScreen setScreen={setScreen} openDetails={openDetails} />
      )}
      {screen === 'traditions' && (
        <TraditionsScreen openDetails={openDetails} />
      )}
      {screen === 'details' && (
        <DetailsScreen
          item={selectedItem}
          onBack={() => setScreen(prevScreen)}
        />
      )}
      {screen === 'cards' && <CardsScreen />}
      {screen === 'quiz' && <QuizScreen />}
      {screen === 'favs' && <FavouritesScreen openDetails={openDetails} />}
      {screen === 'about' && <AboutScreen />}
    </div>
  );
}