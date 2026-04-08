import React from 'react';

const ProfileImage = ({ src }) => {
  return (
    <div className="relative flex items-center justify-center py-20 group">
      <span className="text-primary text-[12rem] md:text-[18rem] font-mono leading-none opacity-40 group-hover:opacity-100 group-hover:-translate-x-6 transition-all duration-700 select-none">
        {'{'}
      </span>
      <div className="relative mx-2 md:mx-8 w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-60 transition duration-700"></div>
        <img
          src={src}
          className="relative w-full h-full object-cover rounded-2xl grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 border border-gray-200 dark:border-white/10 shadow-md"
          alt="ToledanaDev"
        />
      </div>
      <span className="text-accent text-[12rem] md:text-[18rem] font-mono leading-none opacity-40 group-hover:opacity-100 group-hover:translate-x-6 transition-all duration-700 select-none">
        {'}'}
      </span>
    </div>
  );
};

export default ProfileImage;