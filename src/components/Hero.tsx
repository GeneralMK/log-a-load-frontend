import { FiArrowUpRight } from "react-icons/fi";
export function Hero() {
  return (
    <section className="hero">
      <div className="eyebrow">
        <span className="dot"></span>
        {" When no-one else is around."}
      </div>
      <div className="hero-top">
        <h1>
          {"Your load."}
          <br />
          <span>{"On the move."}</span>
        </h1>
        <div className="intro">
          <p>
            {
              "Meet the Log-A-Load app: a simpler way for customers to request transport and for drivers to find suitable loads. From pickup to destination, see how it will work."
            }
          </p>
          <a className="button dark" href="#app">
            {"Discover the app "}
            <FiArrowUpRight className="ui-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hero-art">
        <div className="art-tag">{"LOCAL ROOTS. OPEN ROADS."}</div>
        <span className="launch-label">
          {"APP COMING SOON "}
          {/* <FiArrowUpRight className="ui-icon" aria-hidden="true" size="1px" /> */}
        </span>
        <svg
          viewBox="0 0 1300 400"
          role="img"
          aria-label="Illustration of a Log-A-Load delivery truck on an Eastern Cape inspired landscape"
        >
          <defs>
            <linearGradient id="sky" x2="0" y2="1">
              <stop stop-color="#5585ae"></stop>
              <stop offset="1" stop-color="#d0e4f2"></stop>
            </linearGradient>
            <linearGradient id="box" x2="1" y2="1">
              <stop stop-color="#f4f8fc"></stop>
              <stop offset="1" stop-color="#bbcfe0"></stop>
            </linearGradient>
          </defs>
          <rect width="1300" height="400" fill="url(#sky)"></rect>
          <circle cx="990" cy="95" r="64" fill="#f6fbff" opacity=".8"></circle>
          <path
            d="M0 210L130 148 260 190 420 90 600 199 810 130 1060 200 1300 130V400H0"
            fill="#739bb9"
          ></path>
          <path
            d="M0 245Q210 130 420 240T850 235T1300 200V400H0"
            fill="#426e96"
          ></path>
          <path d="M0 300Q260 200 550 280T1300 265V400H0" fill="#23517c"></path>
          <path d="M0 343L1300 290V400H0" fill="#1d344e"></path>
          <path
            d="M0 383L1300 331"
            stroke="#b9cfe1"
            strokeWidth="3"
            strokeDasharray="95 60"
          ></path>
          <g transform="translate(430 85)">
            <ellipse
              cx="310"
              cy="252"
              rx="285"
              ry="17"
              fill="#102640"
              opacity=".55"
            ></ellipse>
            <path d="M35 45H375V228H35Z" fill="url(#box)"></path>
            <path d="M35 45L65 30H395L375 45Z" fill="#e6f0f7"></path>
            <path d="M375 45L395 30V211L375 228Z" fill="#7d9bb5"></path>
            <path d="M395 105H496L552 173V228H395Z" fill="#089bd1"></path>
            <path d="M406 116H486L523 165H406Z" fill="#173551"></path>
            <path d="M446 116V165" stroke="#93cce4" strokeWidth="5"></path>
            <path
              d="M496 107L511 114 562 176V225L552 228V173Z"
              fill="#087daf"
            ></path>
            <path d="M408 177H540" stroke="#2583ad" strokeWidth="2"></path>
            <rect
              x="417"
              y="182"
              width="20"
              height="5"
              rx="2"
              fill="#19557b"
            ></rect>
            <rect x="529" y="190" width="22" height="12" fill="#effbff"></rect>
            <path d="M30 219H558V236H30Z" fill="#132b45"></path>
            <g fill="#152332" stroke="#46637c" strokeWidth="6">
              <circle cx="105" cy="234" r="35"></circle>
              <circle cx="469" cy="234" r="35"></circle>
            </g>
            <g fill="#c4d5e3" stroke="#7492ac" strokeWidth="5">
              <circle cx="105" cy="234" r="17"></circle>
              <circle cx="469" cy="234" r="17"></circle>
            </g>
            <path
              d="M48 64V207M59 64V207M360 64V207"
              stroke="#a7c0d5"
              strokeWidth="2"
            ></path>
            <text
              x="90"
              y="131"
              fill="#1e3d69"
              fontFamily="Impact,Arial,sans-serif"
              fontWeight="900"
              fontSize="38"
            >
              {"LOG-A-LOAD"}
            </text>
            <text
              x="94"
              y="153"
              fill="#40668d"
              fontFamily="Arial"
              fontSize="11"
              letterSpacing="4"
            >
              {"YOUR LOAD. ON THE MOVE."}
            </text>
            <path d="M93 175H320" stroke="#009ace" strokeWidth="3"></path>
          </g>
          <g fill="#1b3e60">
            <path d="M148 290V216H154V290Z"></path>
            <path d="M107 221Q150 181 196 222Z"></path>
            <path d="M1130 295V235H1135V295Z"></path>
            <path d="M1098 240Q1132 206 1170 240Z"></path>
          </g>
        </svg>
        <div className="art-bottom">
          <i>
            <FiArrowUpRight className="ui-icon" aria-hidden="true" />
          </i>
          {" Starting in Qonce / King William’s Town"}
        </div>
      </div>
      <div className="strip">
        <div>
          <b>{"01 / CUSTOMERS"}</b>
          {" A simpler way to move a load"}
        </div>
        <div>
          <b>{"02 / VEHICLE OWNERS"}</b>
          {" Put your vehicle to work"}
        </div>
        <div>
          <b>{"03 / OUR VISION"}</b>
          {" Connect all 9 provinces"}
        </div>
      </div>
    </section>
  );
}
