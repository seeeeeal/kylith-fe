import { useState } from "react";

type DropdownType = "keyboards" | "accessories" | null;

export function useDropdown() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);

  const handleDropdownOpen = (type: DropdownType) => {
    setActiveDropdown(type);
  };

  const handleDropdownClose = (type: DropdownType) => {
    setTimeout(() => {
      if (activeDropdown === type) {
        setActiveDropdown(null);
      }
    }, 150);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  return {
    activeDropdown,
    handleDropdownOpen,
    handleDropdownClose,
    closeAllDropdowns,
  };
}
