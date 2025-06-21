import { FC } from "react";
import { Input } from "../../ui";
import { useFormContext } from "react-hook-form";

interface Props {
  name: string;
}

export const FormInput: FC<Props> = ({ name, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string;

  return (
    <Input
      label={"Номинальный размер, мм:"}
      error={error}
      {...register(name)}
      {...props}
    />
  );
};
