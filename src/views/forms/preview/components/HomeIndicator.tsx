import { FunctionComponent } from "react";
import styles from "./HomeIndicator.module.css";

export type HomeIndicatorType = {
  className?: string;
};

const HomeIndicator: FunctionComponent<HomeIndicatorType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.homeindicator, className].join(" ")}>
      <div className={styles.homeIndicator} />
    </footer>
  );
};

export default HomeIndicator;
