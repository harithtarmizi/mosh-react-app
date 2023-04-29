import { useState } from "react";
import styles from "./Like.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    // whatever status is, we gonna pass inverted value
    setStatus(!status);
    onClick();
  };

  if (status) {
    return (
      <AiFillHeart color="ff6b81" size={20} onClick={toggle} />
    );
  } else {
    return <AiOutlineHeart size={20} onClick={toggle} />;
  }
};

export default Like;
