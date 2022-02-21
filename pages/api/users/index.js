/* eslint-disable import/no-anonymous-default-export */
import { getUser, getUserByUsername, createUser, updateUser, deleteUser } from '/controller/users.js'

export default async (req, res) => {
  try {
    switch (req.method) {

      case 'GET': {
        if (req.query.username) {
          // Get a user by username (/api/users/:username)
          const user = await getUserByUsername(req.query.username)
          return res.status(200).json(user)
        } else {
          // Otherwise, get all users
          const users = await getUser()
          return res.status(200).json(users)
        }
      }

      case 'POST': {
        // Create a new user
        const { name, username, email } = req.body
        const user = await createUser( name, username, email )
        return res.status(200).json(user)
      }

      case 'PUT': {
        // Update a user
        const { username, ...updatedData } = req.body
        const user = await updateUser( username, updatedData )
        return res.status(200).json(user)
      }

      // case 'DELETE': {
      //   // Delete a user
      //   const { username } = req.query
      //   const user = await deleteUser( username )
      //   return res.status(200).json(user)
      // }

      default: {
        break
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
}