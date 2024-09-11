"use client";
import CustomButton2 from "@/components/CustomButton";
import CustomForm from "@/components/CustomForm";
import CustomInput from "@/components/CustomInput";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { contactMeSchema } from "../../lib/schemas";
import { TextareaWithLabel } from "@/components/TextareaWithLabel";

type Inputs = z.infer<typeof contactMeSchema>;
const FormSubmitMessageInContact: React.FC = () => {
  const methods = useForm<Inputs>({
    resolver: zodResolver(contactMeSchema),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, defaultValues },
  } = methods;

  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-10 overflow-x-hidden pt-4 pb-16 ">
          <CustomInput
            label="name"
            id="name"
            placeholder="insert name"
            register={register}
            errors={errors}
            required
            maxLength={15}
          />
          <CustomInput
            label="email"
            id="email"
            placeholder=" insert email "
            register={register}
            errors={errors}
            required
            maxLength={30}
          />
          <TextareaWithLabel
            id="message"
            register={register}
            label="message"
            placeholder="insert message"
            key="message"
            errors={errors}
            maxLength={1000}
            required
          />
        </div>
        <div className="pb-14 md:pb-0 lg:pb-0">
          <CustomButton2
            title="send"
            type="submit"
            isLoading={isSubmitting}
          />
        </div>
      </div>
    </CustomForm>
  );
};

export default FormSubmitMessageInContact;
