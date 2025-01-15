import React from "react";
import css from "./circular-loader.module.css";

export const CircularLoader = () => {
  return (
    <div className={css.root} role="status">
      <span className={css.loader}>Loading...</span>
    </div>
  );
};

export const CircularLoaderFullPage = () => {
  return (
    <div className={css.fullPage}>
      <CircularLoader />
    </div>
  );
};

export default CircularLoader;
