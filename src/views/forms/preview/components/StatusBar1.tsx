import { FunctionComponent } from "react";
import styles from "./StatusBar1.module.css";

export type StatusBar1Type = {
  className?: string;
  textColor : string; 
  firstFormValues :any
};

const StatusBar1: FunctionComponent<StatusBar1Type> = ({ className = "", textColor  , firstFormValues}) => {
  return (
    <div className={[styles.statusBar, className].join(" ")}>
      <header className={styles.statusBarlight}>
        <img className={styles.fill17Icon} alt="" src="/fill-17.svg" />
        <a className={styles.a}>9:41</a>
        <div className={styles.statusBarIcons}>
          <div className={styles.statusBarIconsContainer}>
            <img
              className={styles.iconsnetworkstatusBar}
              loading="lazy"
              alt=""
              src="/iconsnetworkstatus-bar.svg"
            />
            <img
              className={styles.iconswifistatusBar}
              loading="lazy"
              alt=""
              src="/iconswifistatus-bar.svg"
            />
            <img
              className={styles.iconsbuttarystatusBar}
              loading="lazy"
              alt=""
              src="/iconsbuttarystatus-bar@2x.png"
            />
          </div>
        </div>
      </header>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.frameParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/group-24.svg"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-25.svg"
            />
          </div>
        </div>
        <h2 className={styles.wallet} style={{color : textColor}}>
          {firstFormValues?.walletname ??  "Wallet"}
          </h2>
        <div className={styles.scanButton}>
          <img
            className={styles.iconScan}
            loading="lazy"
            alt=""
            src="/icon-scan.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default StatusBar1;
