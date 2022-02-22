/* eslint-disable import/no-anonymous-default-export */
import { getCategory, getCategoryById, createCategory, updateCategory, deleteCategory } from "../../controller/categories";

export default async (req, res) => {
  try {
    switch (req.method) {

      case "GET": {
        if (req.query.category_id) {
          // Get a category by category_id (/api/categories/:category_id)
          const category = await getCategoryById(req.query.category_id);
          return res.status(200).json(category);
        } else {
          // Otherwise, get all categories
          const categories = await getCategory();
          return res.status(200).json(categories);
        }
      }

      case "POST": {
        // Create a new category
        const { category_name, username } = req.body;
        const category = await createCategory(category_name, username);
        return res.status(200).json(category);
      }

      case "PUT": {
        // Update a category
        const { category_id, ...updatedData } = req.body;
        const category = await updateCategory(category_id, updatedData);
        return res.status(200).json(category);
      }

      case "DELETE": {
        // Delete a category
        const { category_id } = req.body;
        const category = await deleteCategory(category_id);
        return res.status(200).json(category);
      }

      default: {
        break;
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
}