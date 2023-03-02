function getDeviceInfo() {
  const device = navigator.userAgent.match(
    /(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/
  )
    ? "Mobile"
    : "Desktop";
}
