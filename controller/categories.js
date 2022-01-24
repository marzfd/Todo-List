import dbQuery from '/config/db';
import { showResults, invalidRequest } from '/controller/helpers';

export const getCategory = async (req, res) => {
  const category = await dbQuery('SELECT * FROM categories');
  showResults(res, category);
}

export const createCategory = async (req, res) => {
  const { category_name } = req.body;
  const category = await dbQuery(
    'INSERT INTO categories SET ?',
    {category_name}
  );
  if (!category_name) {
    invalidRequest(res);
  } else {
    showResults(res, category);
  }
}

export const updateCategory = async (req, res) => {
  const { category_name } = req.body;
  if (!category_name) {
    invalidRequest(res);
  } else {
    const category = await dbQuery(
      'UPDATE categories SET ? WHERE ?',
      [{category_name}, {category_id: req.params.id}]
    );
    showResults(res, category);
  }
}

export const deleteCategory = async (req, res) => {
  const category = await dbQuery(
    'DELETE FROM categories WHERE ?',
    {category_id: req.params.id}
  );
  showResults(res, category);
}

