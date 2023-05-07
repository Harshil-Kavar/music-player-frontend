import { useState } from "react";
import { BgIcon, listBg } from "../../assets/icons";
import "./Tabs.css";

const Tabs = ({ setlist }) => {
  const [viewIDX, setViewIDX] = useState(true);
  const [activeClsval, setActiveClsval] = useState(false);

  const ActivationOn = (view) => {
    if (view === "Commercial") {
      setViewIDX(true);
      setActiveClsval(false);
    } else if (view === "Freelance") {
      setActiveClsval(true);
      setViewIDX(false);
    }
  };
  return (
    <>
      <div className="tab-container">
        {/* tab header */}
        <div className="tab-header flex">
          <span
            className={!activeClsval ? "active" : ""}
            onClick={() => ActivationOn("Commercial")}
          >
            Commercial
          </span>
          <span
            className={activeClsval ? "active" : ""}
            onClick={() => ActivationOn("Freelance")}
          >
            Freelance
          </span>
        </div>

        {/* tab content */}
        <div className="tab-contents">
          {viewIDX === true ? (
            <div className="tab-content" id="commercial">
              <div className="content-wrapper flex flex-wrap justify-sb m-20">
                <div className="content-item" onClick={() => setlist(true)}>
                  <img src={BgIcon} alt="" />
                </div>
                <div className="content-item" onClick={() => setlist(true)}>
                  <img src={BgIcon} alt="" />
                </div>
                <div className="content-item" onClick={() => setlist(true)}>
                  <img src={BgIcon} alt="" />
                </div>
                <div className="content-item" onClick={() => setlist(true)}>
                  <img src={BgIcon} alt="" />
                </div>
              </div>
            </div>
          ) : (
            <div className="tab-content" id="freelance">
              <div className="content-wrapper flex flex-wrap justify-sb m-20">
                <div className="content-item" onClick={() => setlist(true)}>
                  <img src={listBg} alt="" />
                </div>
                <div className="content-item" onClick={() => setlist(true)}>
                  <img src={listBg} alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Tabs;
