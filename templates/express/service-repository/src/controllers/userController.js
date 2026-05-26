import { fetchUsers } from '../services/userService.js';

// Controller strictly handles request/response and delegates business logic to the service layer.
export const getUsers = async (req, res) => {
  try {
    const users = await fetchUsers();
    res.json({
      status: 'success',
      data: users
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Unable to fetch users.'
    });
  }
};
