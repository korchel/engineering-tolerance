import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

import { Input } from "../../../ui";
import { useAppStore } from "../../../../store";

export const SizeInput = () => {
  const { size, setSize } = useAppStore((state) => state);
  const [inputSize, setInputSize] = useState<number>(size);
  const [error, setError] = useState("");

  const applyValue = () => {
    if (inputSize <= 0 || inputSize > 500 || !inputSize) {
      setError("От 0 до 500");
      return;
    }
    setError("");
    setSize(inputSize);
  };

  const handleEnter: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      applyValue();
    }
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputSize(Number(event.target.value));
  };

  return (
    <Input
      name={"size"}
      label={"Номинальный размер, мм:"}
      onChange={(e) => handleChange(e)}
      onKeyDown={(e) => handleEnter(e)}
      value={inputSize}
      error={error}
    />
  );
};
