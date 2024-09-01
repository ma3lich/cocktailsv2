interface InputProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  min?: string | number;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // Ajout de className pour des styles personnalisés
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  id,
  name,
  required = false,
  placeholder = "",
  min,
  value,
  onChange,
  className = "", // Valeur par défaut pour className
}) => {
  return (
    <div className={`w-full space-y-2 ${className}`}>
      {" "}
      {/* Ajout de className ici */}
      <label className="font-semibold p-2 text-sm" htmlFor={id}>
        {label} {required && <span style={{ color: "red" }}>*</span>} :
      </label>
      <br />
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        min={min}
        value={value}
        onChange={onChange}
        className="border-2 border-[#e6c2bf] bg-white rounded-xl py-1 px-4 w-full"
      />
      <br />
    </div>
  );
};

export default Input;
