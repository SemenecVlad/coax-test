import { DatePicker } from "antd";
import { Controller } from "react-hook-form";

const { RangePicker } = DatePicker;

export const HookFormRangePicker = ({ name, control, defaultValue = "" }) => {
  return (
    <Controller
      defaultValue={defaultValue}
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ onChange, value }) => (
        <RangePicker
          value={value}
          onChange={onChange}
          style={{ width: "90%" }}
        />
      )}
    />
  );
};
