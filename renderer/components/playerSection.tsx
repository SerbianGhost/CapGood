const PlayerSection: React.FC = () => {
  return (
    <section className="player work-space__section">
      <header className="player__header work-space__section-header">
        <h2 className="player__title work-space__section-title">Плеер</h2>
      </header>
      <div className="player__data work-space__section-data">
        <div className="player__video"></div>
      </div>
      <footer className="player__footer">
        <div className="player__footer-start player__footer-part">
          <div className="player__time">
            <p className="player__current-time">
              <span className="player__hour">00</span>:
              <span className="player__minute">00</span>:
              <span className="player__second">00</span>:
              <span className="player__millisecond">00</span>
            </p>{" "}
            /{" "}
            <p className="player__duration">
              <span className="player__hour">00</span>:
              <span className="player__minute">00</span>:
              <span className="player__second">00</span>:
              <span className="player__millisecond">00</span>
            </p>
          </div>
          <button type="button" className="player__volume-indicator-button">
            <span className="player__volume-indicator">Громкость</span>
          </button>
        </div>
        <div className="player__footer-center player__footer-part">
          <button type="button" className="player__play-button">
            <svg
              viewBox="-3 0 28 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>play</title> <desc>Created with Sketch Beta.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Icon-Set-Filled"
                    transform="translate(-419.000000, -571.000000)"
                    fill="#ffffff"
                  >
                    {" "}
                    <path
                      d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
                      id="play"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>
        <div className="player__footer-end player__footer-part">
          <button type="button" className="player__quality-button">
            Полное
          </button>
          <button className="player__scale-button">Масштаб</button>
          <button className="player__unwrap-button">На весь экран</button>
        </div>
      </footer>
    </section>
  );
};
export default PlayerSection;
