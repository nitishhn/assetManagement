const express = require("express");
const router = express.Router();
const categoryService = require("../services/category.services");

const authenticateToken = require("../middleware/authenticateToken.middleware");
const authorizeUser = require("../middleware/userauthorization.middleware");
const authorizeAdmin = require("../middleware/adminauthorization.middleware");

router.post("/createCategory", authenticateToken, async function (req, res) {
  let categoryObj = {
    category_id: req.body.category_id,
    slug: req.body.slug,
    name: req.body.name,
  };
  let status = "";
  status = await categoryService.addCategory(categoryObj);
  console.log(status);
  res.send("Category is Added Successfully!!");
});

router.get(
  "/getAllCategory",
  authenticateToken,
  authorizeUser,
  async function (req, res) {
    let categoryArray = await categoryService.getAllCategory();
    console.log("All Category Info:");
    res.send(categoryArray);
  }
);

router.get(
  "/getCategoryById/:id",
  authenticateToken,
  authorizeUser,
  async function (req, res) {
    var { id } = req.params;
    let categoryObj = await categoryService.getCategoryById(id);
    console.log("Category with the given id" + id);
    res.send(categoryObj);
  }
);
/*
router.put("/updateCategory/:id", authenticateToken, async function (req, res) {
  const categoryId = req.params.category_id;

  let categoryObj = {
    slug: req.body.slug,
    name: req.body.name,
  };
  let status = "";
  status = await categoryService.updateCategory(categoryObj);
  console.log(status);
  res.send("Category is Updated Successfully!!");
});
*/

router.put(
  "/updateCategory/:cid",
  authenticateToken,
  authorizeUser,
  async function (req, res) {
    const categoryId = req.params.cid; // Use req.params.id to get the category ID from the URL

    let categoryObj = {
      // Only include the properties you want to update
      slug: req.body.slug,
      name: req.body.name,
    };

    try {
      const status = await categoryService.updateCategory(
        categoryId,
        categoryObj
      ); // Pass categoryId and categoryObj separately
      console.log(status);
      res.send("Category is Updated Successfully!!");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error updating category");
    }
  }
);

router.delete(
  "/deleteCategoryById/:id",
  authenticateToken,
  authorizeUser,
  async function (req, res) {
    var { id } = req.params;
    let status = "";
    status = await categoryService.deleteCategory(id);
    console.log(status);
    res.send("Category is Deleted Successfully!!");
  }
);

module.exports = router;
