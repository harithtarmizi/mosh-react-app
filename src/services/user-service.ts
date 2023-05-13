import create from "./http-service";

export interface UserProps {
  id: number;
  name: string;
}

export default create("/users");
