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
    const controller = new AbortController();
    axios
      .get<UserProps[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof AxiosError) return;
        setError(err.message);
      });

    return () => controller.abort();
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
