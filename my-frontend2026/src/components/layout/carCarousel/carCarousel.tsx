import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import carCardOne from '../../../assets/images/carCardOne.png'
import carCardTwo from '../../../assets/images/carCardTwo.png'
import carCardThree from '../../../assets/images/carCardThree.png'
import carCardFour from '../../../assets/images/carCardFour.png'


const cars = [
  { name: 'Ferrari', img: carCardOne, slogan: "YOU CAN'T HIDE WHO YOU ARE" },
  { name: 'REVUELTO', img: carCardTwo, slogan: "FROM NOW ON" },
  { name: 'SF90 Stradale', img: carCardThree, slogan: "SEILÁ FODASE" },
  { name: 'Huayra Roadster ', img: carCardFour, slogan: "CARRO FODA" },
];

export default function CarCarousel() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-10">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3} 
        centeredSlides={true}
        loop={true}
        wrapperClass="flex items-center m-auto"
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        className="mySwiper"
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div className={`flex flex-col items-center transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-30 scale-90'}`}>
                {/* Logo/Nome do Modelo */}
                <h2 className="text-4xl font-black italic tracking-tighter mb-4">{car.name}</h2>
                
                {/* Slogan */}
                <h3 className="text-6xl font-extrabold uppercase text-gray-800 mb-8 text-center max-w-2xl">
                  {car.slogan}
                </h3>

                {/* Imagem do Carro */}
                <img src={car.img} alt={car.name} className="w-full max-w-4xl object-contain" />

                {/* Botões de Ação (Abaixo do Carro) */}
                <div className={`flex gap-4 mt-10 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="bg-[#8b7300] text-white px-8 py-3 font-bold uppercase text-xs flex items-center gap-2 hover:bg-black transition-all">
                    Explore the model <span>→</span>
                  </button>
                  <button className="border border-black px-8 py-3 font-bold uppercase text-xs flex items-center gap-2 hover:bg-black hover:text-white transition-all">
                    Download Brochure <span>↓</span>
                  </button>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botões de Navegação Customizados (Laterais) */}
      <button className="button-prev absolute left-10 top-1/2 -translate-y-1/2 z-10 border border-gray-400 p-4 rounded-full hover:bg-black hover:text-white transition-all">
        ←
      </button>
      <button className="button-next absolute right-10 top-1/2 -translate-y-1/2 z-10 border border-gray-400 p-4 rounded-full hover:bg-black hover:text-white transition-all">
        →
      </button>
    </div>
  );
}

