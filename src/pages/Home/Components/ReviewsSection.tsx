import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import imgMcLaren750s from "../Assets/imgMcLaren750s.jpg";
import imgPorsche911 from "../Assets/imgPorsche911.jpg";
import imgUrusSE from "../Assets/imgUrusSE.jpg";
import imgBuggatiChiron from "../Assets/imgBuggatiChiron.jpg";
import imgMustang from "../Assets/imgMustang.jpg";


interface Review {
  id: number;
  name: string;
  content: string;
  carPurchased: string;
  img: any;
}

const UserReviews: Review[] = [
  {
    id: 1,
    name: "Aitom Donatoni",
    content: "Comprei um carro muito foda aqui alek!",
    carPurchased: "McLaren750s",
    img: imgMcLaren750s,
  },
  {
    id: 2,
    name: "Fernando Consolin",
    content: "Caramba! Que carro enorme!",
    carPurchased: "Lamborghini Urus SE",
    img: imgUrusSE,
  },
  {
    id: 3,
    name: "Hiago Nascimento",
    content: "Pai queria um monza, mas esse da pro gasto",
    carPurchased: "Porsche 911 GT3R",
    img: imgPorsche911,
  },
  {
    id: 4,
    name: "Ronald",
    content: "No finalzinho vem um negócinho!",
    carPurchased: "Buggati Chiron",
    img: imgBuggatiChiron,
  },
  {
    id: 5,
    name: "Francesco",
    content: "Olokinho meu!",
    carPurchased: "Mustang 1969",
    img:imgMustang ,
  },
];

export default function ReviewsSection() {
  return (
    <>
      <section className="bg-[#121212] p-6! min-h-100! overflow-hidden mt-20! ">
        <div className="max-w-6xl mx-auto ">
          <div className="text-center  mb-16!">
            <h3 className="text-[#C59958]!">
              A experiência de quem escolheu a excelência!
            </h3>
          </div>
          <div className="w-full mx-auto px-4 my-5! ">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={2.5}
              centeredSlides={true}
              loop={true}
              wrapperClass="flex justify-self-center place-items-center m-auto "
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              breakpoints={{
                1024: { slidesPerView: 2 },
              }}
              className="w-full pb-16"
            >
              {UserReviews.map((t) => (
                <SwiperSlide key={t.id}>
                  {({ isActive }) => (
                    <div className={` bg-zinc-900/50 border border-zinc-800 p-10 h-full  flex flex-col justify-between hover:border-zinc-600 transition-colors duration-500 mx-2  ${isActive ? "opacity-100 scale-100" : "opacity-30 scale-90"} `} >
                      <div>
                        <span className="text-5xl font-serif  text-zinc-700! block mb-6">
                          <img src={t.img} alt="logo" />
                        </span>
                        <p className="text-lg leading-relaxed text-zinc-300! italic mb-8 p-2">
                          {t.content}
                        </p>
                      </div>
                      <div className="border-t border-zinc-800! pt-6">
                        <h4 className="font-bold tracking-wider uppercase text-sm p-2 text-white">
                          {t.name}
                        </h4>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[10px] bg-zinc-800! px-2 py-1 text-zinc-400! font-mono uppercase">
                            {t.carPurchased}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
