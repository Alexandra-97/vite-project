import styles from "./style.module.css";
import { getFilesInFolder } from "../../data/methods.ts";
import { useEffect, useMemo, useRef, useState } from "react";
import { FileItem } from "./FileItem";

type Props = { activeFolder: number | null; isHidden: boolean };

export const MainContent = ({ activeFolder, isHidden }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const files = useMemo(
    () => (activeFolder ? getFilesInFolder(activeFolder) : []),
    [activeFolder],
  );
  const slicedFiles = useMemo(
    () => files.slice((page - 1) * count, (page - 1) * count + count),
    [count, files, page],
  );
  const pages = useMemo(
    () => Math.ceil(files.length / count),
    [count, files.length],
  );

  useEffect(() => {
    const listener = () => {
      const containerWidth = ref.current?.clientWidth;
      if (!containerWidth) {
        return;
      }
      setCount(Math.floor(containerWidth / (200 + 24)));
    };
    listener();
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [count, files]);

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.cards}>
        {slicedFiles.map((item) => {
          if (!isHidden && item.isHidden) {
            return null;
          }

          return <FileItem key={item.id} item={item} />;
        })}
      </div>
      {!!count && (
        <div className={styles.pagination}>
          {new Array(pages).fill(1).map((_, index) => (
            <div
              key={index}
              className={index + 1 === page ? styles.activePage : undefined}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
