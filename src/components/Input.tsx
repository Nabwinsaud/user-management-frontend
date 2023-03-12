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

import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import cls from "classnames";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: "text" | "email" | "password" | "file" | "number";
  placeholder?: string;
}
// const testClass1 = cls("fizz", "buzz");
// const testClass2 = cls("fizz", { buzz: true });
// const testClass3 = cls({ "fizz-buzz": false });
// console.log("testclass1 is", testClass1);

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ name, type, placeholder, ...rest }, ref) => {
    const [show, setShow] = useState<boolean>(false);
    const toggleShow = () => setShow(!show);
    return (
      <div className="relative flex flex-col gap-3  my-4 ">
        <input
          required={false}
          ref={ref}
          className={`border rounded-md py-2 px-2 text-gray-600 leading-tight focus:outline-none focus:shadow-outline`}
          name={name}
          accept={
            type === "file" ? "image/png, image/jpeg,image/jpg" : undefined
            // type === "file" ? "image/png" : undefined
          }
          // type={type}
          type={type === "password" ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          {...rest}
        />

        {type === "password" && (
          <button onClick={toggleShow} className="absolute  z-10 top-3 right-3">
            {show ? <AiFillEye /> : <AiFillEyeInvisible />}
          </button>
        )}
      </div>
    );
  }
);

export default Input;
