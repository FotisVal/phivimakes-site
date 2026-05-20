export default function HeroAnimation() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <style>
        {`
          @keyframes floatSoft {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes blinkTogether {
            0%, 92%, 100% { transform: scaleY(1); }
            95% { transform: scaleY(0.12); }
          }

          @keyframes printerHead {
            0%, 100% { transform: translateX(0px); }
            50% { transform: translateX(54px); }
          }

          @keyframes filamentMove {
            0% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -48; }
          }

          @keyframes ideaPop {
            0%, 100% { transform: scale(1); opacity: 0.95; }
            50% { transform: scale(1.06); opacity: 1; }
          }

          @keyframes codePulse {
            0%, 100% { opacity: 0.4; transform: translateY(0px); }
            50% { opacity: 1; transform: translateY(-4px); }
          }

          @keyframes coffeeSteam {
            0% { opacity: 0; transform: translateY(16px); }
            35% { opacity: 0.75; }
            100% { opacity: 0; transform: translateY(-24px); }
          }

          .float-soft { animation: floatSoft 4.5s ease-in-out infinite; }

          .blink-group {
            transform-box: fill-box;
            transform-origin: center;
            animation: blinkTogether 4.2s ease-in-out infinite;
          }

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
        aria-label="Animated nerd with laptop and 3D printer"
      >
        <defs>
          <linearGradient id="cyanGlow" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>

          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="16"
              floodColor="#000000"
              floodOpacity="0.28"
            />
          </filter>
        </defs>

        {/* background glow - transparent page background */}
        <circle cx="450" cy="310" r="290" fill="#8b5cf6" opacity="0.28" />
        <circle cx="660" cy="210" r="170" fill="#22d3ee" opacity="0.08" />
        <circle cx="225" cy="410" r="145" fill="#3b82f6" opacity="0.08" />

        {/* floating cards */}
        <g className="float-soft">
          <rect
            x="70"
            y="84"
            width="166"
            height="94"
            rx="24"
            fill="#020617"
            stroke="#22d3ee"
            strokeOpacity="0.6"
            strokeWidth="3"
          />
          <text x="94" y="124" fill="#67e8f9" fontSize="22" fontWeight="800">
            {"<idea />"}
          </text>
          <text x="96" y="152" fill="#ffffff" fontSize="16" className="code-1">
            prototype
          </text>
        </g>

        <g className="float-soft" style={{ animationDelay: "0.8s" }}>
          <rect
            x="684"
            y="62"
            width="146"
            height="92"
            rx="24"
            fill="#020617"
            stroke="#22d3ee"
            strokeOpacity="0.5"
            strokeWidth="3"
          />
          <text x="708" y="102" fill="#67e8f9" fontSize="20" fontWeight="800">
            CAD
          </text>
          <text x="708" y="132" fill="#ffffff" fontSize="16" className="code-2">
            print();
          </text>
        </g>

        {/* desk */}
        <path d="M95 526 H805" stroke="#0f172a" strokeWidth="18" strokeLinecap="round" />
        <path
          d="M115 510 H785"
          stroke="url(#cyanGlow)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.55"
        />

        {/* person */}
        <g filter="url(#softShadow)">
          {/* torso */}
          <path
            d="M236 510
               C248 440 290 398 340 398
               C391 398 434 440 446 510
               Z"
            fill="#ffffff"
            stroke="#020617"
            strokeWidth="8"
            strokeLinejoin="round"
          />

          {/* hair back - FIRST, so neck stays visible */}
          <path
            d="M234 252
               C234 184 281 138 339 133
               C398 128 449 155 472 209
               C493 258 485 325 445 368
               C426 389 401 402 372 406
               C358 408 350 404 346 394
               C342 384 342 370 342 356
               H338
               C338 370 338 384 334 394
               C330 404 322 408 308 406
               C279 402 254 389 235 368
               C196 324 192 253 234 252
               Z"
            fill="#020617"
          />

          {/* left lower hair mass */}
          <path
            d="M252 300
               C212 314 191 356 208 395
               C224 430 275 436 318 405
               C280 391 259 352 252 300
               Z"
            fill="#020617"
          />

          {/* right lower hair mass */}
          <path
            d="M428 300
               C468 314 489 356 472 395
               C456 430 405 436 362 405
               C400 391 421 352 428 300
               Z"
            fill="#020617"
          />

          {/* thicker neck */}
          <path
            d="M340 323 V389"
            stroke="#020617"
            strokeWidth="28"
            strokeLinecap="round"
          />
          <path
            d="M340 323 V389"
            stroke="#ffffff"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* face */}
          <circle
            cx="340"
            cy="255"
            r="94"
            fill="#ffffff"
            stroke="#020617"
            strokeWidth="6"
          />

          {/* main front hair */}
          <path
            d="M257 239
               C270 169 326 139 388 147
               C431 153 460 184 464 234
               C423 211 381 201 336 203
               C299 205 275 218 257 239
               Z"
            fill="#020617"
          />

          {/* left fringe - widened to remove the gap */}
          <path
            d="M260 236
               C278 184 324 156 384 157
               C355 175 326 194 301 223
               C289 236 280 250 273 265
               C266 258 261 248 260 236
               Z"
            fill="#020617"
          />

          {/* extra left filler patch */}
          <path
            d="M246 250
               C248 223 260 200 281 181
               C293 170 307 163 322 160
               C300 179 283 201 271 226
               C264 240 259 255 258 270
               C252 266 248 259 246 250
               Z"
            fill="#020617"
          />

          {/* glasses */}
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

          {/* eyes - blink together */}
          <g className="blink-group">
            <ellipse cx="312" cy="260" rx="8" ry="11" fill="#020617" />
            <ellipse cx="382" cy="260" rx="8" ry="11" fill="#020617" />
          </g>

          {/* cheeks */}
          <circle cx="286" cy="298" r="15" fill="#f8d9a0" opacity="0.88" />
          <circle cx="407" cy="298" r="15" fill="#f8d9a0" opacity="0.88" />

          {/* smile */}
          <path
            d="M325 314 C342 329 364 327 378 313"
            fill="none"
            stroke="#020617"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>

        {/* laptop */}
        <g filter="url(#softShadow)">
          <path
            d="M315 397 H560
               C583 397 598 416 592 437
               L565 525 H260
               L285 420
               C289 405 300 397 315 397Z"
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

        {/* coffee mug */}
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
          <path
            className="steam-1"
            d="M135 420 C120 395 150 390 135 365"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            className="steam-2"
            d="M155 420 C140 395 170 390 155 365"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            className="steam-3"
            d="M175 420 C160 395 190 390 175 365"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="5"
            strokeLinecap="round"
          />
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

          <rect
            x="670"
            y="440"
            width="60"
            height="25"
            rx="6"
            fill="#e2e8f0"
            stroke="#020617"
            strokeWidth="6"
          />
          <circle
            cx="765"
            cy="452"
            r="18"
            fill="#e2e8f0"
            stroke="#020617"
            strokeWidth="6"
          />
        </g>

        {/* idea bubble */}
        <g className="idea">
          <circle cx="505" cy="145" r="72" fill="#ffffff" stroke="#020617" strokeWidth="8" />
          <circle cx="445" cy="250" r="17" fill="#ffffff" stroke="#020617" strokeWidth="7" />
          <circle cx="475" cy="214" r="24" fill="#ffffff" stroke="#020617" strokeWidth="7" />

          {/* smaller bulb */}
          <path
            d="M505 128
               C490 128 480 140 484 154
               C488 164 496 168 496 179
               H514
               C514 168 522 164 526 154
               C530 140 520 128 505 128Z"
            fill="#f8d9a0"
            stroke="#020617"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path d="M492 188 H518" stroke="#020617" strokeWidth="5" strokeLinecap="round" />
          <path d="M495 198 H515" stroke="#020617" strokeWidth="5" strokeLinecap="round" />
          <path d="M505 112 V98" stroke="#020617" strokeWidth="5" strokeLinecap="round" />
          <path d="M482 120 L473 110" stroke="#020617" strokeWidth="5" strokeLinecap="round" />
          <path d="M528 120 L537 110" stroke="#020617" strokeWidth="5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}