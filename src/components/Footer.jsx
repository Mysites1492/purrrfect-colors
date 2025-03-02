import { FaFacebook, FaInstagram, FaSnapchat, FaPinterestP, FaTwitter, FaYoutube, FaAmazon } from 'react-icons/fa';

function Footer () {
  return (
    <footer className="bg-gray-100 text-gray-800 py-16 text-center">
              <p className="text-lg text-gray-600">PurrrfectColors@gmail.com</p><br></br>
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://www.amazon.com/dp/B0DYGDSK8D" className="text-3xl hover:text-gray-600">
          <FaAmazon />
        </a>
        <a href="https://www.instagram.com/purrrfectcolors" className="text-3xl hover:text-gray-600">
          <FaInstagram />
        </a>
        {/* <a href="#" className="text-xl hover:text-gray-600">
          <FaSnapchat />
        </a> */}
        {/* <a href="#" className="text-xl hover:text-gray-600">
          <FaPinterestP />
        </a> */}
        <a href="https://x.com/PurrrfectColors" className="text-3xl hover:text-gray-600">
          <FaTwitter />
        </a>
        <a href="https://www.youtube.com/channel/UCCvS5lYt3dSO-xszrd1keZw" className="text-3xl hover:text-gray-600">
          <FaYoutube />
        </a>
      </div>
      <p className="text-lg text-gray-600">&copy;2025 Purrrfect Colors</p>
    </footer>
  );
};

export default Footer;
