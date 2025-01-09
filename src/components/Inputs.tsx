import { useState } from "react";

const Input: React.FC = () => {
  const [value, setValue] = useState<string | undefined>("");
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(value);
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleNameChange}
          placeholder="Enter your name"
          value={value}
        />
        <h3>{value}</h3>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
