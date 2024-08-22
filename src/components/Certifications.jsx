import React from "react";
import Title from "./Title";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ibmDataScience from "../img/ibm_data_science.jpg"
import bigData from "../img/big_data.jpg";
import oracleSQL from "../img/oracle_sql.png";
import oracleDataScience from "../img/oracle_data_science.png";
import azureFundamentals from "../img/azure_fundamentals.png";

const images = [
  {
    original: ibmDataScience
  },
  {
    original: bigData
  },
  {
    original: oracleSQL
  },
  {
    original: oracleDataScience
  },
  {
    original: azureFundamentals
  }
];

const Certifications = () => {

  return (
    <section className="bg-gray-800 border border-gray-950 rounded-lg mt-5 p-10 shadow-md shadow-gray-950" id="certifications">
      <Title>Certifications & Certificates</Title>
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