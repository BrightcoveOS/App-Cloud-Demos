// see http://www.html5rocks.com/en/mobile/cross-device/
function getDeviceType() {
    return window.matchMedia("(max-width: 650px)").matches ? "phone" : "tablet";
}
