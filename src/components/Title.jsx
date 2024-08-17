import React from "react";

const Title = ({ children }) => {
  return (
    <>
      <h3 className="text-3xl font-semibold text-white">
        {children}
      </h3>
      <div className="h-1 w-full bg-purple-500 mt-0" />
    </>
  )
}

export default Title;