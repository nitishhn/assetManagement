const { Op, where } = require("sequelize");
const categoryModel = require("..//models/category.model");

exports.addCategory = async (categoryObj) => {
  await categoryModel.create(categoryObj);
  return "Category is Created";
};

exports.getCategoryById = async (cid) => {
  let categoryObj = await categoryModel.findByPk(cid);
  return categoryObj;
};

exports.getAllCategory = async () => {
  let categoryArray = await categoryModel.findAll();
  return categoryArray;
};

exports.deleteCategory = async (cid) => {
  await categoryModel.destroy({ where: { category_id: cid } });
  return "Category is Deleted";
};

exports.updateCategory = async (categoryId, categoryObj) => {
  try {
    // First, check if the category exists
    const category = await categoryModel.findByPk(categoryId);
    if (!category) {
      throw new Error("Category not found");
    }

    // Update the category with the provided data
    await category.update(categoryObj);

    // Return a success message
    return "Category updated successfully";
  } catch (error) {
    throw error;
  }
};
