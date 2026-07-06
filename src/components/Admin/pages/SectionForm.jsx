import { useMemo } from "react";

import { useFieldArray, useForm } from "react-hook-form";

import { Plus, RotateCcw, Save, Trash2, X } from "lucide-react";

import Card from "./Card";

import Button from "./Button";

import FormField from "./FormField";

import ImageUpload from "./ImageUpload";



const getDefaultValue = (field) => {

  if (field.defaultValue !== undefined) return field.defaultValue;

  if (field.type === "select") return field.options?.[0]?.value || "";

  return "";

};



const buildDefaults = (fields, dynamicFields, dynamicName) => ({

  ...fields.reduce((values, field) => {

    values[field.name] = getDefaultValue(field);

    return values;

  }, {}),

  [dynamicName]:

    dynamicFields.length > 0

      ? [

        dynamicFields.reduce((values, field) => {

          values[field.name] = getDefaultValue(field);

          return values;

        }, {}),

      ]

      : [],

});



const getError = (errors, fieldName) =>

  fieldName.split(".").reduce((value, key) => value?.[key], errors);



const renderField = (field, register, errors, namePrefix = "") => {

  const fieldName = namePrefix ? `${namePrefix}.${field.name}` : field.name;

  const fieldClassName = field.fullWidth ? "md:col-span-2" : "";

  const error = getError(errors, fieldName);



  if (field.type === "image") {

    return (

      <ImageUpload

        key={fieldName}

        label={field.label}

        name={fieldName}

        register={register}

        validation={field.validation}

        error={error}

        className={fieldClassName}

      />

    );

  }



  return (

    <FormField

      key={fieldName}

      {...field}

      name={fieldName}

      register={register}

      className={fieldClassName}

      error={error}

    />

  );

};



const SectionForm = ({

  title,

  description,

  fields = [],

  dynamic = false,

  dynamicName = "items",

  dynamicFields = [],

  addButtonLabel = "Add New Item",

  itemLabel = "Item",

}) => {

  const defaultValues = useMemo(

    () => buildDefaults(fields, dynamicFields, dynamicName),

    [fields, dynamicFields, dynamicName]

  );



  const {

    control,

    formState: { errors },

    handleSubmit,

    register,

    reset,

  } = useForm({ defaultValues });

  const { fields: items, append, remove } = useFieldArray({ control, name: dynamicName });



  const emptyItem = useMemo(

    () =>

      dynamicFields.reduce((values, field) => {

        values[field.name] = getDefaultValue(field);

        return values;

      }, {}),

    [dynamicFields]

  );



  const onSubmit = (data) => {

    console.log(`${title} saved`, data);

  };



  return (

    <Card title={title}>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {description && (

          <p className="text-sm leading-6 text-[#6B7280] dark:text-[#D1D5DB]">{description}</p>

        )}



        {fields.length > 0 && (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {fields.map((field) => renderField(field, register, errors))}

          </div>

        )}



        {dynamic && (

          <div className="space-y-5">

            <div className="flex flex-col gap-3 border-t border-[#BFDBFE] dark:border-[#1E3A8A] pt-6 sm:flex-row sm:items-center sm:justify-between">

              <h4 className="text-sm font-bold text-[#4A044E] dark:text-[#FFFFFF]">

                {itemLabel}s

              </h4>

              <Button type="button" variant="secondary" onClick={() => append({ ...emptyItem })}>

                <Plus size={16} /> {addButtonLabel}

              </Button>

            </div>



            {items.map((item, index) => (

              <div

                key={item.id}

                className="rounded-xl border border-[#BFDBFE] dark:border-[#1E3A8A] p-5 space-y-5"

              >

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <h5 className="font-semibold text-[#4A044E] dark:text-[#FFFFFF]">

                    {itemLabel} {index + 1}

                  </h5>

                  {items.length > 1 && (

                    <Button type="button" variant="ghost" onClick={() => remove(index)}>

                      <Trash2 size={16} /> Remove {itemLabel}

                    </Button>

                  )}

                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {dynamicFields.map((field) =>

                    renderField(field, register, errors, `${dynamicName}.${index}`)

                  )}

                </div>

              </div>

            ))}

          </div>

        )}



        <div className="flex flex-col gap-3 border-t border-[#BFDBFE] dark:border-[#1E3A8A] pt-6 sm:flex-row">

          <Button type="submit">

            <Save size={16} /> Save

          </Button>

          <Button type="button" variant="ghost" onClick={() => reset(defaultValues)}>

            <RotateCcw size={16} /> Reset

          </Button>

          <Button type="button" variant="ghost" onClick={() => reset(defaultValues)}>

            <X size={16} /> Cancel

          </Button>

        </div>

      </form>

    </Card>

  );

};



export default SectionForm;