import React from "react";

const Title = ({ children }) => {
  return (
    <div className="relative mb-8">
      <h3 className="font-display text-4xl font-bold text-white mb-4">
        {children}
      </h3>
      <div className="relative">
        <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
        <div className="h-1 w-12 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full mt-1 opacity-60"></div>
      </div>
    </div>
  )
}

export default Title;