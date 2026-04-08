import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-1">
      <div className="container mx-auto px-6 text-center">
        <div>
          <a
            href="https://www.linkedin.com/in/sandra-lemos-b937901aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-black hover:text-lufga-salmon transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <div>
          <p className="font-lufga text-lg text-black">
            © Sandra Lemos {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
