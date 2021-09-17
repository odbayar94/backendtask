const checkHttps = (url) => {
  if (isValidURL(url)) {
    var tarea = url;
    if (tarea.indexOf("http://") == 0 || tarea.indexOf("https://") == 0) {
      // do something here
      return url;
    } else {
      return "http://" + url;
    }
  } else {
    return false;
  }
};

const isValidURL = (string) => {
  var res = string.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return res !== null;
};

module.exports = checkHttps;
