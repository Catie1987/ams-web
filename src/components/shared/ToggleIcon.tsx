import React, { useState } from 'react';

interface ToggleIconProps {
  onClick?: () => void;
}

const ToggleIcon: React.FC<ToggleIconProps> = ({ onClick }) => {
  const [isShow, setIsShow] = useState(false);

  const showMenu = (event: { preventDefault: () => void; stopPropagation: () => void; }) => {
    event.preventDefault();
    event.stopPropagation();
    setIsShow((prevState) => !prevState);

    // Call the custom event handler if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="w-8 h-8 relative flex items-center justify-center">
      <div
        onClick={showMenu}
        className="flex items-center justify-center h-8 w-8 rounded-full transition-transform duration-300"
      >
        <div
          className={`transform transition-transform duration-300 ${
            isShow ? 'rotate-[360deg]' : 'rotate-0'
          }`}
        >
          <div className="relative">
            <span className="block bg-[--cta2] w-5 h-0.5 absolute top-1/2 -translate-y-1/2"></span>
            <span
              className={`block bg-[--cta2] w-5 h-0.5 transform transition-transform duration-300 ${
                isShow ? '' : 'rotate-90'
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleIcon;
