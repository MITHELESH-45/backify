// Controller that handles both request/response and business logic for the User resource.

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Carol', email: 'carol@example.com' }
];

export const getUsers = (req, res) => {
  // Business logic lives here in the MVC pattern until the data layer is added.
  res.json({
    status: 'success',
    data: users
  });
};
