import prisma from "../db/prisma";

export const getTask = async () => {
  try {
    const tasks = await prisma.task.findMany()
    return tasks
  }
  catch (err) {
    return { error: `Something Went Wrong ! : ${err.message}` }
  }
}

export const getTaskById = async ( task_id ) => {
  try {
    const task = await prisma.task.findUnique({
      where: { task_id }
    })
    return task
  }
  catch (err) {
    return { error: `Something Went Wrong ! : ${err.message}` }
  }
}

export const createTask = async ( task_name, username, category_id, is_done) => {
  try {
    const task = await prisma.task.create({
      data: {
        task_name,
        username,
        category_id,
        is_done
      }
    })
    return { task, message: "Task Created Successfully !" }
  }
  catch (err) {
    return { error: `Unable to Create ! : ${err.message}` }
  }
}

export const updateTask = async ( task_id, updatedData ) => {
  try {
    const task = await prisma.task.update({
      where: { task_id },
      data: { ...updatedData }
    })
    return { task, message: "Task Updated Successfully !" }
  }
  catch (err) {
    return { error: `Unable to Update ! : ${err.message}` }
  }
}

export const deleteTask = async ( task_id ) => {
  try {
    const task = await prisma.task.delete({
      where: { task_id }
    })
    return { task, message: "Task Deleted Successfully !" }
  }
  catch (err) {
    return { error: `Unable to Delete ! : ${err.message}` }
  }
}