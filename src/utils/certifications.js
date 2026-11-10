import primaveraDeepLearning from "../img/primavera_deep_learning.jpg";

// `url` points to the official verification page (e.g. Credly). When there is none,
// `image` links to a copy of the certificate instead.
export const certifications = [
  {
    id: 0,
    name: { en: "AWS Certified Solutions Architect – Associate", es: "AWS Certified Solutions Architect – Associate" },
    issuer: "Amazon Web Services",
    year: 2026,
    url: "https://www.credly.com/badges/84179b11-00e9-402d-a92c-046313fa4e6a",
  },
  {
    id: 1,
    name: { en: "AWS Certified Cloud Practitioner", es: "AWS Certified Cloud Practitioner" },
    issuer: "Amazon Web Services",
    year: 2025,
    url: "https://www.credly.com/badges/6af97ebe-6d26-411d-a3b3-a6cf2fe3f468",
  },
  {
    id: 2,
    name: { en: "Oracle Database SQL Certified Associate", es: "Oracle Database SQL Certified Associate" },
    issuer: "Oracle",
    year: 2023,
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A7768766BE6C29E256EB5E0596E8EE668D2C73B6118C1E4CFA59E6AE7B0591CD",
  },
  {
    id: 3,
    name: { en: "Spring School in Deep Learning", es: "Escuela de Primavera en Deep Learning" },
    issuer: "ICC · FCEN-UBA · CONICET",
    year: 2025,
    url: null,
    image: primaveraDeepLearning,
  },
];
