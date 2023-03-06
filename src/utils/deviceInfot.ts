// function getDeviceInfo() {
//   const device = navigator.userAgent.match(
//     /(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/
//   )
//     ? "Mobile"
//     : "Desktop";
// }

// Nabwinsaud
// nabinsaud.com.np
interface DeviceInfo {
  device: string;
  os: string;
  browser: string;
  time: Date;
}

export default function getDeviceInfo(): DeviceInfo {
  const device =
    (navigator.userAgent.match(
      /(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/
    ) || [])[0] || "Unknown";
  const os = (() => {
    const userAgent = navigator.userAgent;
    if (userAgent.match(/Windows NT 10.0/)) return "Windows 10";
    if (userAgent.match(/Windows NT 6.2/)) return "Windows 8";
    if (userAgent.match(/Windows NT 6.1/)) return "Windows 7";
    if (userAgent.match(/Windows NT 6.0/)) return "Windows Vista";
    if (userAgent.match(/Windows NT 5.1/)) return "Windows XP";
    if (userAgent.match(/Windows NT 5.0/)) return "Windows 2000";
    if (userAgent.match(/Windows Phone 8.0/)) return "Windows Phone 8.0";
    if (userAgent.match(/Windows Phone OS 7.0/)) return "Windows Phone 7.0";
    if (userAgent.match(/Windows NT 10.0/i)) return "Windows 10";
    if (userAgent.match(/Win64/i) && !userAgent.match(/x64/i))
      return "Windows on ARM64";
    if (userAgent.match(/Win64/i) || userAgent.match(/x64/i))
      return "Windows 64-bit";
    if (userAgent.match(/WOW64/i)) return "Windows 32-bit on Windows 64-bit";
    if (
      userAgent.match(/Win32/i) ||
      userAgent.match(/Win16/i) ||
      userAgent.match(/WinCE/i)
    )
      return "Windows 32-bit";
    if (userAgent.match(/iPhone/i)) return "iPhone";
    if (userAgent.match(/iPad/i)) return "iPad";
    if (userAgent.match(/Android/i)) return "Android";
    if (userAgent.match(/BlackBerry/i)) return "BlackBerry";
    if (userAgent.match(/Macintosh/i)) return "Mac OS X";
    return "Unknown";
  })();
  const browser = (() => {
    const userAgent = navigator.userAgent;
    const browsers: Record<string, RegExp> = {
      chrome: /chrome/i,
      safari: /safari/i,
      firefox: /firefox/i,
      ie: /internet explorer/i,
      edge: /edge/i,
      opera: /opera|opr/i,
    };
    for (const key in browsers) {
      if (browsers[key].test(userAgent)) {
        return key;
      }
    }
    return "Unknown";
  })();
  const time = new Date();

  return { device, os, browser, time };
}
