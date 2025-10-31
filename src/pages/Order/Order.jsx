import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderImg from "../../assets/shop/banner2.jpg";
import CoverSection from "../shared/CoverSection";
import { useState } from 'react';
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <CoverSection
        bgImg={orderImg}
        title="OUR SHOP"
        subTitle="Would you like to try a dish?"
      />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
