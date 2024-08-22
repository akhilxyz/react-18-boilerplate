import { FunctionComponent } from "react";
import TokenListWrapper from "./components/TokenListWrapper";
import HomeIndicator from "./components/HomeIndicator";
import StatusBar1 from "./components/StatusBar1";
import styles from "./MainScreen.module.css";
import { getLightestColor } from "@/utils/color";

interface MainScreenProps {
  backgroundColor: string;
  textColor: string;
  secondaryColor: string;
  primaryColor: string;
  firstFormValues :any
}

const MainScreen: FunctionComponent<MainScreenProps> = ({
  firstFormValues,
  backgroundColor,
  textColor,
  secondaryColor,
  primaryColor,
}) => {

  const lightBackgroundColor = getLightestColor(backgroundColor) ;

  return (
    <div className="Main_demo" style={{width : "20%"}}>
      <div className={styles.mainScreen} style={{backgroundColor}} >
        <div className={styles.buttons}>
          <div className={styles.send}>
            <div className={styles.buttonSend} style={{backgroundColor : primaryColor}}>
              <img
                className={styles.iconSend}
                loading="lazy"
                alt=""
                src="/icon-send.svg"
              />
            </div>
            <div className={styles.send1}>Send</div>
          </div>
          <div className={styles.send}>
            <div className={styles.buttonSend} style={{backgroundColor : primaryColor}}>
              <img
                className={styles.iconSend}
                loading="lazy"
                alt=""
                src="/icon-get.svg"
              />
            </div>
            <div className={styles.receive1}>Receive</div>
          </div>
          <div className={styles.send}>
            <div className={styles.buttonSend} style={{backgroundColor : primaryColor}}>
              <img
                className={styles.iconSend}
                loading="lazy"
                alt=""
                src="/icon-buy.svg"
              />
            </div>
            <div className={styles.buy1}>Buy</div>
          </div>
          <div className={styles.send}>
            <div className={styles.buttonSend} style={{backgroundColor : primaryColor}}>
              <img
                className={styles.iconSwap}
                loading="lazy"
                alt=""
                src="/icon-swap@2x.png"
              />
            </div>
            <div className={styles.swap1}>Swap</div>
          </div>
        </div>
        <div className={styles.balanceContainerParent}>
          <div className={styles.balanceContainer}>
            <a className={styles.totalBalance} >Total Balance</a>
          </div>
          <a className={styles.balanceValue} style={{color : textColor}}>$2,663.56</a>
        </div>
        <section className={styles.tokenListContainerParent} >
          <div className={styles.tokenListContainer} style={{backgroundColor : lightBackgroundColor  }}>
            <div className={styles.bg} />
            <TokenListWrapper 
             backgroundColor={backgroundColor}
             textColor={textColor}
             secondaryColor={secondaryColor}
             primaryColor={primaryColor}
            />
            <div className={styles.menu}>
              <div className={styles.menuWallet}>
                <div className={styles.menuIconsContainers}>
                  <img
                    className={styles.iconSend}
                    loading="lazy"
                    alt=""
                    src="/icon-wallet.svg"
                  />
                </div>
                <div className={styles.wallet}>Wallet</div>
              </div>
              <div className={styles.menuStaking}>
                <div className={styles.iconStackingWrapper}>
                  <img
                    className={styles.iconSend}
                    loading="lazy"
                    alt=""
                    src="/icon-stacking.svg"
                  />
                </div>
                <div className={styles.staking}>Staking</div>
              </div>
              <div className={styles.menuStaking}>
                <div className={styles.iconProfileWrapper}>
                  <img
                    className={styles.iconSend}
                    loading="lazy"
                    alt=""
                    src="/icon-profile.svg"
                  />
                </div>
                <div className={styles.profile}>Profile</div>
              </div>
              <div className={styles.menuHistory}>
                <img
                  className={styles.antDesignhistoryOutlinedIcon}
                  loading="lazy"
                  alt=""
                  src="/antdesignhistoryoutlined.svg"
                />
                <div className={styles.history}>History</div>
              </div>
            </div>
          </div>
          <div className={styles.tokensWrapper}>
            <div className={styles.tokens}>
              <div className={styles.nearToken}>
                <div className={styles.token}>
                  <img
                    className={styles.iconNear}
                    alt=""
                    src="/icon-near@2x.png"
                  />
                  <div className={styles.tokenNameContainersInstance}>
                    <div className={styles.near}>NEAR</div>
                    <div className={styles.price}>
                      <div className={styles.home}>$6.34</div>
                      <div className={styles.div}>
                        <img
                          className={styles.iconUp}
                          loading="lazy"
                          alt=""
                          src="/icon-up.svg"
                        />
                        <div className={styles.gallery}>2.5%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.amount}>
                  <div className={styles.amount1}>
                    <div className={styles.div1}>198.24</div>
                    <div className={styles.near}>NEAR</div>
                  </div>
                  <div className={styles.workImageGrid}>$1251.44</div>
                </div>
              </div>
              <div className={styles.fridge} />
              <div className={styles.nearToken}>
                <div className={styles.token1}>
                  <img
                    className={styles.iconOctopus}
                    alt=""
                    src="/icon-octopus.svg"
                  />
                  <div className={styles.octopusNetworkParent}>
                    <div
                      className={styles.octopusNetwork}
                    >{`Octopus Network `}</div>
                    <div className={styles.price1}>
                      <div className={styles.div2}>$0.71</div>
                      <div className={styles.div3}>
                        <img
                          className={styles.iconUp}
                          alt=""
                          src="/icon-up.svg"
                        />
                        <div className={styles.mobileTruckRepair}>3.87%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.amount2}>
                  <div className={styles.amount3}>
                    <div className={styles.fuelFiltersAir}>0.6317</div>
                    <div className={styles.oct}>OCT</div>
                  </div>
                  <div className={styles.airconditioner}>$0.71</div>
                </div>
              </div>
              <div className={styles.fridge} />
              <div className={styles.nearToken}>
                <div className={styles.token2}>
                  <img className={styles.iconDeip} alt="" src="/icon-deip.svg" />
                  <div className={styles.octopusNetworkParent}>
                    <div className={styles.deipToken1}>DEIP Token</div>
                    <div className={styles.price2}>
                      <div className={styles.div2}>$0.71</div>
                      <div className={styles.div5}>
                        <img
                          className={styles.iconUp}
                          alt=""
                          src="/icon-up-2.svg"
                        />
                        <div className={styles.mobileTruckRepair}>0.97%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.amount4}>
                  <div className={styles.amount3}>
                    <div className={styles.fuelFiltersAir}>555.94874</div>
                    <div className={styles.deip}>DEIP</div>
                  </div>
                  <div className={styles.div6}>$1.76</div>
                </div>
              </div>
              <div className={styles.fridge} />
              <div className={styles.nearToken}>
                <div className={styles.token3}>
                  <img className={styles.icon} alt="" src="/14803-1@2x.png" />
                  <div className={styles.octopusNetworkParent}>
                    <div className={styles.aurora}>Aurora</div>
                    <div className={styles.price2}>
                      <div className={styles.div7}>$3.79</div>
                      <div className={styles.div5}>
                        <img
                          className={styles.iconUp}
                          alt=""
                          src="/icon-up-2.svg"
                        />
                        <div className={styles.mobileTruckRepair}>0.32%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.amount6}>
                  <div className={styles.amount3}>
                    <div className={styles.div10}>300</div>
                    <div className={styles.aurora1}>Aurora</div>
                  </div>
                  <div className={styles.div11}>$1137</div>
                </div>
              </div>
              <div className={styles.fridge} />
              <div className={styles.nearToken}>
                <div className={styles.token4}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.tokenIconPlaceholderInstanc}
                      alt=""
                      src="/19682-1@2x.png"
                    />
                  </div>
                  <div className={styles.octopusNetworkParent}>
                    <div className={styles.usn}>USN</div>
                    <div className={styles.price4}>
                      <div className={styles.div2}>$1.33</div>
                      <div className={styles.div3}>
                        <img
                          className={styles.iconUp}
                          alt=""
                          src="/icon-up.svg"
                        />
                        <div className={styles.mobileTruckRepair}>38.76%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.amount8}>
                  <div className={styles.amount9}>
                    <div className={styles.fuelFiltersAir}>205</div>
                    <div className={styles.aurora1}>USN</div>
                  </div>
                  <div className={styles.div16}>$272.65</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={styles.home1}>
          <div className={styles.homeindicator}>
            <HomeIndicator />
          </div>
        </div>
        <StatusBar1 textColor={textColor} firstFormValues={firstFormValues}/>
      </div>
    </div>
  );
};

export default MainScreen;
