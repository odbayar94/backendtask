const config = require("../config");
const checkUrl = require("../util/checkUrl");

//Use dictionary
var shortenUrl = {};

exports.generateUrl = (req, res) => {
  //generate shortenURl
  const shortenUrl = generateUrl(req.query.url);
  if (shortenUrl) {
    res.status(200).json({
      success: true,
      url: shortenUrl
    });
  } else {
    //if URL is invalied return error
    res.status(403).json({
      success: false,
      url: `${req.query.url} is invalid URL`
    });
  }
};

const generateUrl = (url) => {
  //check URL has http or https
  const newUrl = checkUrl(url);
  if (newUrl) {
    //generate shortenURl
    let shortenUri = (Math.random() + 1).toString(36).substring(7);

    shortenUrl[shortenUri] = newUrl;
    return config.defaultUri + shortenUri;
  } else {
    return false;
  }
};

exports.redirectUrl = (req, res) => {
  const url = shortenUrl[req.params.id];

  if (url) {
    res.writeHead(301, { Location: url });
    res.end();
  } else {
    //Unless there are URL exists,
    //Home page's default page
    res.writeHead(301, { Location: config.homePage });
    res.end();
  }
};
