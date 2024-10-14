import React, { useState, useContext } from "react";
import Section from "./Section";
import { LanguageContext } from "../../context";
import { translations } from "../../utils/translations";

const SimpleAccordion = () => {
  const { language } = useContext(LanguageContext);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {translations[language].faqs.map((section, index) => <Section key={index} expanded={expanded} handleChange={handleChange} section={section} />)}
    </>
  );
}

export default SimpleAccordion;