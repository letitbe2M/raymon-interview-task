import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/utils";

type Props = {
  label: string;
  placeholder: string;
  id: string;
  register?: any;
  required?: boolean;
  errors?: any;
  maxLength?: number;
};

export function TextareaWithLabel({
  label,
  placeholder,
  id,
  register,
  required,
  errors,
  maxLength,
}: Props) {
  const hasError = errors && errors[id] && errors[id]?.message;
  return (
    <div className="grid w-full gap-1.5">
      <Label
        htmlFor="message"
        className={cn(
          hasError && "!text-red-500",
          "bg-white z-10 absolute ml-5 -mt-2 px-2 items-center justify-center flex text-gray-800",
          required && "flex gap-2"
        )}
      >
        {label}
        {required && <span className=" pt-1 pr-2 text-red-500">*</span>}
      </Label>
      <Textarea
        {...register?.(id)}
        placeholder={placeholder}
        maxLength={maxLength}
        id={id}
        className={cn(
          hasError && "!border-red-500",
          " border text-black border-primary relative bg-white focus-visible:ring-0 focus-visible:ring-offset-0 outline-none placeholder-shown:items-center"
        )}
      />
      {hasError && (
        <div className="text-[11px] text-right w-full flex gap-1 items-center text-red-500">
          <p className="mt-1">*</p>
          <p>{errors[id]!.message as string}</p>
        </div>
      )}
    </div>
  );
}
