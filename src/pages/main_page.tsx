import auto from "../assets/auto.jpg";
import { motion } from "framer-motion";

function MainPage() {
  const whatWeDo = [
    "Полируем авто",
    "Убираем вмятины и сколы",
    "Проводим шумоизоляцию",
    "Что то добавить...",
  ];
  return (
    <div className="flex flex-col pt-0 items-center w-screen overflow-hidden font-inter text-black/80">
      <div className="h-80 w-full">
        <img
          src={auto}
          className="object-cover w-full h-full rounded-b-[30px]"
          id="top"
        />
        <div className="absolute w-full h-80 bg-transparent backdrop-blur-[0px] top-0 rounded-b-[30px]" />
        <div className="absolute top-53 pb-4 pt-4 rounded-[30px] flex items-start pl-5 w-full flex-col text-white/90 text-4xl justify-center z-10">
          <span className="text-start font-bold">Детейлинг</span>
          <span className="text-start font-medium text-3xl">
            для Вашего авто
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-8">
        <a
          className="flex items-center justify-center w-[80%] h-15 transition-all duration-200 bg-black/90 rounded-2xl hover:opacity-95 cursor-pointer"
          style={{ boxShadow: "0 3px 15px #000000" }}
          href="/request"
        >
          <span className="text-white text-xl">Записаться</span>
        </a>
        <a
          className="flex gap-1 h-13 transition-opacity duration-300 items-center cursor-pointer hover:opacity-90"
          href="https://vk.com/albums-52708736"
          target="_blank"
        >
          <span className="text-md font-semibold">Посмотреть наши работы</span>
        </a>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center justify-center w-full mt-8"
      >
        <div className="w-[95%] text-start bg-black/90 p-3 border-b border-white/50 rounded-t-3xl">
          <span className="font-bold text-4xl text-white/90">DSE — это</span>
        </div>
        <div className="flex flex-col justify-around w-[95%] rounded-b-3xl bg-black/90 text-white/90 text-start">
          <div className="flex p-3 pt-1.5 flex-col border-b border-white/50 transition-colors duration-200 hover:bg-white/15">
            <span className="text-xl font-medium">Качество</span>
            <span className="text-[10px] opacity-60">
              Мы работаем непокладая рук с 2009 года
            </span>
          </div>
          <div className="flex p-3 pt-1.5 flex-col border-b border-white/50 transition-colors duration-200 hover:bg-white/15">
            <span className="text-xl font-medium">Скорость</span>
            <span className="text-[10px] opacity-60">
              Уже скоро ваш авто будет как-новый
            </span>
          </div>
          <div className="flex p-3 pt-1.5 flex-col transition-colors duration-200 hover:bg-white/15">
            <span className="text-xl font-medium">Доступность</span>
            <span className="text-[10px] opacity-60">Нет космических цен</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center justify-center w-full pb-2 mt-10"
      >
        <div className="flex w-full">
          <span className="ml-5 text-4xl font-bold text-black/90">
            Что мы умеем?
          </span>
        </div>
      </motion.div>
      {whatWeDo.map((value) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex w-full items-center justify-start mt-1.5 transition-transform duration-200 ease-out hover:scale-103"
        >
          <div className="ml-3 p-3.5 pt-1 pb-1 bg-black/90 rounded-full">
            <span className="text-xl font-semibold text-white/90">{value}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default MainPage;
