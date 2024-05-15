import React from "react";

export const BoilingState = ({ celsius }) => {
   return (
      <p>{celsius >= 100 ? "The Water Will Boil" : "The Water Will Not Boil"}</p>
   )
}