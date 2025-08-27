import styles from "./style.module.css";
import { getFolders } from "../../data/methods.ts";
import { NavigationItem } from "./NavigationItem";
import { useMemo } from "react";

type Props = {
  isHidden: boolean;
  activeFolder: number | null;
  setActiveFolder: (value: number | null) => void;
};

export const Navigation = ({
  isHidden,
  activeFolder,
  setActiveFolder,
}: Props) => {
  const folders = useMemo(() => getFolders(), []);

  return (
    <div className={styles.wrapper}>
      {folders.map((item) => {
        if (!isHidden && item.isHidden) {
          return null;
        }

        return (
          <NavigationItem
            key={item.id}
            item={item}
            activeFolder={activeFolder}
            setActiveFolder={setActiveFolder}
          />
        );
      })}
    </div>
  );
};
