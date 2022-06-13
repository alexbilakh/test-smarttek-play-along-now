import { isTablet, isMobile, isIPad13, isAndroid } from "react-device-detect";

export const IsMobile = !isTablet && isMobile;

export const IsTablet = isTablet || isIPad13;

export const IsAndroid =
  window.navigator.userAgent.match(/Android/i) || isAndroid;

export const widthOverHeightPct = 58;

export const vwToPx = (value: number, isNum: boolean = false) => {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;

  var result = (x * value) / 100;
  if (isNum) {
    return result;
  } else {
    return result + "px";
  }
};

export const vhToPx = (value: number, isNum?: boolean) => {
  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    y = w.innerHeight || e.clientHeight || g.clientHeight;

  var result = (y * value) / 100;
  if (isNum) {
    return result;
  } else {
    return result + "px";
  }
};

export const mobileScale = (val: number) => {
  return vwToPx((val * 100) / widthOverHeightPct);
};

export const responsiveDimension = (val: number) => {
  return IsMobile
    ? window.innerWidth / window.innerHeight <= 0.58
      ? mobileScale(val)
      : vhToPx(val, false)
    : vhToPx(val, false);
};

export const maxWidth =
  window.innerWidth < Number((vhToPx(69) as string).replace("px", ""))
    ? vwToPx(100)
    : vhToPx(69);
export const mobileWidth = vhToPx(80);
export const maxHeight = vhToPx(100);

// Copies a string to the clipboard. Must be called from within an
// event handler such as click. May return false if it failed, but
// this is not always possible. Browser support for Chrome 43+,
// Firefox 42+, Safari 10+, Edge and Internet Explorer 10+.
// Internet Explorer: The clipboard feature may be disabled by
// an administrator. By default a prompt is shown the first
// time the clipboard is used (per session).
export const copyToClipboard = (text: string) => {
  if ((window as any).clipboardData && (window as any).clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return (window as any).clipboardData.setData("Text", text);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return text;
    } finally {
      document.body.removeChild(textarea);
    }
  }
};

export const validEmail = (email: string) => {
  const reg =
    /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return !!email && !!email.match(reg);
};
