import React from "react";
import { Link } from "react-router-dom";
import { RadioButtonIcon } from "./Icons";

interface DropdownProps {
  title: string;
  subitems: { title: string; to: string; target?: boolean }[];
  isOpen: boolean;
  onToggle: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  subitems,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={onToggle}
        className="inline-flex justify-center w-full rounded-md items-center"
      >
        {title}
        <svg
          className={`ml-1 h-5 w-5 transition-transform ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute list-disc left-0 w-fit whitespace-nowrap mt-2 origin-top-left bg-white border rounded-xl shadow-lg z-50 animate-slideFromTop opacity-0">
          {subitems.map((subitem, index) => (
            <li
              className="flex items-center justify-start p-4 gap-4 text-base rounded-xl text-black hover:bg-gray-100"
              key={index}
            >
              <RadioButtonIcon className="size-4" />
              {subitem.target ? (
                <a href={subitem.to} target="_blank">{subitem.title}</a>
              ) : (
                <Link to={subitem.to}>{subitem.title}</Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
