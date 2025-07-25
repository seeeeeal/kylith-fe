import clsx from "clsx";
import { FiMinus, FiPlus } from "react-icons/fi";

type InputNumberProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
  className?: string;
};

const InputNumber: React.FC<InputNumberProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
  disabled = false,
  className,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      handleIncrease();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      handleDecrease();
    }
  };

  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (isNaN(newValue) || newValue < min) {
      onChange(min);
    } else if (newValue > max) {
      onChange(max);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleIncrease();
    } else {
      handleDecrease();
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      onWheel={handleWheel}
      className={clsx(
        "h-8 inline-flex items-center border rounded-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <button
        onClick={handleDecrease}
        className="p-2 text-sm"
        disabled={disabled}
        type="button"
      >
        <FiMinus />
      </button>
      <input
        type="number"
        value={value}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onFocus={handleFocus}
        min={min}
        max={max}
        disabled={disabled}
        className="text-sm w-12 text-center border-none outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        onClick={handleIncrease}
        className="p-2 text-sm"
        disabled={disabled}
        type="button"
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default InputNumber;
