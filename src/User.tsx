import axios from "axios";
import { useEffect, useState } from "react";

interface UserProps {
  id: number;
  name: string;
}

const User = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    axios
      .get<UserProps[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default User;
