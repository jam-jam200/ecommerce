const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index.ejs", {
    title: "Home",
  });
});
router.get("/product", (req, res, next) => {
  res.render("product.ejs", {
    title: "Products",
  });
});
router.get("/contactus", (req, res, next) => {
  res.render("contact.ejs", {
    title: "Contact Us",
  });
});

module.exports = router;
