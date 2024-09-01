interface RadioProps {
    label: string;
    id: string;
    name: string;
    value: string;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
  }
  
  const Radio: React.FC<RadioProps> = ({
    label,
    id,
    name,
    value,
    checked = false,
    onChange,
    className = "",
  }) => {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          required={true}
          className={`form-radio text-[#e6c2bf] appearance-none bg-white border-2 border-[#999] transition-all duration-200 
            w-6 h-6 rounded-full checked:border-custom`}
          style={{ 
            aspectRatio: '1 / 1', 
            padding: '1.2%', 
            margin: '0 2%' 
          }}
        />
        <label htmlFor={id} className="font-semibold">{label}</label>
      </div>
    );
  };
  
  export default Radio;
  