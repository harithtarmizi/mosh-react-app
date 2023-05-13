import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface UserProps {
  id: number;
  name: string;
}

const User = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<UserProps[]>(
          "https://jsonplaceholder.typicode.com/xusers"
        );
        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };

    fetchUsers();

    // get -> await promise -> resolve -> res / err
    // axios
    //   .get<UserProps[]>("https://jsonplaceholder.typicode.com/xusers")
    //   .then((res) => setUsers(res.data))
    //   .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default User;
