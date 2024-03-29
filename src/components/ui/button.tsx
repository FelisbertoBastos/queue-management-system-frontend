import { Colors } from "../../theme";

interface ButtonProps {
  color: "is-dark" | "is-light";
  higia?: boolean;
  text: string;
  icon?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export const Button = ({
  color,
  higia,
  text,
  icon,
  type = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`button ${color}`}
      style={{ backgroundColor: higia ? Colors.HIGIA_PRIMARY : "" }}
      type={type}
      onClick={onClick}
    >
      {icon && (
        <span className="icon">
          <i className={`fas ${icon}`}></i>
        </span>
      )}
      <span>{text}</span>
    </button>
  );
};
