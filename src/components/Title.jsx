import React from "react";

const Title = ({ children }) => {
  return (
    <>
      <h3 className="title is-3 text-retro-100 mb-1">
        {children}
      </h3>
      <div className="h-1 w-full bg-retro-150 mt-0" />
    </>
  )
}

export default Title;