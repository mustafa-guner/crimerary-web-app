import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "../../pages/App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./ClientsSlider.css";

//Clients
import CIA from "../../images/cia.png";
import FBI from "../../images/FBI.png";
import NASA from "../../images/NASA.png";
import KBG from "../../images/KGB.png";
import INTERPOL from "../../images/interpol.png";
import NATIONAL from "../../images/national_security_agenty.png";
import MIT from "../../images/MIT.png";
import HACKERS from "../../images/turkhackteam.png";

const SwipperSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={6}
      pagination={{ clickable: true }}
    >
      <SwiperSlide style={{ width: "166px", marginRight: "120px" }}>
        {" "}
        <img
          src={HACKERS}
          className="img-fluid"
          alt="fbi"
          style={{ width: "166px", marginRight: "120px" }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: "166px", marginRight: "120px" }}>
        {" "}
        <img
          src={INTERPOL}
          className="img-fluid"
          alt="fbi"
          style={{ width: "166px", marginRight: "120px" }}
        />
      </SwiperSlide>

      <SwiperSlide style={{ width: "166px", marginRight: "120px" }}>
        {" "}
        <img
          src={FBI}
          className="img-fluid"
          alt="fbi"
          style={{ width: "166px", marginRight: "120px" }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: "166px", marginRight: "120px" }}>
        {" "}
        <img
          src={CIA}
          className="img-fluid"
          alt="fbi"
          style={{ width: "166px", marginRight: "120px" }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: "166px", marginRight: "120px" }}>
        {" "}
        <img
          src={NATIONAL}
          className="img-fluid"
          alt="fbi"
          style={{ width: "166px", marginRight: "120px" }}
        />
      </SwiperSlide>
      <SwiperSlide style={{ width: "166px", marginRight: "120px" }}>
        {" "}
        <img
          src={MIT}
          className="img-fluid"
          alt="fbi"
          style={{ width: "166px", marginRight: "120px" }}
        />
      </SwiperSlide>

      <SwiperSlide style={{ width: "166px", marginRight: "120px" }}>
        {" "}
        <img src={NASA} className="img-fluid" alt="fbi" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwipperSlider;
