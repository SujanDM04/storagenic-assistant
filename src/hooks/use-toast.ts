
import { toast as sonnerToast, type Toast as SonnerToast } from "sonner"

type ToastProps = Omit<SonnerToast, "id">

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
