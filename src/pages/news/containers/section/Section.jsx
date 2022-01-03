import React from "react";
import "./section.css";
import { shake, running, line, network } from "./imports";
import SubNews from "../../components/sub-news/SubNews";

function Section() {
  return (
    <div className="news__section max__width">
      <div className="news__section-container">
        <div className="news__section-container_group-container">
          <div className="news__section-container_group-container_columnA">
            <SubNews
              image={network}
              title="Lorem ipsum dolor sit amet, consectetur"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <SubNews
              image={running}
              title="Lorem ipsum dolor sit amet, consectetur"
              text="Cung cấp lộ trình theo dõi sức khỏe sau tiêm Vaccine Covid-19. Cùng bệnh nhân F0 theo sát và tự điều trị tại nhà"
            />
            <SubNews
              image={running}
              title="Lorem ipsum dolor sit amet, consectetur"
              text="Cung cấp lộ trình theo dõi sức khỏe sau tiêm Vaccine Covid-19. Cùng bệnh nhân F0 theo sát và tự điều trị tại nhà"
            />
            <SubNews
              image={running}
              title="Lorem ipsum dolor sit amet, consectetur"
              text="Cung cấp lộ trình theo dõi sức khỏe sau tiêm Vaccine Covid-19. Cùng bệnh nhân F0 theo sát và tự điều trị tại nhà"
            />
            <SubNews
              image={running}
              title="Lorem ipsum dolor sit amet, consectetur"
              text="Cung cấp lộ trình theo dõi sức khỏe sau tiêm Vaccine Covid-19. Cùng bệnh nhân F0 theo sát và tự điều trị tại nhà"
            />
          </div>
          <div className="info__topics-container_group-container_columnB">
            <SubNews
              image={shake}
              title="Lorem ipsum dolor sit amet, consectetur"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <SubNews
              image={line}
              title="Lorem ipsum dolor sit amet, consectetur"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <SubNews
              image={shake}
              title="Lorem ipsum dolor sit amet, consectetur"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <SubNews
              image={line}
              title="Lorem ipsum dolor sit amet, consectetur"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
            <SubNews
              image={line}
              title="Lorem ipsum dolor sit amet, consectetur"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
