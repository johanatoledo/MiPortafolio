import React from "react";

/**
 * Image component for service images
 * @param {string} src - Image source path
 * @param {string} alt - Alt text for the image
 * @param {string} className - Optional Tailwind classes
 */
const ServiceImage = ({ src, alt, className = "w-20 h-20 object-contain mx-auto mb-4" }) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

export default ServiceImage;
