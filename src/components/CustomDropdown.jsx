import { useState, useEffect, useRef } from "react";

const CustomDropdown = ({ options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left bg-purple-700 rounded-r-lg min-h-full h-full">
      <button
        type="button"
        className="rounded-r-lg min-h-full h-full cursor-pointer text-xl bg-purple-700 inline-flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={selected.icon}
          alt="bandera del idioma seleccionado"
          className="w-10"
        />
      </button>

      {isOpen && (
        <div className="bg-purple-700 absolute right-0 mt-2 w-40 rounded-md">
          <div className="py-1">
            {options.map((option) => (
              <div
                key={option.id}
                className="px-4 py-1 text-sm cursor-pointer flex items-center hover:bg-purple-500"
                onClick={() => handleSelect(option)}
              >
                <img
                  src={option.icon}
                  alt="bandera del idioma seleccionado"
                  className="w-10"
                />
                {option.texto}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
