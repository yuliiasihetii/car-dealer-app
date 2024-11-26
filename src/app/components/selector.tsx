import React from "react";

interface SelectorProps<T> {
  id: string;
  label: string;
  options: T[];
  value: string | number | null;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  optionKey: string;
  optionLabel: string;
}

const Selector = <T extends {}>({
  id,
  label,
  options,
  value,
  onChange,
  optionKey,
  optionLabel,
}: SelectorProps<T>) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-lg mb-2">
        {label}
      </label>
      <select
        id={id}
        className="p-2 border rounded-md w-[300px]"
        value={value || ""}
        onChange={onChange}
      >
        <option value="">Select {label}</option>
        {options?.map((option: any) => (
          <option key={option[optionKey]} value={option[optionKey]}>
            {option[optionLabel]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
