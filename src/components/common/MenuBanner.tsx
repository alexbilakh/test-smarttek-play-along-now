import { vhToPx, responsiveDimension } from "../..//utils/helpers";
import styled, { keyframes } from "styled-components";

interface MenuBannerProps {
  text?: string;
  textColor?: string;
  color?: string;
  backgroundColor?: string;
  bannerReference?: any;
  bannerId?: string | number;
  icon?: any;
  iconBackgroundColor?: string;
  iconBorderColor?: string;
  iconMaskColor?: string;
  sizeInPct?: string | number;
  sizeContain?: string | Number;
  iconId?: string | number;
}

const MenuBanner = (props: MenuBannerProps) => {
  return (
    <DropDownBannerContainer>
      <BannerText text={props.text} color={props.textColor} />
      <Banner
        backgroundColor={props.backgroundColor}
        bannerReference={props.bannerReference}
        innerRef={props.bannerId}
      >
        <Icon
          src={props.icon}
          backgroundColor={props.iconBackgroundColor}
          borderColor={props.iconBorderColor}
          iconMaskColor={props.iconMaskColor}
          sizeInPct={props.sizeInPct}
          sizeContain={props.sizeContain}
          innerRef={props.iconId}
        />
      </Banner>
    </DropDownBannerContainer>
  );
};

export default MenuBanner;

const DropDownBannerContainer = styled.div<any>`
  position: absolute;
  top: 0;
  right: ${(props: any) => vhToPx(1.4)};
  display: flex;
  flex-direction: row;
`;

const BannerText = styled.div<any>`
  margin-top: ${(props: any) => vhToPx(1)};
  font-size: ${(props: any) => vhToPx(5)};
  font-family: pamainlight;
  /*color: #19d1bf;*/
  color: ${(props: any) => props.color || "#fff"};
  text-transform: uppercase;
  &:before {
    content: "${(props: any) => props.text}";
  }
`;

const Banner = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: ${(props: any) => responsiveDimension(5)};
  height: ${(props: any) => responsiveDimension(8.5)};
  background-color: ${(props: any) => props.backgroundColor};
  margin-left: ${(props: any) => responsiveDimension(1.5)};
  position: relative;
  border-bottom-left-radius: ${(props: any) => responsiveDimension(5)};
  border-bottom-right-radius: ${(props: any) => responsiveDimension(5)};
  animation: ${(props: any) => backBanner} 0.75s forwards;
  z-index: 10;
`;

const backBanner = keyframes`
  0%{height: ${vhToPx(1)};}
  50%{height: ${vhToPx(9.5)};}
  100%{height: ${(() => vhToPx(8.5))()};}
`;

const Icon = styled.div<any>`
  width: ${(props: any) => responsiveDimension(4.5)};
  height: ${(props: any) => responsiveDimension(4.5)};
  min-width: ${(props: any) => responsiveDimension(4.5)};
  min-height: ${(props: any) => responsiveDimension(4.5)};
  border-radius: 50%;
  margin-left: ${(props: any) => responsiveDimension(0.1)};
  margin-bottom: ${(props: any) => responsiveDimension(0.3)};
  background-color: ${(props: any) => props.backgroundColor};
  ${(props: any) =>
    props.borderColor
      ? `border:${responsiveDimension(0.4)} solid ${props.borderColor}`
      : ``};
  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    ${(props: any) =>
      props.iconMaskColor
        ? `
        background-color: ${props.iconMaskColor};
        -webkit-mask-image: url(${props.src});
        -webkit-mask-size: ${props.sizeInPct};
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-position: center;
        mask-image: url(${(props: any) => props.src});
        mask-size: ${props.sizeInPct};
        mask-repeat: no-repeat;
        mask-position: center;
      `
        : `
        background-image: url(${props.src});
        background-repeat: no-repeat;
        background-size: ${
          props.sizeContain
            ? props.sizeContain
            : props.sizeInPct
            ? `${props.sizeInPct}%`
            : "40%"
        };
        background-position: center;
      `};
  }
`;
