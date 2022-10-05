import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
    const myData = [
        { text: 'Books', value: 1 },
        { text: 'Movies, Music & Games', value: 2 },
        { text: 'Electronics & Computers', value: 3 },
        { text: 'Home, Garden & Tools', value: 4 },
        { text: 'Health & Beauty', value: 5 },
        { text: 'Toys, Kids & Baby', value: 6 },
        { text: 'Clothing & Jewelry', value: 7 },
        { text: 'Sports & Outdoors', value: 8 },
        { text: 'Automotive & Industrial', value: 9 }
    ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="form-style-8">
      <div className="createProjectBox">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="inputField"
            type="text"
            placeholder="Project Name"
            {...register("Project Name", {
              max: 30,
              min: 1,
              maxLength: 30,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <input
            className="inputField"
            type="text"
            placeholder="Project Desc."
            {...register("Project Desc.", {
              required: true,
              max: 150,
              min: 1,
              maxLength: 150,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <select className="inputField" {...register("Developers")}>
            <option value="Developers/Users Query">
              Developers/Users Query
            </option>
            <option value="Option 2">Option 2</option>
            <option value=" Option 3"> Option 3</option>
          </select>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
