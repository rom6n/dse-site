import auto from "../assets/auto.jpg";

function MainPage() {
  return (
    <div className="flex flex-col pt-0 items-center w-screen font-inter text-black/80">
      <div className="h-80 w-full">
        <img
          src={auto}
          className="object-cover w-full h-full rounded-b-[30px]"
        />
        <div className="absolute w-full h-80 bg-transparent backdrop-blur-[0px] top-0 rounded-b-[30px]" />
        <div className="absolute top-53 pb-4 pt-4 rounded-[30px] flex items-start pl-5 w-full flex-col text-white/90 text-4xl justify-center z-10">
          <span className="text-start font-bold">Детейлинг</span>
          <span className="text-start font-medium text-3xl">
            для Вашего авто
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-6">
        <div className="flex gap-1 w-[70%] text-start">
          <span className="text-[11px] font-normal">Уже посмотрели наши</span>
          <span className="text-[11px] font-semibold">работы?</span>
        </div>
        <button
          className="w-[80%] h-15 transition-all duration-200 bg-black/90 rounded-2xl hover:opacity-95 cursor-pointer"
          style={{ boxShadow: "0 3px 15px #000000" }}
        >
          <span className="text-white text-xl">Записаться</span>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full mt-10">
        <div className="w-[95%] text-start bg-black/90 p-3 border-b border-white/80 rounded-t-3xl">
          <span className="font-bold text-4xl text-white/90">DSE — это</span>
        </div>
        <div className="flex flex-col justify-around w-[95%] rounded-b-3xl pb-2 bg-black/90 text-white/90 text-start">
          <div className="flex p-3 pt-2 flex-col border-b border-white/50">
            <span className="text-xl font-medium">Качество</span>
            <span className="text-[10px] opacity-60">
              Мы работаем непокладая рук с 2009 года
            </span>
          </div>
          <div className="flex p-3 pt-1 flex-col border-b border-white/50">
            <span className="text-xl font-medium">Скорость</span>
            <span className="text-[10px] opacity-60">
              Уже скоро ваш авто будет как-новый
            </span>
          </div>
          <div className="flex p-3 pt-1 flex-col">
            <span className="text-xl font-medium">Доступность</span>
            <span className="text-[10px] opacity-60">
              Нет космических цен
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
