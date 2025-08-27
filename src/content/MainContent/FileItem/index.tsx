import styles from "./style.module.css";
import { FileDescription, FileType } from "../../../data/Types.ts";

type Props = { item: FileDescription };

export const FileItem = ({ item }: Props) => {
  const isImage = item.type === FileType.Image;

  return (
    <div className={styles.card}>
      <div>Name: {item.name}</div>
      <div>
        {isImage
          ? `Quality: ${item.quality}%`
          : `Duration: ${item.durationSeconds}s`}
      </div>
    </div>
  );
};
