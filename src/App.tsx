import Footer from "./layouts/Footer";

function App() {
  return (
    <div>
      <main className="bg-white px-10 dark:bg-gray-900 sm:px-5 md:px-20 lg:px-60 xl:px-80">
        <section>
          <div className="pt-10 py-2">
            <h2 className="font-title text-4xl py-1 dark:text-white">
              Guangyi Zhu
            </h2>
            <h4 className="font-title text-2xl py-1 dark:text-white">
              朱 光漪（Konami Shu）
            </h4>
            <p className="text-md py-2 leading-7 text-gray-800 dark:text-gray-200">
              I am a 4th-year Bachelor student at
              <a
                href="https://www.ocha.ac.jp/en/"
                className="text-teal-500 hover:underline"
              >
                {" "}
                Ochanomizu University
              </a>
              ,{" "}
              <a
                href="http://pllab.is.ocha.ac.jp/"
                className="text-teal-500 hover:underline"
              >
                Asai lab
              </a>
            </p>
          </div>
          <div className="py-2">
            <h3 className="font-title text-3xl py-1 dark:text-white">
              Contact
            </h3>
            <p className="text-md py-2 leading-7 text-gray-800 dark:text-gray-200">
              g2120519[at]is.ocha.ac.jp
            </p>
          </div>
          <div className="py-2">
            <h3 className="font-title text-3xl py-1 dark:text-white">
              Experience
            </h3>
            <h4 className="font-title text-2xl pt-2 dark:text-white">
              Internships
            </h4>
            <ol className="text-md p-2 space-y-3 text-gray-800 list-disc list-inside dark:text-gray-200">
              <li>December 2023 - March 2024: Engineer at Haudi Inc</li>
              <li>
                August - September 2024: Google STEP Internship
                <ul className="ps-5 text-md space-y-1 text-gray-800 list-disc list-inside dark:text-gray-200">
                  <li>
                    Extended the functionalities of Virtual Pipeline Handler of
                    <a
                      href="https://libcamera.org/"
                      className="hover:underline text-teal-500"
                    >
                      {" "}
                      libcamera{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>May - June 2022: Google STEP educational course</li>
            </ol>
            <h4 className="font-title text-2xl pt-2 dark:text-white">
              Teaching Assistant
            </h4>
            <ol className="text-md p-2 space-y-3 text-gray-800 list-disc list-inside dark:text-gray-200">
              <li>Spring Semester 2024: 関数型言語</li>
            </ol>
          </div>
          <div className="py-2">
            <h3 className="font-title text-3xl pt-2 dark:text-white">
              Activities
            </h3>
            <ol className="text-md p-2 space-y-3 text-gray-800 list-disc list-inside dark:text-gray-200">
              <li>
                Manager of
                <a
                  href="https://twitter.com/teara_ocha"
                  className="text-teal-500 hover:underline"
                >
                  {" "}
                  TEAra{" "}
                </a>
              </li>
              <li>
                Member of{" "}
                <a
                  href="https://twitter.com/otips2020"
                  className="text-teal-500 hover:underline"
                >
                  {" "}
                  O-tips
                </a>
                ,{" "}
                <a
                  href="https://ochadebate.wixsite.com/ocad"
                  className="text-teal-500 hover:underline"
                >
                  {" "}
                  OCAD
                </a>
                , and{" "}
                <a
                  href="http://raicho.starfree.jp/"
                  className="text-teal-500 hover:underline"
                >
                  {" "}
                  Raicho{" "}
                </a>
              </li>
              <li>
                August 2022 - June 2023: Exchange Study at NTNU in Gjøvik,
                Norway
              </li>
              <li>May - July 2022: GCI Summer 2022</li>
              <li>
                August 2021: Start-Tech
                <ul className="ps-5 text-md space-y-1 text-gray-800 list-disc list-inside dark:text-gray-200">
                  <li>
                    Hackathon for programming beginners. Created a video for
                    projection mapping on
                    <span className="italic"> Yukata</span>, imagining that the
                    pattern of the<span className="italic"> Yukata </span>
                    moves.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          <div className="py-2">
            <h3 className="font-title text-3xl py-1 dark:text-white">
              Hobbies
            </h3>
            <p className="text-md py-1 leading-7 text-gray-800 dark:text-gray-200">
              Except for programming, I love
            </p>
            <ol className="text-md p-2 space-y-1 text-gray-800 list-disc list-inside dark:text-gray-200">
              <li>Hiking</li>
              <li>Skiing</li>
              <li>
                Traveling
                <ul className="ps-5 text-md space-y-1 text-gray-800 list-disc list-inside dark:text-gray-200">
                  <li>Have been to:🇳🇴🇪🇸🇬🇷🇩🇪🇨🇿🇵🇱🇨🇳🇦🇺🇸🇬🇵🇭🇯🇵</li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
