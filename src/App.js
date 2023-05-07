import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import SearchInput from "./components/searchInput/SearchInput";
import Tabs from "./components/Tabs/Tabs";
import AudioList from "./components/audioList/AudioList";
import FooterMiniPlayer from "./components/Footer-Mini-Player/FooterMiniPlayer";

function App() {
  const [list, setlist] = useState(false);

  const onBackBtnPress = () => {
    setlist(false);
  };

  return (
    <>
      <div className="App m-10">
        <Header />
        <h2 className="mtb-20 app-quote">Find The Best Music For Your Code</h2>
        <SearchInput />
        <Tabs setlist={setlist} />
        {list && <AudioList onBackBtnPress={onBackBtnPress} />}
        <FooterMiniPlayer />
      </div>
      <div className="width_alert">This Site Is Only For The Small devices (Resolution smaller than 768px)</div>
    </>
  );
}

export default App;
