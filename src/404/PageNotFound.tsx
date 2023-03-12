import Button from "@components/Button";
import { useNavigate } from "react-router-dom";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <h1 className="uppercase text-5xl animate-bounce duration-200 transition-all text-cyan-600">
        404 Page Not Found
      </h1>
      <div className="my-6 w-[10vw] mx-auto">
        <Button variant="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}
