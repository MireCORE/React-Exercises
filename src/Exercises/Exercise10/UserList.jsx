const UserList = () => {
  const Users = [
    { id: 1, name: "Mire", email: "(mire@gmail.com)" },
    { id: 2, name: "MireCore", email: "(mirecore@gmail.com)" },
  ];
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {Users.map((user) => (
          <li key={user.id}>
            {user.name}
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
