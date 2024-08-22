import { FunctionComponent } from "react";
import styles_ from "./TokenListWrapper.module.css";

export type TokenListWrapperType = {
  className?: string;
};


interface MainScreenProps {
  backgroundColor: string;
  textColor: string;
  secondaryColor: string;
  primaryColor: string;
}

const TokenListWrapper: FunctionComponent<MainScreenProps> = ({
  backgroundColor,
  textColor,
  secondaryColor,
  primaryColor,
}) =>
// const TokenListWrapper: FunctionComponent<TokenListWrapperType> = ({
//   className = "",
// })
//  =>
   {
  return (
    <div className={[styles_.tokenListWrapper].join(" ")}>
      <div className={styles_.tabsParent}>
        <div className={styles_.tabs} style={{backgroundColor : secondaryColor}}>
          <div className={styles_.tabTokens} style={{backgroundColor : primaryColor}} >
            <div className={styles_.tokens}>Tokens</div>
          </div>
          <div className={styles_.tabNft}>
            <div className={styles_.nfts}>NFTs</div>
          </div>
        </div>
        <div className={styles_.tokens1}>
          <div className={styles_.nearToken}>
            <div className={styles_.token}>
              <img
                className={styles_.iconNear}
                loading="lazy"
                alt=""
                src="/icon-near@2x.png"
              />
              <div className={styles_.tokenNameContainers}>
                <div className={styles_.near} style={{color : textColor}}>NEAR</div>
                <div className={styles_.price}>
                  <div className={styles_.emergencyTruckRepair}>$6.34</div>
                  <div className={styles_.fuelFiltersAirFiltersBelts}>
                    <img
                      className={styles_.iconUp}
                      loading="lazy"
                      alt=""
                      src="/icon-up.svg"
                    />
                    <div className={styles_.dieselEngineMaintenance}>2.5%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles_.amount}>
              <div className={styles_.amount1}>
                <div className={styles_.centennialDriveKingston}  style={{color : textColor}}>198.24</div>
                <div className={styles_.near}  style={{color : textColor}}>NEAR</div>
              </div>
              <div className={styles_.amountUnits}>$1251.44</div>
            </div>
          </div>
          <div className={styles_.tokenItems} />
          <div className={styles_.nearToken}>
            <div className={styles_.token}>
              <img
                className={styles_.iconOctopus}
                loading="lazy"
                alt=""
                src="/icon-octopus.svg"
              />
              <div className={styles_.tokenNameContainers}>
                <div
                  className={styles_.octopusNetwork}
                >
                  <span  style={{color : textColor}}>{`Octopus Network `} </span>
                  </div>
                <div className={styles_.price1}>
                  <div className={styles_.div}>$0.71</div>
                  <div className={styles_.fuelFiltersAirFiltersBelts}>
                    <img
                      className={styles_.iconUp}
                      loading="lazy"
                      alt=""
                      src="/icon-up.svg"
                    />
                    <div className={styles_.div2}>3.87%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles_.amount2}>
              <div className={styles_.amount1}>
                <div className={styles_.div3}  style={{color : textColor}}>0.6317</div>
                <div className={styles_.nfts}  style={{color : textColor}}>OCT</div>
              </div>
              <div className={styles_.div4}>$0.71</div>
            </div>
          </div>
          <div className={styles_.tokenItems} />
          <div className={styles_.nearToken}>
            <div className={styles_.token}>
              <img
                className={styles_.iconDeip}
                loading="lazy"
                alt=""
                src="/icon-deip.svg"
              />
              <div className={styles_.tokenNameContainers}>
                <div className={styles_.deipToken1}  style={{color : textColor}}>DEIP Token</div>
                <div className={styles_.price1}>
                  <div className={styles_.div}>$0.71</div>
                  <div className={styles_.div6}>
                    <img
                      className={styles_.iconUp}
                      loading="lazy"
                      alt=""
                      src="/icon-up-2.svg"
                    />
                    <div className={styles_.div2}>0.97%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles_.amount4}>
              <div className={styles_.amount1}>
                <div className={styles_.div8}  style={{color : textColor}}>555.94874</div>
                <div className={styles_.deip} style={{color : textColor}}>DEIP</div>
              </div>
              <div className={styles_.div9}>$1.76</div>
            </div>
          </div>
          <div className={styles_.tokenItems} />
          <div className={styles_.nearToken}>
            <div className={styles_.token}>
              <img
                className={styles_.icon}
                loading="lazy"
                alt=""
                src="/14803-1@2x.png"
              />
              <div className={styles_.tokenNameContainers}>
                <div className={styles_.aurora}  style={{color : textColor}}>Aurora</div>
                <div className={styles_.price1}>
                  <div className={styles_.div10}>$3.79</div>
                  <div className={styles_.div6}>
                    <img
                      className={styles_.iconUp}
                      loading="lazy"
                      alt=""
                      src="/icon-up-2.svg"
                    />
                    <div className={styles_.div2}>0.32%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles_.amount6}>
              <div className={styles_.amount7}>
                <div className={styles_.div13} style={{color : textColor}}>300</div>
                <div className={styles_.aurora} style={{color : textColor}}>Aurora</div>
              </div>
              <div className={styles_.aboutUsImage}>$1137</div>
            </div>
          </div>
          <div className={styles_.tokenItems} />
          <div className={styles_.nearToken}>
            <div className={styles_.token}>
              <div className={styles_.atWestbrookTruckRepairInKParent}>
                <div className={styles_.atWestbrookTruckRepairInK} />
                <img
                  className={styles_.tokenIconPlaceholder}
                  loading="lazy"
                  alt=""
                  src="/19682-1@2x.png"
                />
              </div>
              <div className={styles_.tokenNameContainers}>
                <div className={styles_.nfts} style={{color : textColor}}>USN</div>
                <div className={styles_.price}>
                  <div className={styles_.div14} >$1.33</div>
                  <div className={styles_.fuelFiltersAirFiltersBelts}>
                    <img
                      className={styles_.iconUp}
                      loading="lazy"
                      alt=""
                      src="/icon-up.svg"
                    />
                    <div className={styles_.div16}>38.76%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles_.amount6}>
              <div className={styles_.amount9}>
                <div className={styles_.div17} style={{color : textColor}}>205</div>
                <div className={styles_.nfts} style={{color : textColor}}>USN</div>
              </div>
              <div className={styles_.div18}>$272.65</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenListWrapper;
