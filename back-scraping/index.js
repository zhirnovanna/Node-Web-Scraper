const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const url = "https://www.verif.com/Hit-parade/01-CA/00-Pays/0-France";
const urlInfo =
  "https://www.verif.com/Hit-parade/01-CA/03-Par-activite/63-Services-d-information";

app.get("/", function (req, res) {
  res.json("This is my back end home page");
});

app.get("/big-top", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const items = [];

      $(".highlight", html).each(function () {
        const title = $(this).find(".verif_col1 a").text();
        const url = $(this).find(".verif_col1 a").attr("href");
        const code = $(this).find(".verif_col2 a").text();
        const city = $(this).find(".verif_col3 a").text();
        const ca = $(this).find(".verif_col5 a").text();

        items.push({
          title,
          url,
          code,
          city,
          ca,
        });
      });
      res.json(items);
    })
    .catch((err) => console.log(err));
});

app.get("/top-info", (req, res) => {
  axios(urlInfo)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const itemsInfo = [];

      $(".highlight", html).each(function () {
        const title = $(this).find(".verif_col1 a").text();
        const url = $(this).find(".verif_col1 a").attr("href");
        const code = $(this).find(".verif_col2 a").text();
        const city = $(this).find(".verif_col3 a").text();
        const ca = $(this).find(".verif_col5 a").text();

        itemsInfo.push({
          title,
          url,
          code,
          city,
          ca,
        });
      });
      res.json(itemsInfo);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
