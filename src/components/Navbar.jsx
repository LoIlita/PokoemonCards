import { useState } from "react";

export default function Navbar() {
  const [LogedIn, setLoggedIn] = useState(false);

  return (
    <nav className="w-full bg-violet-900/60 backdrop-blur-md shadow-md ">
      <div className="mx-auto max-w-6xl h-16 px-6 grid grid-cols-[auto_1fr_auto] items-center">
        <a href="/" className="justify-self-start text-white font-bold text-md">
          LOGO
        </a>

        <div>
          <ul className="justify-self-center flex items-center gap-6 font-bold whitespace-nowrap">
            <li>
              <a href="/sprzedaj" className="text-white hover:text-purple-300">
                SPRZEDAJ
              </a>
            </li>
            <li>
              <a href="/kup" className="text-white hover:text-purple-300">
                KUP
              </a>
            </li>
            <li>
              <a href="/bitwa" className="text-white hover:text-purple-300">
                BITWA
              </a>
            </li>
            <li>
              <a
                href="/dziennaSkrzynka"
                className="text-white hover:text-purple-300"
              >
                DZIENNA SKRZYNKA
              </a>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className=" justify-self-end min-w-30 bg-purple-600 text-white font-bold p-2 rounded hover:bg-purple-500"
          onClick={() => setLoggedIn(!LogedIn)}
        >
          {LogedIn ? "WYLOGUJ" : "ZALOGUJ SIĘ"}
        </button>
      </div>
    </nav>
  );
}
