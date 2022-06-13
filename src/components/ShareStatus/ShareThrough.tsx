import { useContext, useState } from "react";
import { AppContext } from "../../App";
import styled from "styled-components";
import MenuBanner from "../../components/common/MenuBanner";
import {
  vhToPx,
  responsiveDimension,
  copyToClipboard,
} from "../../utils/helpers";
import PopupCopyToClipboard from "./PopupCopyToClipboard";
import ThroughEmail from "./ThroughEmail";

interface ShareThroughProps {
  headerText?: string;
  cancel?: () => void;
  analyticsPageName?: string;
}

const ShareThrough = (props: ShareThroughProps) => {
  const [isSharingThroughEmails, setSharingThroughEmails] =
    useState<boolean>(false);
  const [isKeyCopied, setKeyCopied] = useState<boolean>(false);
  const { referralCode } = useContext(AppContext);

  const onCopyToClipboard = () => {
    copyToClipboard(referralCode as string);
    setKeyCopied(true);
  };

  return (
    <Container>
      {isSharingThroughEmails && (
        <ThroughEmail close={() => setSharingThroughEmails(false)} />
      )}

      {isKeyCopied && (
        <PopupWrapper>
          <PopupCopyToClipboard close={() => setKeyCopied(false)} />
        </PopupWrapper>
      )}

      <MenuBanner
        backgroundColor="#19d1bf"
        icon="images/menu-key-icon.svg"
        iconBackgroundColor="#000"
        iconMaskColor=""
        sizeInPct="80"
        text=""
      />

      <Content>
        <Section
          height="25"
          direction="column"
          alignItems="center"
          justifyContent="flex-end"
        >
          <CircleButton
            src={`images/icon-share.svg`}
            sizeInPct={60}
            backgroundColor={"#ffffff"}
            iconBackgroundColor={"#000000"}
          />
          <TextWrapper marginTop="3" marginBottom="1">
            <Text font={"pamainlight"} size={5} color={"#ffffff"} uppercase>
              {props.headerText || "share through"}
            </Text>
          </TextWrapper>
        </Section>
        <Section height="50" direction="column" justifyContent="center">
          <SubMenuBarWrap>
            <SubMenuBarTransparent
              id={"share-email"}
              onClick={() => setSharingThroughEmails(true)}
            >
              <SubMenuBarInner
                backgroundColor={"#211d1e"}
                borderColor={"#ffffff"}
                text="e-mail contacts"
              />
              <SubMenuIcon src={`images/icon-email.svg`} sizeInPct="60" />
            </SubMenuBarTransparent>
          </SubMenuBarWrap>
          <SubMenuBarWrap>
            <SubMenuBarTransparent id={"share-facebook"}>
              <SubMenuBarInner
                backgroundColor={"#211d1e"}
                borderColor={"#ffffff"}
                text="facebook"
              />
              <SubMenuIcon
                src={`images/icon-facebook.svg`}
                sizeInPct="35"
                backgroundColor={"#0a85ee"}
              />
            </SubMenuBarTransparent>
          </SubMenuBarWrap>
          <SubMenuBarWrap>
            <SubMenuBarTransparent id={"share-twitter"}>
              <SubMenuBarInner
                backgroundColor={"#211d1e"}
                borderColor={"#ffffff"}
                text="twitter"
              />
              <SubMenuIcon
                src={`images/icon-twitter.svg`}
                sizeInPct="60"
                backgroundColor={"#20a1f1"}
              />
            </SubMenuBarTransparent>
          </SubMenuBarWrap>
          <SubMenuBarWrap>
            <SubMenuBarTransparent id={"share-instagram"}>
              <SubMenuBarInner
                backgroundColor={"#211d1e"}
                borderColor={"#ffffff"}
                text="instagram"
              />
              <SubMenuIcon
                src={`images/icon-instagram.svg`}
                sizeInPct="60"
                backgroundColor={
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);"
                }
              />
            </SubMenuBarTransparent>
          </SubMenuBarWrap>
          <SubMenuBarWrap>
            <SubMenuBarTransparent
              id={"share-copytoclipboard"}
              onClick={onCopyToClipboard}
            >
              <SubMenuBarInner
                backgroundColor={"#211d1e"}
                borderColor={"#ffffff"}
              >
                <InnerSection
                  direction="row"
                  widthInPct="100"
                  paddingLeftInPct="30"
                  style={{
                    transform: "scaleX(0.8)",
                    transformOrigin: "left",
                  }}
                >
                  <ReferralCodeInputWrapper />
                  <SubMenuText font="pamainregular" color={"#ffffff"}>
                    or&nbsp;
                  </SubMenuText>
                  <SubMenuText font="pamainextrabold" color={"#19d1be"}>
                    copy
                  </SubMenuText>
                  <SubMenuText font="pamainregular" color={"#ffffff"}>
                    &nbsp;to clipboard
                  </SubMenuText>
                </InnerSection>
              </SubMenuBarInner>
              <SubMenuIcon src={`images/icon-copy.svg`} sizeInPct="50" />
            </SubMenuBarTransparent>
          </SubMenuBarWrap>
        </Section>
        <Section height="19" alignItems="center" justifyContent="center">
          <Text
            font={"pamainlight"}
            size={3.6}
            color={"#ffffff"}
            uppercase
            id="tap-cancel"
            style={{ cursor: "pointer" }}
            onClick={props.cancel}
          >
            tap here to cancel
          </Text>
        </Section>
      </Content>
    </Container>
  );
};

export default ShareThrough;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.95);
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

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

const SubMenuBarWrap = styled.div`
  width: 90%;
  height: ${(props) => responsiveDimension(9)};
  border-top-right-radius: ${(props) => responsiveDimension(9)};
  border-bottom-right-radius: ${(props) => responsiveDimension(9)};
  background-color: #939598;
  margin-top: ${(props) => vhToPx(0.3)};
  margin-bottom: ${(props) => vhToPx(0.3)};
  display: flex;
  justify-content: flex-end;
`;

const SubMenuBarTransparent = styled.div`
  width: 80%;
  height: ${(props) => responsiveDimension(9)};
  border-radius: ${(props) => responsiveDimension(9)};
  position: relative;
  cursor: pointer;
`;

const SubMenuBarInner = styled.div<any>`
  width 100%;
  height: ${(props) => responsiveDimension(9)};
  border-radius: ${(props) => responsiveDimension(9)}};
  background-color: ${(props) => props.backgroundColor || "#000000"};
  ${(props) =>
    props.borderColor
      ? `border: ${responsiveDimension(0.6)} solid ${props.borderColor}`
      : ``};
  position: absolute;
  display: flex;
  align-items: center;
  &:after {
    content: '${(props) => props.text}';
    font-family: pamainregular;
    font-size: ${(props) => responsiveDimension(4)};
    color: #ffffff;
    text-transform: uppercase;
    line-height: 0.9;
    height: ${(props) => responsiveDimension(4 * 0.8)};
    padding-left: 30%;
    letter-spacing: ${(props) => responsiveDimension(0.1)};
    transform: scaleX(0.8);
    transform-origin: left;
  }
`;

const SubMenuIcon = styled.div<any>`
  position: absolute;
  width: ${(props) => responsiveDimension(9)};
  height: ${(props) => responsiveDimension(9)};
  border-radius: 50%;
  border: ${(props) => `${responsiveDimension(0.8)} solid #ffffff`};
  ${(props) =>
    props.backgroundColor ? `background: ${props.backgroundColor}` : ``};
  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: ${(props) => props.sizeInPct || 80}%;
    background-position: center;
  }
`;

const SubMenuText = styled.span<any>`
  font-family: ${(props) => props.font || "pamainregular"};
  font-size: ${(props) => responsiveDimension(4)};
  color: ${(props) => props.color || "#000000"};
  line-height: 0.9;
  height: ${(props) => responsiveDimension(4 * 0.8)};
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: ${(props) => responsiveDimension(0.1)};
`;

const ReferralCodeInputWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 0;
`;

const PopupWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
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
