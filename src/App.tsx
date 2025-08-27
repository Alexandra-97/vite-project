import { Header } from "./content/Header";
import { useState } from "react";
import { Navigation } from "./content/Navigation";
import { MainContent } from "./content/MainContent";
import styles from "./App.module.css";

function App() {
  const [isHidden, setIsHidden] = useState(true);
  const [activeFolder, setActiveFolder] = useState<number | null>(null);

  return (
    <>
      <Header isHidden={isHidden} setIsHidden={setIsHidden} />
      <div className={styles.contentWrapper}>
        <Navigation
          isHidden={isHidden}
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
        />
        {activeFolder ? (
          <MainContent activeFolder={activeFolder} isHidden={isHidden} />
        ) : null}
      </div>
    </>
  );
}

export default App;
