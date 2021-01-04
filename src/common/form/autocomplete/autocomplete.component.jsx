import { useCallback, useState } from "react";
import { AutoComplete } from "antd";
import { Controller } from "react-hook-form";

export const HookFormAutocomplete = ({
  options,
  name,
  control,
  placeholder,
  defaultValue = "ALL",
}) => {

  const [gValue, setGValue] = useState(defaultValue);
  const onSelect = useCallback((val, option, onChange) => {
    onChange(option.key);
    setGValue(val);
  }, []);

  return (
    <Controller
      defaultValue={gValue}
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ onChange }) => (
        <AutoComplete
          options={options}
          placeholder={placeholder}
          style={{ width: "90%" }}
          onChange={setGValue}
          onSelect={(val, option) => onSelect(val, option, onChange)}
          value={gValue}
        />
      )}
    />
  );
};
