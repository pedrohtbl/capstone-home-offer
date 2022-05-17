import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import Logo from "../../../assets/logo_2.svg";

import { Div } from "./style.js";

const CarouselText = () => {
	return (
		<Div>
			<img src={Logo} alt="logo" />

			<Swiper
				modules={[Pagination, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				autoplay={true}
				className="mySwiper"
			>
				<SwiperSlide className="swiper-slide">
					lorem ipsum dolor sit amet, consectetur adipiscing lorem
					ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur
					adipiscing lorem ipsum dolor sit amet lorem ipsum dolor sit
					amet
				</SwiperSlide>
				<SwiperSlide>
					lorem ipsum dolor sit amet, consectetur adipiscing lorem
					ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur
					adipiscing lorem ipsum dolor sit amet lorem ipsum dolor sit
					amet
				</SwiperSlide>
				<SwiperSlide>
					lorem ipsum dolor sit amet, consectetur adipiscing lorem
					ipsum dolor sit amet lorem ipsum dolor sit amet, consectetur
					adipiscing lorem ipsum dolor sit amet lorem ipsum dolor sit
					amet
				</SwiperSlide>
			</Swiper>
		</Div>
	);
};

export default CarouselText;
