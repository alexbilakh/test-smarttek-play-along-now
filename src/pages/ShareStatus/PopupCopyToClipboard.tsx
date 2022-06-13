import styled from "styled-components";
import { vhToPx, responsiveDimension } from "../../utils/helpers";

const PopupCopyToClipboard = ({
  close,
  referralCode,
}: {
  close: () => void;
  referralCode: string | number;
}) => {
  return (
    <PopupContainer onClick={close}>
      <Section
        height="80"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <CircleButton
          src={`images/icon-copy.svg`}
          sizeInPct={50}
          backgroundColor={"#19d1be"}
          iconBackgroundColor={"#ffffff"}
        />
        <InnerSection widthInPct="100" direction="column" alignItems="center">
          <TextWrapper marginTop="3">
            <Text font={"pamainlight"} size={4.2} color={"#ffffff"} uppercase>
              your&nbsp;
            </Text>
            <Text
              font={"pamainextrabold"}
              size={4.2}
              color={"#19d1be"}
              uppercase
            >
              key
            </Text>
            <Text font={"pamainlight"} size={4.2} color={"#ffffff"} uppercase>
              &nbsp;has been copied
            </Text>
          </TextWrapper>
          <TextWrapper marginTop="1">
            <Text
              font={"pamainextrabold"}
              size={8}
              color={"#ffffff"}
              uppercase
              nospacing
            >
              {referralCode}
            </Text>
          </TextWrapper>
          <TextWrapper marginTop="1">
            <Text font={"pamainlight"} size={4.2} color={"#19d1be"} uppercase>
              use it on your favorite platform
            </Text>
          </TextWrapper>
        </InnerSection>
      </Section>
      <Section height="14" justifyContent="center">
        <TextWrapper>
          <Text
            font={"pamainlight"}
            size={3.6}
            color={"#ffffff"}
            uppercase
            cursor="pointer"
            onClick={close}
          >
            tap anywhere to return
          </Text>
        </TextWrapper>
      </Section>
    </PopupContainer>
  );
};

export default PopupCopyToClipboard;

const Section = styled.div<any>`
  width: 100%;
  ${(props) => (props.height ? `height:${vhToPx(props.height)}` : ``)};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  display: flex;
  ${(props) => (props.direction ? `flex-direction:${props.direction}` : ``)};
  ${(props) =>
    props.justifyContent ? `justify-content:${props.justifyContent};` : ``};
  ${(props) => (props.alignItems ? `align-items:${props.alignItems};` : ``)};
  ${(props) =>
    props.marginTop ? `margin-top:${vhToPx(props.marginTop)}` : ``};
  ${(props) =>
    props.marginBottom ? `margin-bottom:${vhToPx(props.marginBottom)}` : ``};
`;

const InnerSection = styled.div<any>`
  text-align: center;
  display: flex;
  ${(props) => (props.widthInPct ? `width:${props.widthInPct}%` : ``)};
  ${(props) => (props.height ? `height:${vhToPx(props.height)}` : ``)};
  ${(props) => (props.direction ? `flex-direction:${props.direction}` : ``)};
  ${(props) =>
    props.justifyContent ? `justify-content:${props.justifyContent};` : ``};
  ${(props) => (props.alignItems ? `align-items:${props.alignItems};` : ``)};
  ${(props) =>
    props.marginTop ? `margin-top:${vhToPx(props.marginTop)}` : ``};
  ${(props) =>
    props.marginBottom ? `margin-bottom:${vhToPx(props.marginBottom)}` : ``};
  ${(props) =>
    props.paddingLeftInPct ? `padding-left:${props.paddingLeftInPct}%` : ``};
`;

const PopupContainer = styled.div<any>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 20;
`;

const TextWrapper = styled.div<any>`
  text-align: center;
  ${(props) =>
    props.marginTop ? `margin-top:${vhToPx(props.marginTop)}` : ``};
  ${(props) =>
    props.marginBottom ? `margin-bottom:${vhToPx(props.marginBottom)}` : ``};
`;
const Text = styled.span<any>`
  font-family: ${(props) => props.font || "pamainregular"};
  font-size: ${(props) => responsiveDimension(props.size || 3)};
  color: ${(props) => props.color || "#000000"};
  line-height: 1;
  ${(props) => (props.uppercase ? "text-transform: uppercase;" : "")} ${(
    props
  ) => (props.italic ? "font-style: italic;" : "")};
  ${(props) =>
    props.nowrap
      ? `white-space: nowrap; backface-visibility: hidden; -webkit-backface-visibility: hidden;`
      : ""};
  letter-spacing: ${(props) => responsiveDimension(props.nospacing ? 0 : 0.1)};
  cursor: ${(props) => props.cursor || "default"};
`;

const CircleButton = styled.div<any>`
  position: relative;
  width: ${(props) => responsiveDimension(10)};
  height: ${(props) => responsiveDimension(10)};
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor || "#ffffff"};
  cursor: pointer;
  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.iconBackgroundColor};
    -webkit-mask-image: url(${(props) => props.src});
    -webkit-mask-size: 50%;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-image: url(${(props) => props.src});
    mask-size: ${(props) => props.sizeInPct || 50}%;
    mask-repeat: no-repeat;
    mask-position: center;
  }
`;
