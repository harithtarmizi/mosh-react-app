import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button
      type="button"
      // example to use two classes in one className
      // recommended to naming the class to camelCase
      className={[styles.btn, styles[`btn-${color}`]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
