import vppmfd from "../../../assets/VppMfdLogo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        src={vppmfd}
        alt="VPP MFD Logo"
        className="h-11 w-auto drop-shadow-[0_10px_26px_rgba(45,212,191,0.18)] transition duration-300 hover:brightness-110"
      />
    </div>
  );
};

export default Logo;
