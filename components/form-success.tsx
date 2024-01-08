import { CheckCircle2 } from "lucide-react";

interface FormSuccessProps {
  message?: string;
}


export const FormSuccess = ({
  message
}: FormSuccessProps) => { 

  if(!message) return null

  return (
    <div className="bg-emerald-600 p-3 rounded-md flex items-center gap-x-2 test-sm test-destructive">
      <CheckCircle2 className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )

}