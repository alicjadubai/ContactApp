import "./CSSComponents/welcome.css";
import "./CSSComponents/general.css";
import "./CSSComponents/address.css";
import "./CSSComponents/cards.css";
import "./CSSComponents/contacts.css";
import "./CSSComponents/App.css";

import MainContent from "./sectionWelcom.js/MainContent";
import SideBar from "./sectionWelcom.js/SideBar";
import Cards from "./sectionCards.js/Cards";
import Address from "./sectionAddress/Address";
import SharePointList from "./ContactApp/Main";

function App() {
  return (
    <>
      {/* <section ig="welcome" className="welcome">
        <div className="wrapper">
          <div className="main__content">
            <MainContent />
          </div>
          <div className="sidebar">
            <SideBar />
          </div>
        </div>
      </section>
      <section id="address" className="address">
        <div className="wrapper">
          <div className="main__content">
            <Address />
          </div>
          <div className="sidebar"></div>
        </div>
      </section>
      <section id="cards" className="cards">
        <div className="wrapper">
          <div className="main__content">
            <Cards />
          </div>
          <div className="sidebar"></div>
        </div>
      </section> */}
      <section className="contactApp">
        <div className="contactApp__wrapper">
          <SharePointList />
        </div>
      </section>
    </>
  );
}

export default App;
