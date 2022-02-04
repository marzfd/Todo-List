import prisma from "../db/prisma";

export const getCategory = async () => {
  try {
    const category = await prisma.category.findMany();
    return category
  }
  catch (err) {
    return { error: `Something Went Wrong ! : ${err.message}` }
  }
}

export const getCategoryById = async ( category_id ) => {
  try {
    const category = await prisma.category.findOne({
      where: { category_id }
    })
    return category
  }
  catch (err) {
    return { error: `Something Went Wrong ! : ${err.message}` }
  }
}

export const createCategory = async ( category_name ) => {
  try {
    const category = await prisma.category.create({
      data: {
        category_name
      }
    })
    return { category, message: "Category Created Successfully !" }
  }
  catch (err) {
    return { error: `Unable to Create ! : ${err.message}` }
  }
}

export const updateCategory = async ( category_id, updatedData ) => {
  try {
    const category = await prisma.category.update({
      where: { category_id },
      data: { ...updatedData }
    })
    return { category, message: "Category Updated Successfully !" }
  }
  catch (err) {
    return { error: `Unable to Update ! : ${err.message}` }
  }
}

export const deleteCategory = async ( category_id ) => {
  try {
    const category = await prisma.category.delete({
      where: { category_id }
    })
    return { category, message: "Category Deleted Successfully !" }
  }
  catch (err) {
    return { error: `Unable to Delete ! : ${err.message}` }
  }
}

