
const users = [
    { username: 'juancontreras', password: '1234', role: 'user' },

  ];
  
  const authenticateUser = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    return user;
  };
  
  export { authenticateUser };
  