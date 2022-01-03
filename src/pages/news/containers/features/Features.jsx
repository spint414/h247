import React from "react";
import "./features.css";
import Card from "../../components/card/Card";
import MainNews from "../../components/main-news/MainNews";
import laptop from "../../../../assets/images/RectangleLaptop3.png";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Features() {
  return (
    <div className="news__features max__width">
      <h1>Tin tức</h1>
      <div className="news__features-content">
        <div className="news__features-tabs">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tin mới" key="1">
              <Card
                date="21/12"
                year="2021"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
              />
              <Card
                date="21/12"
                year="2021"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
              />
              <Card
                date="21/12"
                year="2021"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
              />
              <Card
                date="21/12"
                year="2021"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
              />
              <Card
                date="21/12"
                year="2021"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
              />
            </TabPane>
            <TabPane tab="Đọc nhiều" key="2">
              <Card
                date="19/12"
                year="2021"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
              />
              <Card
                date="20/12"
                year="2021"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
              />
              <Card
                date="21/12"
                year="2021"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
              />
              <Card
                date="20/12"
                year="2021"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
              />
              <Card
                date="18/12"
                year="2021"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
              />
            </TabPane>
          </Tabs>
        </div>
        <div className="news__features-container">
          <MainNews
            image={laptop}
            title="Lorem ipsum dolor sit amet, sit amet consectetur"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
          />
        </div>
      </div>
    </div>
  );
}

export default Features;
