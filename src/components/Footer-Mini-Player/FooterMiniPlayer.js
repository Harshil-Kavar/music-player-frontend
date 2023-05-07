import { useState } from "react";
import "./FooterMiniPlayer.css";
import { CloseIcon, HomeIcon, NextIcon, PlayIcon, PlayIconBlk, PreviousIcon, UserIcon, listBg } from "../../assets/icons";

const FooterMiniPlayer = () => {
  const [slideUp, setSlideUp] = useState(false);

  return (
    <>
      <div className={`fix-footer ${slideUp ? "active" : ""}`}>
        <div onClick={() => setSlideUp(!slideUp)} className="slid-up-btn"></div>
        <div className="d-visibility"></div>
        {slideUp && (
          <>
            <div className="audio-player-lg">
              <div className="audio-cover-lg-img">
                <img src={listBg} alt="CoverImg" />
              </div>
              <div className="">
                <h2>I'm the davil of my world</h2>
                <h3>Lucifer Mo.star</h3>
              </div>
              <div className="audio-player-progress-bar">
                <input
                  type="range"
                  name="rangelg"
                  id="rangelg"
                  min={'0'}
                  max={'100'}
                />
              </div>
              <div className="d-flex justify-content-between mtb-20">
                <span>00:00</span>
                <span>00:00</span>
              </div>
              <div className="audio-controls flex justify-sb">
                <button>
                  <img src={PreviousIcon} alt="PreviousIcon" />
                </button>
                <button className="play-pause-btn">
                  <img src={PlayIconBlk} alt="PlayIcon" />
                </button>
                <button>
                  <img src={NextIcon} alt="NextIcon" />
                </button>
              </div>
            </div>
          </>
        )}

        {!slideUp && (
          <>
            <div className="mini-player flex justify-sb align-center mtb-10">
              <div className="flex align-center">
                <div className="artist-img">
                  <img src={listBg} alt="CoverImg" />
                </div>
                <div className="mini-player-info mlr-20 track_details">
                  <p>I'm the davil of my world</p>
                  <p>Lucifer Mo.star</p>
                </div>
              </div>
              <div className="mini-player-control flex">
                <button>
                  <img src={PlayIcon} alt="PlayIcon" />
                </button>
                <button>
                  <img src={CloseIcon} alt="CloseIcon" />
                </button>
              </div>
            </div>

            {/* navigatin menu */}
            <div className="navigation-menu flex justify-evenly">
              <a href="#">
                <div>
                  <img src={HomeIcon} alt="Home" />
                </div>
                <div>
                  <span>Home</span>
                </div>
              </a>
              <a href="#">
                <div>
                  <img src={UserIcon} alt="Profile" />
                </div>
                <div>
                  <span>Profile</span>
                </div>
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FooterMiniPlayer;
