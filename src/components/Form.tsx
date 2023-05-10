import { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  // we want to referencing a HTML input element
  // why pull initial value null, because DOM will have after render
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };

  const { register, handleSubmit } = useForm();

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  // const handleSubmit = (e: FormEvent) => {
  //   // by default submit will send to server
  //   e.preventDefault();
  //   console.log(person);
  // };

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    // remember, we dont put function inside onSubmit but just reference, hence it doesn't have parethesis
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          // value={person.name}
          // onChange={(e) => setPerson({ ...person, name: e.target.value })}
          {...register("name")}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          // value={person.age}
          // onChange={(e) => setPerson({ ...person, age: e.target.value })}
          {...register("age")}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;