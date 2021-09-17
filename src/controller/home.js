exports.home = (req, res) => {
  const html = `<html>
  <body>
  <h1>Welcome to home page</h1>
  </body>
  </html>`;
  res.status(200).send(html);
};
