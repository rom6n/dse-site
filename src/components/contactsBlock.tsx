import CallIcon from "../assets/callIcon";
import MaxLogo from "../assets/maxLogo";
import TelegramLogo from "../assets/telegramLogo";

const ContactsBlock = () => {
  return (
    <div className="flex flex-col items-center w-screen overflow-hidden font-inter text-black/80">
      <div className="flex flex-col gap-0 bg-black/90 h-50 border-4 border-transparent rounded-3xl w-[95%] items-center justify-end cursor-pointer">
        <div className="flex w-full pl-3 pt-1 pb-1">
          <span className="text-sm font-medium text-white/50">
            Время работы с XX:XX до XX:XX
          </span>
        </div>
        <a
          className="flex w-full h-14 border-b border-white/80 items-center justify-start bg-sky-500/80 rounded-t-3xl transition-color duration-200 hover:bg-sky-400/80"
          href="https://t.me/Detailing96?text=Здравствуйте "
        >
          <div className="flex items-center justify-center ml-3 w-9 h-9 fill-white/90">
            <TelegramLogo />
          </div>
          <span className="absolute left-17 text-[22px] font-semibold text-white/90">
            Telegram
          </span>
          <div className="flex w-[74%] flex-row-reverse text-xl font-semibold text-white/90">
            {">"}
          </div>
        </a>
        <a className="flex w-full h-14 border-b border-white/80 items-center justify-start bg-purple-500 transition-color duration-200 hover:bg-purple-400/90">
          <div className="flex items-center justify-center ml-4 w-20 h-10 fill-white/90">
            <MaxLogo />
          </div>
          <span className="absolute left-17 text-[22px] font-semibold text-white/90">
            MAX
          </span>
          <div className="flex w-[60%] flex-row-reverse text-xl font-semibold text-white/90">
            {">"}
          </div>
        </a>
        <a className="flex w-full h-14 items-center justify-start bg-gray-500 rounded-b-3xl transition-color duration-200 hover:bg-gray-400/80">
          <div className="flex items-center justify-center ml-4 w-7 h-7 fill-white/90">
            <CallIcon />
          </div>
          <span className="absolute left-17 text-[20px] font-semibold text-white/90">
            +7 999 999-99-99
          </span>
        </a>
      </div>
    </div>
  );
};

export default ContactsBlock;
