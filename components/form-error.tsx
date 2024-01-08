import { AlertTriangle } from "lucide-react";

interface FormErrorProps {
  message?: string;
}


export const FormError = ({
  message
}: FormErrorProps) => { 

  if(!message) return null

  return (
    <div className="bg-[firebrick] p-3 rounded-md flex items-center gap-x-2 test-sm test-destructive">
      <AlertTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )

}