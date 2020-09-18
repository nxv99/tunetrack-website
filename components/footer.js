function Footer() {
  return (
    <footer className="bg-indigo-700">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 text-left text-indigo-200 text-opacity-50">
            <h5 className="font-bold text-white text-xl mb-1">TuneTrack</h5>
            <p className="text-xs">
              App by{' '}
              <a href="https://nambiar.dev" className="underline">
                Aryan Nambiar
              </a>
            </p>
            <p className="text-xs mb-4">
              Front-end & Website UI by{' '}
              <a href="https://twitter.com/tweetaudun" className="underline">
                Audun Hilden
              </a>
            </p>
          </div>
          <div className="w-full md:w-1/6 text-left ml-auto">
            <h5 className="font-bold text-white">Contact</h5>
            <ul className="mb-4 text-sm">
              <li className="mt-2 text-indigo-200 text-opacity-50">
                <a href="mailto:tunetrack@nambiar.dev" className="underline">
                  Email
                </a>
              </li>
              <li className="mt-2 text-indigo-200 text-opacity-50">
                <a href="https://twitter.com/ifisq" className="underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/6 text-left">
            <h5 className="font-bold text-white">Legal</h5>
            <ul className="mb-4 text-sm">
              <li className="mt-2 text-indigo-200 text-opacity-50">
                <a href="https://nambiar.dev/privacy-policy" className="">
                  Privacy Policy
                </a>
              </li>
              <li className="mt-2 text-indigo-200 text-opacity-50">
                <a
                  href="https://tunetrack.app/terms-and-conditions"
                  className=""
                >
                  Terms and Conditions
                </a>
              </li>
              <li className="mt-2 text-indigo-200 text-opacity-50">
                <p className="text-xs">© 2020 All Rights Reserved</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
