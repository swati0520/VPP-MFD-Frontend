/* eslint-disable react/prop-types */

import { forwardRef } from "react";
import { UploadCloud } from "lucide-react";

const ImageUpload = forwardRef(
  ({ label, error, className = "", register, name, validation, ...fieldProps }, ref) => {
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
        <label
          className={`w-full h-32 border-2 border-dashed ${
            error ? "border-[#EF4444]" : "border-[#BFDBFE] dark:border-[#1E3A8A]"
          } rounded-xl flex flex-col items-center justify-center text-[#6B7280] hover:bg-[#DBEAFE] dark:hover:bg-[#1E3A8A] cursor-pointer transition-all`}
        >
          <UploadCloud size={24} />
          <span className="text-xs mt-2">Upload image</span>
          <input
            {...registerProps}
            ref={setRefs}
            {...fieldProps}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            className="sr-only"
            aria-invalid={Boolean(error)}
          />
        </label>
        {error?.message && <p className="text-xs font-medium text-[#EF4444]">{error.message}</p>}
      </div>
    );
  }
);

ImageUpload.displayName = "ImageUpload";

export default ImageUpload;
