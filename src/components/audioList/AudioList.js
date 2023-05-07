import { BackIcon, PlayIcon } from "../../assets/icons";
import "./AudioList.css";

const AudioList = ({ onBackBtnPress }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <div className="audio-ls m-20">
        <div onClick={onBackBtnPress} className="audio-ls-header">
          <img src={BackIcon} alt="Back" />
        </div>
        <ul>
          <li className="audio-ls-container mtb-10">
            {arr.map((curElem) => {
              return (
                <div key={curElem} className="audio-ls-item flex px-2 align-center justify-sb ptb-10  ">
                  <div className="flex px-2">
                    <div className="audio-img">
                      <img src="" alt="" />
                    </div>
                    <div className="audio-info mlr-20 track_details">
                      <p>let me love you</p>
                      <p>justin biber</p>
                    </div>
                  </div>
                  <div className="play_btn">
                    <button>
                      <img src={PlayIcon} alt="PlayIcon" />
                    </button>
                  </div>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
};

export default AudioList;
