import React, { useContext } from "react";
import Title from "./Title";
import ImageGallery from "react-image-gallery";
import { images } from "../utils/index";
import { LanguageContext } from "../context";
import { translations } from "../utils/translations";
import "react-image-gallery/styles/css/image-gallery.css";

const Certifications = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="bg-gray-800 border border-gray-950 rounded-lg mt-5 p-10 shadow-md shadow-gray-950" id="certifications">
      <Title>{translations[language].certifications_and_certificates}</Title>
      <div
        className="max-w-xl rounded overflow-hidden w-50 mx-auto my-10"
      >
        <ImageGallery
          items={images}
          lazyLoad={true}
          autoPlay={true}
        />
      </div>
    </section>
  )
}

export default Certifications;