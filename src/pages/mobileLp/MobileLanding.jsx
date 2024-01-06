import { Features, Download, SectionWrapper, Line } from "../../components/landingPage";
import assets from "../../assets";
import Button from "../../components/landingPage/Button";
import styles from "../../styles/Global";
const MobileLanding = () => {
  return (
    <div className="space-around">
      <div>

        <SectionWrapper
          title="You own store of Nifty NFTs."
          description="Buy, store, collect NFTs"
          showBtn
          mockupImg={assets.homeHero}
          banner="banner"
        >

        </SectionWrapper>


        <SectionWrapper
          title="Smart User Interface Marketplace "
          description="Experience a butter UI of"
          mockupImg={assets.homeCards}
          reverse
        />
        <Line />
        <Features />
        <Line />
        <SectionWrapper
          title="You own store of Nifty NFTs. "
          description="Buy,store,collect NFTs"
          mockupImg={assets.feature}
          banner="banner"

        />

        <SectionWrapper
          title="Smart User Interface Marketplace "
          description="Show case the store."
          mockupImg={assets.mockup}
          reverse
        />

        <Download />
      </div>
      <div className="px-4 py-2 justify-center items-center bg-gray-900 flex-col banner04">
        <p
          className={`${styles.pText}
    ${styles.whiteText}
    `}
        >
          Made with Love by <span className="bold">JavaScript Mastery</span>
        </p>
      </div>
    </div>
  );
};

export default MobileLanding;
