import React from "react";

type Props = {
  isTrue: boolean;
  children: React.ReactNode;
};

const RenderWhen = ({ isTrue, children }: Props): JSX.Element | null => {
  if (!isTrue) return null;
  return <>{children}</>;
};

export default RenderWhen;
