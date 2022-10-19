import { useState } from "react";
import "./App.css";
import Select, { SelectOption } from "./Select";

const options = [
  {
    label: "First",
    value: 1,
  },
  {
    label: "Second",
    value: 2,
  },
  {
    label: "Third",
    value: 3,
  },
  {
    label: "Fourth",
    value: 4,
  },
];

const App = () => {
  const [values, setValues] = useState<SelectOption[]>([options[0]]);
  const [value, setValue] = useState<SelectOption | undefined>(options[0]);

  return (
    <div className="App">
      <Select
        multiple
        options={options}
        value={values}
        onChange={(o) => setValues(o)}
      />
      <br />
      <Select options={options} value={value} onChange={(o) => setValue(o)} />
    </div>
  );
};

export default App;
