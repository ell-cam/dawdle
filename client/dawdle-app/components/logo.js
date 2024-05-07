import React from "react";
import styled from "styled-components";
import ellipse5 from "../assets/logo/ellipse-5.svg";
import ellipse9 from "../assets/logo/ellipse-9.svg";
import ellipse8 from "../assets/logo/ellipse-8.svg";
import line5 from "../assets/logo/line-5.svg";
import line6 from "../assets/logo/line-6.svg";
import line7 from "../assets/logo/line-7.svg";

const LogoScreenWrapper = styled.div`
  height: 89px;
  width: 89px;
`;

const Overlap = styled.div`
  background-image: url(${ellipse5});
  background-size: 100% 100%;
  height: 167px;
  left: 5px;
  position: relative;
  top: 6px;
  width: 164px;
`;

const Clock = styled.div`
  height: 101px;
  left: 33px;
  position: relative;
  top: 33px;
  width: 106px;
`;

const OverlapGroup = styled.div`
  height: 98px;
  left: 2px;
  position: relative;
  width: 104px;
`;

const Ellipse = styled.img`
  height: 96px;
  left: 1px;
  position: absolute;
  top: 2px;
  width: 97px;
`;

const Img = styled.img`
  height: 96px;
  left: 0;
  position: absolute;
  top: 2px;
  width: 96px;
`;

const Group = styled.div`
  height: 44px;
  left: 16px;
  position: absolute;
  top: 24px;
  transform: rotate(46.52deg);
  width: 85px;
`;

const Div = styled.div`
  height: 58px;
  left: -1px;
  position: relative;
  width: 86px;
`;

const OverlapGroup2 = styled.div`
  height: 52px;
  left: 37px;
  position: absolute;
  top: 0;
  width: 49px;
`;

const Rectangle = styled.div`
  background-color: #ffffff;
  height: 47px;
  left: 25px;
  position: absolute;
  top: 14px;
  transform: rotate(-78.62deg);
  width: 1px;
`;

const Line = styled.img`
  height: 3px;
  left: -5px;
  position: absolute;
  top: 14px;
  transform: rotate(-46.52deg);
  width: 41px;
`;

const Line2 = styled.img`
  height: 28px;
  left: 8px;
  position: absolute;
  top: 21px;
  transform: rotate(-46.52deg);
  width: 19px;
`;

const Overlap2 = styled.div`
  height: 40px;
  left: 0;
  position: absolute;
  top: 19px;
  width: 41px;
`;

const Line3 = styled.img`
  height: 21px;
  left: 2px;
  position: absolute;
  top: 9px;
  transform: rotate(-46.52deg);
  width: 34px;
`;

const Ellipse2 = styled.div`
  background-color: #151515;
  border-radius: 2.93px;
  height: 6px;
  left: 35px;
  position: absolute;
  top: 11px;
  width: 6px;
`;

const LogoScreen = () => {
  return (
    <LogoScreenWrapper>
      <Overlap>
        <Clock>
          <OverlapGroup>
            <Ellipse src={ellipse9} alt="Ellipse" />
            <Img src={ellipse8} alt="Ellipse" />
            <Group>
              <Div>
                <OverlapGroup2>
                  <Rectangle />
                  <Line src={line5} alt="Line" />
                  <Line2 src={line6} alt="Line" />
                </OverlapGroup2>
                <Overlap2>
                  <Line3 src={line7} alt="Line" />
                  <Ellipse2 />
                </Overlap2>
              </Div>
            </Group>
          </OverlapGroup>
        </Clock>
      </Overlap>
    </LogoScreenWrapper>
  );
};

export default LogoScreen;