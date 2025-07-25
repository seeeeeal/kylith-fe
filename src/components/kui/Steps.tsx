import React from "react";
import clsx from "clsx";
import { FiCheck } from "react-icons/fi";

type StepsProps = {
  steps: string[];
  currentStep: number;
};

const styleMap = {
  default: "bg-kui-default text-white",
  active: "bg-kui-default text-white",
  completed: "bg-kui-default/20",
  inactive: "bg-white border border-gray-300",
};

const KuiSteps: React.FC<StepsProps> = ({ steps, currentStep }) => {
  if (steps.length === 0) {
    return null;
  }
  if (currentStep < 0 || currentStep >= steps.length) {
    console.warn(`Invalid currentStep: ${currentStep}`);
  }

  return (
    <div className="flex w-full max-w-3xl mx-auto">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const showLine = index > 0;

        return (
          <div key={index} className="flex justify-center flex-1 relative">
            <div className="flex flex-col items-center">
              <div
                role="button"
                aria-label={`Step ${index + 1}: ${step}`}
                aria-current={isActive ? "step" : undefined}
                className={clsx(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ease-in-out",
                  isActive
                    ? styleMap.active
                    : isCompleted
                    ? styleMap.completed
                    : styleMap.inactive
                )}
              >
                {isCompleted ? <FiCheck /> : index + 1}
              </div>
              <div
                className={`mt-2 text-sm ${
                  isActive ? "text-kui-default" : "text-kui-secondary"
                }`}
              >
                {step}
              </div>
            </div>

            {showLine && (
              <div className="absolute top-4 left-[calc(-50%+1.5rem)] right-[calc(50%+1.5rem)] h-0.5 -translate-y-1/2 bg-kui-border"></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default KuiSteps;
