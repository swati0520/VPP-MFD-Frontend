import { forwardRef } from "react";

const inputClass =
  "w-full p-3 rounded-xl bg-[#FFF5F7] dark:bg-[#0B0B0F] border border-[#BFDBFE] dark:border-[#1E3A8A] focus:ring-2 focus:ring-[#0EA5E9] dark:focus:ring-[#60A5FA] outline-none text-[#4A044E] dark:text-[#FFFFFF] placeholder:text-[#94A3B8]";

const errorClass = "border-[#EF4444] focus:ring-[#EF4444] dark:border-[#EF4444]";

const FormField = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      options = [],
      rows = 4,
      className = "",
      error,
      min,
      max,
      step,
      register,
      name,
      validation,
      ...fieldProps
    },
    ref
  ) => {
    const fieldClass = `${inputClass} ${error ? errorClass : ""}`;
    const registerProps = register && name ? register(name, validation) : {};

    const setRefs = (element) => {
      registerProps.ref?.(element);

      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    return (
      <div className={`space-y-1.5 ${className}`}>
        <label className="text-xs font-bold text-[#4A044E] dark:text-[#FFFFFF] uppercase">
          {label}
        </label>

        {type === "textarea" ? (
          <textarea
            {...registerProps}
            ref={setRefs}
            {...fieldProps}
            rows={rows}
            placeholder={placeholder}
            className={`${fieldClass} resize-y`}
            aria-invalid={Boolean(error)}
          />
        ) : type === "select" ? (
          <select
            {...registerProps}
            ref={setRefs}
            {...fieldProps}
            className={fieldClass}
            aria-invalid={Boolean(error)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            {...registerProps}
            ref={setRefs}
            {...fieldProps}
            type={type}
            placeholder={placeholder}
            min={min}
            max={max}
            step={step}
            className={fieldClass}
            aria-invalid={Boolean(error)}
          />
        )}

        {error?.message && <p className="text-xs font-medium text-[#EF4444]">{error.message}</p>}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
