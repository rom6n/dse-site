const BackButton = () => {
  return (
    <a
      className="fixed flex items-center justify-center text-3xl text-white/90 font-inter bottom-5 right-5 items-cente w-16 h-16 backdrop-blur-sm rounded-full bg-black/60 z-50"
      href="#"
      style={{ boxShadow: "0 0 15px #0000009a" }}
    >
      ↑
    </a>
  );
};

export default BackButton;
