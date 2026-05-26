import { getAllUsers } from '../repositories/userRepository.js';

// Service handles business logic and delegates data access to the repository.
export const fetchUsers = async () => {
  const users = await getAllUsers();

  // Example business rule: return only active users.
  return users.filter(user => user.active);
};
