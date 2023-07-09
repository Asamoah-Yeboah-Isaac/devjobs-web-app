import  { useState } from 'react';

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`block ${
            isChecked ? 'bg-white' : 'bg-white'
          } w-10 h-6 rounded-full`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-indigo-500 w-4 h-4 rounded-full transition hover:bg-indigo-300 ${
            isChecked ? 'transform translate-x-4' : ''
          }`}
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
