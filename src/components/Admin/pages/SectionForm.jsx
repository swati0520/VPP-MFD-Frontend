import { useMemo } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Plus, RotateCcw, Save, Trash2 } from "lucide-react";
import Button from "./Button";
import Card from "./Card";
import FormField from "./FormField";
import ImageUpload from "./ImageUpload";

const getDefaultValue = (field) => field.defaultValue ?? (field.type === "select" ? field.options?.[0]?.value || "" : "");

const buildDefaults = (fields, dynamicFields, dynamicName) => ({
  ...Object.fromEntries(fields.map((field) => [field.name, getDefaultValue(field)])),
  [dynamicName]: dynamicFields.length
    ? [Object.fromEntries(dynamicFields.map((field) => [field.name, getDefaultValue(field)]))]
    : [],
});

const getError = (errors, fieldName) => fieldName.split(".").reduce((value, key) => value?.[key], errors);

const renderField = (field, register, errors, prefix = "") => {
  const name = prefix ? `${prefix}.${field.name}` : field.name;
  const className = field.fullWidth ? "md:col-span-2" : "";
  const props = { ...field, key: name, name, register, error: getError(errors, name), className };
  return field.type === "image" ? <ImageUpload {...props} /> : <FormField {...props} />;
};

export default function SectionForm({
  title,
  description,
  fields = [],
  dynamic = false,
  dynamicName = "items",
  dynamicFields = [],
  addButtonLabel = "Add New Item",
  itemLabel = "Item",
}) {
  const defaults = useMemo(
    () => buildDefaults(fields, dynamicFields, dynamicName),
    [dynamicFields, dynamicName, fields]
  );

  const { control, formState: { errors }, handleSubmit, register, reset } = useForm({ defaultValues: defaults });
  const { fields: items, append, remove } = useFieldArray({ control, name: dynamicName });
  const emptyItem = useMemo(
    () => Object.fromEntries(dynamicFields.map((field) => [field.name, getDefaultValue(field)])),
    [dynamicFields]
  );

  const onSubmit = () => {};

  return (
    <Card title={title}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {description && <p className="text-sm leading-6 text-[#6B7280] dark:text-[#D1D5DB]">{description}</p>}
        {fields.length > 0 && <div className="grid grid-cols-1 gap-6 md:grid-cols-2">{fields.map((field) => renderField(field, register, errors))}</div>}

        {dynamic && (
          <div className="space-y-5">
            <div className="flex flex-col gap-3 border-t border-[#BFDBFE] pt-6 dark:border-[#1E3A8A] sm:flex-row sm:items-center sm:justify-between">
              <h4 className="text-sm font-bold text-[#4A044E] dark:text-white">{itemLabel}s</h4>
              <Button type="button" variant="secondary" onClick={() => append({ ...emptyItem })}><Plus size={16} /> {addButtonLabel}</Button>
            </div>
            {items.map((item, index) => (
              <div key={item.id} className="space-y-5 rounded-xl border border-[#BFDBFE] p-5 dark:border-[#1E3A8A]">
                <div className="flex items-center justify-between gap-3">
                  <h5 className="font-semibold text-[#4A044E] dark:text-white">{itemLabel} {index + 1}</h5>
                  <Button type="button" variant="ghost" onClick={() => remove(index)}><Trash2 size={16} /> Remove</Button>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">{dynamicFields.map((field) => renderField(field, register, errors, `${dynamicName}.${index}`))}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-3 border-t border-[#BFDBFE] pt-6 dark:border-[#1E3A8A] sm:flex-row">
          <Button type="submit"><Save size={16} /> Save</Button>
          <Button type="button" variant="ghost" onClick={() => reset(defaults)}><RotateCcw size={16} /> Reset</Button>
        </div>
      </form>
    </Card>
  );
}
