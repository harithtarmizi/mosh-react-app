// normal pass props
// interface Props {
//   text: string;
// }

import { ReactNode } from "react";

// passing children in case have long text
// chldren props mostly supported  to do it like this
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
