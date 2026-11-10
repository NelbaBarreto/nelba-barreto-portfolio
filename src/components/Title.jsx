import React from "react";

const Title = ({ children }) => {
  return (
    <div className="relative mb-8">
      <h3 className="font-display text-4xl font-bold text-white mb-4">
        {children}
      </h3>
      <div className="relative">
        <div className="h-1 w-16 bg-primary-500 rounded-full"></div>
      </div>
    </div>
  )
}

export default Title;