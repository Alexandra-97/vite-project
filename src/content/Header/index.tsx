import styles from "./style.module.css";
import { ChangeEvent } from "react";

type Props = { isHidden: boolean; setIsHidden: (value: boolean) => void };

export const Header = ({ isHidden, setIsHidden }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsHidden(e.target.checked);
  };

  return (
    <div className={styles.wrapper}>
      <input
        id={"is-hidden"}
        type="checkbox"
        checked={isHidden}
        onChange={handleChange}
      />
      <label htmlFor="is-hidden">Show hidden</label>
    </div>
  );
};
