import styles from "./style.module.css";
import { FolderDescription } from "../../../data/Types.ts";

type Props = {
  item: Omit<FolderDescription, "files">;
  activeFolder: number | null;
  setActiveFolder: (value: number | null) => void;
};

export const NavigationItem = ({
  item,
  activeFolder,
  setActiveFolder,
}: Props) => {
  const isActive = activeFolder === item.id;
  const selectFolder = () => {
    if (isActive) {
      return;
    }

    setActiveFolder(item.id);
  };

  return (
    <div
      className={isActive ? styles.active : undefined}
      onClick={selectFolder}
    >
      {item.name}
    </div>
  );
};
