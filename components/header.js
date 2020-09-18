import { useState } from 'react';

function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 bg-indigo-700 w-full px-5 py-4">
      <div className="flex items-center ">
        <div className="flex-1">
          <h3 className="text-white text-xl font-bold">TuneTrack</h3>
        </div>
        <div className="flex-initial hidden md:block">
          <a
            href="mailto:tunetrack@nambiar.dev"
            target="_blank"
            className="text-sm rounded text-white px-4 py-2 hover:underline "
          >
            <i className="fas fa-envelope mr-4"></i>Contact
          </a>
          <a
            href="https://apps.apple.com/app/id1525634753"
            target="_blank"
            className="text-sm rounded text-white px-4 py-2 bg-indigo-500 hover:bg-indigo-400"
          >
            <i className="fab fa-apple mr-4"></i>Get on App Store
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
