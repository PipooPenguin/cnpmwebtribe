function cookiRandom() {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}

function getCookie(name) {
  console.log("document cookie", document.cookie);
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

function setCookies(name, cookieValue, minuteTime) {
  var now = new Date();
  var time = now.getTime();
  var expireTime = time + 1000 * 60 * minuteTime;
  now.setTime(expireTime);
  document.cookie = `${name}=${cookieValue};expires=${now.toUTCString()};path=/`;
}

function checkCartCookie() {
  console.log("checkCartCookie called");
  var cartToken = getCookie("cartToken");

  if (cartToken == null) {
    setCookies("cartToken", cookiRandom(), 600);
  }
}

checkCartCookie();
