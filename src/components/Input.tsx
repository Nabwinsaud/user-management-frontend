// interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   name: string;
//   type: "text" | "email" | "password" | "file";
//   placeholder?: string;
// }
// export default function Input(
//   props: IInputProps,
//   ref: React.Ref<HTMLInputElement>
// ) {
//   const { name, type, placeholder, ...rest } = props;
//   return (
//     <div className="flex flex-col gap-3  my-4">
//       <input
//         ref={ref}
//         className="border rounded-md py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
//         name={name}
//         type={type}
//         placeholder={placeholder}
//         {...rest}
//       />
//     </div>
//   );
// }

import React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: "text" | "email" | "password" | "file";
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ name, type, placeholder, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-3  my-4">
        <input
          required={false}
          ref={ref}
          className="border rounded-md py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
          name={name}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;
