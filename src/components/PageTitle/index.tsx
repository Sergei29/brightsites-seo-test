import React from "react";

import classes from "./PageTitle.module.css";

type Props = {
  title: string;
  subTitle?: string;
  error: string | null;
};

const PageTitle = ({ title, subTitle, error }: Props): JSX.Element => {
  if (!!error) {
    return (
      <>
        <h1 className={classes.title}>
          We are sorry - an error has occurred. Please try again later
        </h1>
        <p className={classes.error}>{error}</p>
      </>
    );
  }

  return (
    <>
      <h1 className={classes.title}>{title}</h1>
      {subTitle ? <p className={classes.description}>{subTitle}</p> : null}
    </>
  );
};

export default PageTitle;
