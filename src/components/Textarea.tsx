interface TextareaProps {
    label: string;
    id: string;
    name: string;
    rows?: number;
    cols?: number;
    placeholder?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
  }
  
  const Textarea: React.FC<TextareaProps> = ({
    label,
    id,
    name,
    rows = 4,
    cols = 50,
    placeholder = "",
    value,
    onChange,
    className = "",
  }) => {
    return (
      <div className={`w-full space-y-2 ${className}`}>
        <label className="font-semibold p-2" htmlFor={id}>
          {label} :
        </label>
        <br />
        <textarea
          id={id}
          name={name}
          rows={rows}
          cols={cols}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="border-2 border-[#e6c2bf] bg-white rounded-xl py-1 px-4 w-full resize-none"
        />
        <br />
      </div>
    );
  };
  
  export default Textarea;
  