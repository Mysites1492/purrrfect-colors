function Newsletter() {
  return (
      <div className="bg-violet-300/55 z-0 text-white py-10 px-5 flex flex-col md:flex-row items-center justify-center text-center md:text-left m-4 rounded-lg">
          
          
          {/* Image Section */}
          <div className="md:w-1/2  relative z-0 flex justify-center mt-6 md:mt-0">
              <img 
                  src="images/coloringpages.png" 
                  alt="Newsletter sign up for free coloring pages" 
                  className="w-48 md:w-64 object-contain drop-shadow-xl"
              />
          </div>
          {/* Text Section */}
          <div className="md:w-1/2">
              <h2 className="text-5xl font-bold mb-4 chewy">
                Get Free Coloring Pages!
              </h2>
              <p className="text-xl mb-6">
              Join our newsletter for fun animal riddles, exclusive freebies, and sneak peeks at new books! Sign up now and get 3 FREE printable coloring pages to enjoy at home!
              </p>
                  <a href="https://subscribepage.io/purrrfectcolors" target="_blank" rel="noopener noreferrer">
                  <button className="bg-white text-violet-900 font-semibold py-2 px-6 rounded-full hover:bg-purple-200 transition duration-300">
                   Subscribe
                  </button> </a>
          </div>
      </div>
  );
}

export default Newsletter;