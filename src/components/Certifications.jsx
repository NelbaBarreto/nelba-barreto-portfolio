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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl mt-8 p-8 border border-slate-700/50 shadow-2xl" id="certifications">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-primary-500/5"></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-accent-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <Title>{translations[language].certifications_and_certificates}</Title>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          {language === 'es' 
            ? "Certificaciones profesionales que validan mi experiencia y compromiso con el aprendizaje continuo en tecnología."
            : "Professional certifications that validate my experience and commitment to continuous learning in technology."
          }
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <ImageGallery
              items={images}
              lazyLoad={true}
              autoPlay={true}
              showThumbnails={true}
              showFullscreenButton={true}
              showPlayButton={true}
              showNav={true}
              slideInterval={4000}
              slideDuration={500}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications;