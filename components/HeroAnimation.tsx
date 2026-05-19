export default function HeroAnimation() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <style>
        {`
          @keyframes floatSoft {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes blink {
            0%, 92%, 100% { transform: scaleY(1); }
            95% { transform: scaleY(0.12); }
          }

          @keyframes printerHead {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(58px); }
          }

          @keyframes filamentMove {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -60; }
          }

          @keyframes ideaPop {
            0%, 100% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.08); opacity: 1; }
          }

          @keyframes codePulse {
            0%, 100% { opacity: 0.35; transform: translateY(0px); }
            50% { opacity: 1; transform: translateY(-5px); }
          }

          @keyframes coffeeSteam {
            0% { opacity: 0; transform: translateY(16px); }
            40% { opacity: 0.7; }
            100% { opacity: 0; transform: translateY(-24px); }
          }

          .float-soft { animation: floatSoft 4.5s ease-in-out infinite; }
          .blink { transform-origin: center; animation: blink 4.2s ease-in-out infinite; }
          .printer-head { animation: printerHead 3s ease-in-out infinite; }
          .filament { stroke-dasharray: 12 12; animation: filamentMove 1.4s linear infinite; }
          .idea { transform-origin: center; animation: ideaPop 2.4s ease-in-out infinite; }
          .code-1 { animation: codePulse 2.2s ease-in-out infinite; }
          .code-2 { animation: codePulse 2.2s ease-in-out infinite 0.35s; }
          .code-3 { animation: codePulse 2.2s ease-in-out infinite 0.7s; }
          .steam-1 { animation: coffeeSteam 2.8s ease-in-out infinite; }
          .steam-2 { animation: coffeeSteam 2.8s ease-in-out infinite 0.45s; }
          .steam-3 { animation: coffeeSteam 2.8s ease-in-out infinite 0.9s; }
        `}
      </style>

      <svg
        viewBox="0 0 900 620"
        className="h-auto w-full"
        role="img"
        aria-label="Animated PhiViMakes creator with laptop and 3D printer"
      >
        <defs>
          <linearGradient id="cyanGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>

          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="18"
              floodColor="#000000"
              floodOpacity="0.28"
            />
          </filter>
        </defs>

        {/* background glow */}
        <circle cx="450" cy="310" r="290" fill="#0f172a" opacity="0.24" />
        <circle cx="650" cy="210" r="170" fill="#22d3ee" opacity="0.08" />
        <circle cx="230" cy="400" r="140" fill="#3b82f6" opacity="0.08" />

        {/* code bubbles */}
        <g className="float-soft">
          <rect
            x="70"
            y="80"
            width="160"
            height="92"
            rx="24"
            fill="#020617"
            stroke="#22d3ee"
            strokeOpacity="0.55"
            strokeWidth="3"
          />
          <text x="95" y="120" fill="#67e8f9" fontSize="22" fontWeight="800">
            {"<idea />"}
          </text>
          <text className="code-1" x="96" y="148" fill="#ffffff" fontSize="16">
            prototype
          </text>
        </g>

        <g className="float-soft" style={{ animationDelay: "0.8s" }}>
          <rect
            x="680"
            y="58"
            width="150"
            height="92"
            rx="24"
            fill="#020617"
            stroke="#22d3ee"
            strokeOpacity="0.45"
            strokeWidth="3"
          />
          <text x="705" y="100" fill="#67e8f9" fontSize="20" fontWeight="800">
            CAD
          </text>
          <text className="code-2" x="705" y="130" fill="#ffffff" fontSize="16">
            print(); 
          </text>
        </g>

        {/* desk */}
        <path
          d="M95 526 H805"
          stroke="#0f172a"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M115 510 H785"
          stroke="url(#cyanGlow)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />

        {/* girl */}
        <g filter="url(#softShadow)">
          {/* body */}
          <path
            d="M250 475 C270 390 350 370 405 430 C430 460 420 510 420 510 H225 C225 510 232 495 250 475Z"
            fill="#ffffff"
            stroke="#020617"
            strokeWidth="8"
            strokeLinejoin="round"
          />

          {/* neck */}
          <path
            d="M340 318 V385"
            stroke="#020617"
            strokeWidth="48"
            strokeLinecap="round"
          />
          <path
            d="M340 318 V385"
            stroke="#ffffff"
            strokeWidth="34"
            strokeLinecap="round"
          />

          {/* face */}
          <circle
            cx="340"
            cy="255"
            r="94"
            fill="#ffffff"
            stroke="#020617"
            strokeWidth="8"
          />

          {/* hair */}
          <path
            d="M270 235 C275 165 335 125 402 156 C438 173 452 212 444 260 C418 216 377 198 324 205 C294 209 278 222 270 235Z"
            fill="#020617"
          />
          <circle cx="310" cy="145" r="35" fill="#020617" />
          <path
            d="M280 140 C305 95 370 102 392 150"
            fill="none"
            stroke="#020617"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* nerd glasses */}
          <circle
            cx="312"
            cy="260"
            r="28"
            fill="none"
            stroke="#020617"
            strokeWidth="8"
          />
          <circle
            cx="382"
            cy="260"
            r="28"
            fill="none"
            stroke="#020617"
            strokeWidth="8"
          />
          <path d="M340 260 H354" stroke="#020617" strokeWidth="8" />
          <path d="M283 255 L260 246" stroke="#020617" strokeWidth="8" />
          <path d="M411 255 L432 246" stroke="#020617" strokeWidth="8" />

          {/* eyes */}
          <ellipse className="blink" cx="312" cy="260" rx="8" ry="11" fill="#020617" />
          <ellipse className="blink" cx="382" cy="260" rx="8" ry="11" fill="#020617" />

          {/* cheeks */}
          <circle cx="286" cy="298" r="15" fill="#f8d9a0" opacity="0.85" />
          <circle cx="407" cy="298" r="15" fill="#f8d9a0" opacity="0.85" />

          {/* mouth */}
          <path
            d="M326 315 C342 330 365 327 378 313"
            fill="none"
            stroke="#020617"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* hand thinking */}
          <path
            d="M424 340 C455 365 462 420 430 444"
            fill="none"
            stroke="#020617"
            strokeWidth="34"
            strokeLinecap="round"
          />
          <path
            d="M424 340 C455 365 462 420 430 444"
            fill="none"
            stroke="#ffffff"
            strokeWidth="22"
            strokeLinecap="round"
          />
          <circle cx="425" cy="335" r="16" fill="#ffffff" stroke="#020617" strokeWidth="7" />
        </g>

        {/* laptop */}
        <g filter="url(#softShadow)">
          <path
            d="M315 395 H560 C583 395 598 414 592 436 L565 525 H260 L285 418 C289 404 300 395 315 395Z"
            fill="#f8fafc"
            stroke="#020617"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <circle cx="427" cy="462" r="22" fill="none" stroke="#020617" strokeWidth="7" />
          <path
            d="M240 525 H590 L622 555 H205 Z"
            fill="#e2e8f0"
            stroke="#020617"
            strokeWidth="8"
            strokeLinejoin="round"
          />
          <path
            d="M318 542 H506"
            stroke="url(#cyanGlow)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>

        {/* coffee */}
        <g>
          <path
            d="M120 438 H180 V515 H120 Z"
            fill="#ffffff"
            stroke="#020617"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <path
            d="M180 462 C220 462 220 500 180 500"
            fill="none"
            stroke="#020617"
            strokeWidth="7"
          />
          <path className="steam-1" d="M135 420 C120 395 150 390 135 365" fill="none" stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" />
          <path className="steam-2" d="M155 420 C140 395 170 390 155 365" fill="none" stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" />
          <path className="steam-3" d="M175 420 C160 395 190 390 175 365" fill="none" stroke="#22d3ee" strokeWidth="5" strokeLinecap="round" />
        </g>

        {/* 3D printer */}
        <g filter="url(#softShadow)">
          <rect
            x="590"
            y="225"
            width="240"
            height="250"
            rx="32"
            fill="#ffffff"
            stroke="#020617"
            strokeWidth="8"
          />
          <rect
            x="625"
            y="275"
            width="170"
            height="145"
            rx="14"
            fill="#f8fafc"
            stroke="#020617"
            strokeWidth="7"
          />

          {/* rails */}
          <path d="M650 305 H770" stroke="#020617" strokeWidth="8" strokeLinecap="round" />
          <path d="M650 390 H770" stroke="#020617" strokeWidth="8" strokeLinecap="round" />
          <path d="M670 288 V405" stroke="#020617" strokeWidth="6" strokeLinecap="round" />
          <path d="M750 288 V405" stroke="#020617" strokeWidth="6" strokeLinecap="round" />

          {/* moving head */}
          <g className="printer-head">
            <rect
              x="675"
              y="300"
              width="45"
              height="55"
              rx="8"
              fill="#ffffff"
              stroke="#020617"
              strokeWidth="7"
            />
            <path d="M697 355 V382" stroke="#020617" strokeWidth="7" strokeLinecap="round" />
          </g>

          {/* filament */}
          <path
            className="filament"
            d="M810 290 C855 270 860 335 818 340"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="830" cy="337" r="34" fill="#ffffff" stroke="#020617" strokeWidth="8" />
          <circle cx="830" cy="337" r="13" fill="#020617" />

          {/* printed object */}
          <path
            className="code-3"
            d="M690 390 L710 360 L735 390 Z"
            fill="#f8d9a0"
            stroke="#020617"
            strokeWidth="6"
            strokeLinejoin="round"
          />

          <rect x="670" y="440" width="60" height="25" rx="6" fill="#e2e8f0" stroke="#020617" strokeWidth="6" />
          <circle cx="765" cy="452" r="18" fill="#e2e8f0" stroke="#020617" strokeWidth="6" />
        </g>

        {/* idea bubble */}
        <g className="idea">
          <circle cx="505" cy="145" r="62" fill="#ffffff" stroke="#020617" strokeWidth="8" />
          <circle cx="445" cy="250" r="17" fill="#ffffff" stroke="#020617" strokeWidth="7" />
          <circle cx="475" cy="214" r="24" fill="#ffffff" stroke="#020617" strokeWidth="7" />

          <path
            d="M505 115 C480 115 465 135 473 158 C479 174 494 178 494 195 H516 C516 178 532 172 537 155 C544 132 529 115 505 115Z"
            fill="#f8d9a0"
            stroke="#020617"
            strokeWidth="7"
            strokeLinejoin="round"
          />
          <path d="M492 205 H518" stroke="#020617" strokeWidth="7" strokeLinecap="round" />
          <path d="M496 220 H514" stroke="#020617" strokeWidth="7" strokeLinecap="round" />
          <path d="M505 96 V73" stroke="#020617" strokeWidth="7" strokeLinecap="round" />
          <path d="M463 110 L447 92" stroke="#020617" strokeWidth="7" strokeLinecap="round" />
          <path d="M547 110 L563 92" stroke="#020617" strokeWidth="7" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}