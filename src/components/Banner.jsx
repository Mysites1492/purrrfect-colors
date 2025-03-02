function Banner() {
    return (
        <div className="bg-violet-300/55 z-0 text-white py-20 px-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left m-4 rounded-lg">
            {/* Text Section */}
            <div className="md:w-1/2">
                <h2 className="text-5xl font-bold mb-4 chewy">
                    Tommy and the Lost Ring
                </h2>
                <p className="text-xl mb-6">
                    Now available on Amazon!
                </p>
                    <a href="https://www.amazon.com/dp/B0DYGDSK8D" target="_blank" rel="noopener noreferrer">
                    <button className="bg-white text-violet-900 font-semibold py-2 px-6 rounded-full hover:bg-purple-200 transition duration-300">
                     BUY NOW
                    </button> </a>
            </div>
            
            {/* Image Section */}
            <div className="md:w-1/2  relative z-0 flex justify-center mt-6 md:mt-0">
                <img 
                    src="images/lost_ring_cover.png" 
                    alt="Tommy and the Lost Ring Cover" 
                    className="w-48 md:w-64 object-contain drop-shadow-xl"
                />
            </div>
        </div>
    );
}

export default Banner;