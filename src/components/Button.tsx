interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  variant: "primary" | "secondary" | "danger" | "success";
  children: React.ReactNode;
}
export default function Button({
  loading,
  loadingText,
  variant,
  children,
  ...rest
}: ButtonProps) {
  const baseClasses =
    "px-4 py-1 rounded-md w-full text-white focus:outline-none focus:shadow-outline transition duration-200 ease-in-out";
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "bg-blue-500 hover:bg-blue-600 active:bg-blue-700";
      break;

    case "secondary":
      variantClasses = "bg-gray-500 hover:bg-gray-600 active:bg-gray-700";
      break;

    case "danger":
      variantClasses = "bg-red-500 hover:bg-red-600 active:bg-red-700";
      break;

    case "success":
      variantClasses = "bg-green-500 hover:bg-green-600 active:bg-green-700";
      break;

    default:
      variantClasses = "bg-blue-500 hover:bg-blue-600 active:bg-blue-700";
  }
  return (
    <button
      {...rest}
      disabled={loading}
      className={`${baseClasses} ${variantClasses}`}
    >
      {loading ? (loadingText ? loadingText : "Loading...") : children}
    </button>
  );
}
