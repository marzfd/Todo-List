import prisma from "../db/prisma";

export const getUser = async () => {
  try {
    const user = await prisma.user.findMany();
    return user
  }
  catch (err) {
    return { error: `Something Went Wrong ! : ${err.message}` }
  }
}

export const getUserByUsername = async ( username ) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username }
    })
    return user
  }
  catch (err) {
    return { error: `Something Went Wrong ! : ${err.message}` }
  }
}

export const createUser = async ( name, username, email ) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        username,
        email
      }
    })
    return { user, message: "User Created Successfully !" }
  }
  catch (err) {
    return { error: `Unable to Create ! : ${err.message}` }
  }
}

export const updateUser = async ( username, updatedData ) => {
  try {
    const user = await prisma.user.update({
      where: { username },
      data: { ...updatedData }
    })
    return { user, message: "User Updated Successfully !" }
  }
  catch (err) {
    return { error: `Unable to Update ! : ${err.message}` }
  }
}

export const deleteUser = async ( username ) => {
  try {
    const user = await prisma.user.delete({
      where: { username }
    })
    return { user, message: "User Deleted Successfully !" }
  }
  catch (err) {
    return { error: `Unable to Delete ! : ${err.message}` }
  }
}


export const checkUser = async () => {
  const username = req.params.tagId;
  const result = await prisma.user.findUnique({
    where: { username }
  })
  if (err) {
    res.status(500).send({ error: err.message });
  } else if (result.length === 0) {
    res.status(200).send({ msg: 'Valid username' });
  } else {
    res.status(400).send({ msg: 'Invalid username' });
  }
}