import { InputNumber } from "antd";
import { Controller } from "react-hook-form";

export const HookFormInputNumber = ({ name, control, defaultValue }) => {
  return (
    <Controller
      defaultValue={defaultValue}
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ onChange, value }) => (
        <InputNumber
          value={value}
          onChange={onChange}
          style={{ width: "90%" }}
        />
      )}
    />
  );
};
