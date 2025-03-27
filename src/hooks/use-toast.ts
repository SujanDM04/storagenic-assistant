
import { toast as sonnerToast, ToastT } from "sonner"

export type ToastProps = Omit<ToastT, "id">

const useToast = () => {
  const toast = (props: ToastProps) => {
    sonnerToast(props.title, {
      description: props.description,
      action: props.action,
      icon: props.icon,
      duration: props.duration,
    })
  }

  return { toast }
}

export { useToast }
export type { ToastProps }
