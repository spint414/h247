import React from "react";
import "./topics.css";
import { laptop, shake, running, line, network } from "./imports";
import MainArticle from "../../components/main-article/main-article";
import SubArticle from "../../components/sub-article/sub-article";

function Topics() {
  return (
    <div className="info__topics">
      <div className="info__topics-container max__width">
        <MainArticle
          image={laptop}
          title="Lorem ipsum dolor sit amet, sit amet consectetur"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
        />
        <div className="info__topics-container_group">
          <div className="info__topics-container_group-container">
            <div className="info__topics-container_group-container_columnA">
              <SubArticle
                image={network}
                title="Lorem ipsum dolor sit amet, consectetur"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              />
              <SubArticle
                image={running}
                title="Lorem ipsum dolor sit amet, consectetur"
                text="Cung cấp lộ trình theo dõi sức khỏe sau tiêm Vaccine Covid-19. Cùng bệnh nhân F0 theo sát và tự điều trị tại nhà"
              />
              <SubArticle
                image={running}
                title="Lorem ipsum dolor sit amet, consectetur"
                text="Cung cấp lộ trình theo dõi sức khỏe sau tiêm Vaccine Covid-19. Cùng bệnh nhân F0 theo sát và tự điều trị tại nhà"
              />
              <SubArticle
                image={running}
                title="Lorem ipsum dolor sit amet, consectetur"
                text="Cung cấp lộ trình theo dõi sức khỏe sau tiêm Vaccine Covid-19. Cùng bệnh nhân F0 theo sát và tự điều trị tại nhà"
              />
              <SubArticle
                image={running}
                title="Lorem ipsum dolor sit amet, consectetur"
                text="Cung cấp lộ trình theo dõi sức khỏe sau tiêm Vaccine Covid-19. Cùng bệnh nhân F0 theo sát và tự điều trị tại nhà"
              />
            </div>
            <div className="info__topics-container_group-container_columnB">
              <SubArticle
                image={shake}
                title="Lorem ipsum dolor sit amet, consectetur"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              />
              <SubArticle
                image={line}
                title="Lorem ipsum dolor sit amet, consectetur"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              />
              <SubArticle
                image={shake}
                title="Lorem ipsum dolor sit amet, consectetur"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              />
              <SubArticle
                image={line}
                title="Lorem ipsum dolor sit amet, consectetur"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              />
              <SubArticle
                image={line}
                title="Lorem ipsum dolor sit amet, consectetur"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topics;
