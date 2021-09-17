const Url = require("../models/Url");
const config = require("../config");
const checkUrl = require("../util/checkUrl");
exports.createUrl = async (req, res) => {
  //generate shortenURl
  const shortenUrl = await generateUrl(req.query.url);
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

const generateUrl = async (url) => {
  //check URL has http or https

  const urlNew = checkUrl(url);
  if (urlNew) {
    //generate URL randomly
    let shortenUri = (Math.random() + 1).toString(36).substring(7);

    const body = {
      url: urlNew,
      shortenUri
    };

    await Url.create(body);

    //return full URL that added defualt URL
    return config.defaultUriDb + shortenUri;
  } else {
    return false;
  }
};

exports.redirectUrl = async (req, res) => {
  //find urls
  const urls = await Url.findOne({ shortenUri: req.params.id });

  //check URL exists
  if (urls) {
    //if there are URL exists rediret to URL
    res.writeHead(301, { Location: urls.url });
    res.end();
  } else {
    //Unless there are URL exists, show error or whe can redirct page's default page
    res.writeHead(301, { Location: config.homePage });
    res.end();
  }
};
