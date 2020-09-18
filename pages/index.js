import Layout from '../layouts/default';
import { motion } from 'framer-motion';
import { title, slogan, left, btn, content } from '../data/animations';
import items from '../data/items';
function IndexPage() {
  return (
    <Layout>
      <div className="px-4 py-4 max-w-4xl mx-auto mt-20 px-2">
        <div className="text-center md:text-left md:flex items-center">
          <div className="md:mr-12 md:w-1/2 text-white">
            <motion.h1
              initial="initial"
              animate="enter"
              transition={{ duration: 0.5 }}
              variants={title}
              className="text-5xl leading-none md:leading-tight font-bold"
            >
              Music statistics on demand.
            </motion.h1>
            <div className="text-white mt-12">
              <motion.div
                initial="initial"
                animate="enter"
                transition={{ duration: 0.5 }}
                variants={slogan}
              >
                What if you could view your music statistics
                <br className="hidden md:block" />
                anywhere, at any time?
                <div className="pt-6">
                  Introducing TuneTrack, the first application that
                  <br className="hidden md:block" />
                  enables you to do so for multiple music services.
                </div>
              </motion.div>
              <motion.div
                initial="initial"
                animate="enter"
                transition={{ duration: 0.5 }}
                variants={btn}
                className="my-6"
              >
                <a
                  href="https://apps.apple.com/app/id1525634753"
                  className="my-12 inline-block items-center text-md px-10 py-5 leading-none rounded-md  mt-8 bg-indigo-700 hover:bg-indigo-600"
                >
                  <i className="fab fa-apple mr-3"></i> Get on App Store
                </a>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial="initial"
            animate="enter"
            transition={{ duration: 0.5 }}
            variants={left}
            className="my-6"
            className="ml-auto text-center"
          >
            <img
              src="/homeImage.png"
              alt="Screenshot"
              className="h-164 mx-auto "
            />
          </motion.div>
        </div>
        <motion.div
          initial="initial"
          animate="enter"
          transition={{ duration: 0.5 }}
          variants={content}
        >
          {items.map(
            ({ title, info, infoSpaced, image, reverse, reversed }) => {
              if (reversed == true) {
                return (
                  <div
                    className={`md:flex my-12 space-between flex-row-reverse items-center`}
                  >
                    <div className="md:ml-12 text-center md:text-left md:w-1/2">
                      <h2 className="text-2xl leading-none md:leading-tight text-white font-semibold text-center md:text-left">
                        {title}
                      </h2>
                      <div className="text-white text-center md:text-left text-base mt-12">
                        {info}
                        <div className="pt-6">{infoSpaced}</div>
                      </div>
                    </div>
                    <div className="mr-auto  text-left">
                      <img
                        src={image + `.png`}
                        alt="Screenshot"
                        className="h-164 mx-auto"
                      />
                    </div>
                  </div>
                );
              } else if (reversed == false) {
                return (
                  <div className={`md:flex my-12 space-between items-center`}>
                    <div className="md:ml-12 text-center md:text-left md:w-1/2">
                      <h2 className="text-2xl leading-none md:leading-tight text-white font-semibold text-center md:text-left">
                        {title}
                      </h2>
                      <div className="text-white text-center md:text-left text-base mt-12">
                        {info}
                        <div className="pt-6">{infoSpaced}</div>
                      </div>
                    </div>
                    <div className="ml-auto  text-left">
                      <img
                        src={image + `.png`}
                        alt="Screenshot"
                        className="h-164 mx-auto"
                      />
                    </div>
                  </div>
                );
              }
            }
          )}
        </motion.div>
      </div>
      <div className="px-4 py-12 mt-12 bg-indigo-700 bg-opacity-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-center leading-none md:leading-tight text-white font-semibold text-center ">
            What are you waiting for?
          </h2>
          <div className="text-white text-center text-base mt-12">
            Download TuneTrack today and learn more
            <br className="hidden md:block" />
            about your music habits than you ever have before
          </div>
          <a
            href="https://apps.apple.com/app/id1525634753"
            className="my-12 inline-block text-white items-center text-md px-10 py-5 leading-none rounded-md  mt-8 bg-indigo-700 hover:bg-indigo-600"
          >
            <i className="fab fa-apple mr-3"></i> Get on App Store
          </a>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
