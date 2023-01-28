import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Alejo Ufano 2023. All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 flex-col">
          <h4 className="font-bold">Links</h4>
          <a href='https://alejo-ufano-portfolio.vercel.app/' rel='noopener noreferrer' target='_blank' className="flex my-5">Personal Portfolio</a>
          <a href='https://www.linkedin.com/in/alejo-ufano/' rel='noopener noreferrer' target='_blank' className="flex my-5">LinkedIn</a>
          <a href='https://github.com/AlejoUfano' rel='noopener noreferrer' target='_blank' className="flex">Github</a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Me</h4>
          <a href="mailto:ufanoalejo@gmail.com" className="flex my-5">E-Mail to Alejo Ufano</a>
          <a href='https://wa.me/542914497480' rel='noopener noreferrer' target='_blank' className="flex">(+54)2914497480</a>   
        </div>
      </div>
    </footer>
  );
};

export default Footer;
