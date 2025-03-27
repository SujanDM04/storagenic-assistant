
import { Button } from "@/components/ui/button";

interface QuickReplyOption {
  id: string;
  label: string;
  action: () => void;
}

interface QuickReplyButtonsProps {
  options: QuickReplyOption[];
}

export const QuickReplyButtons = ({ options }: QuickReplyButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {options.map((option) => (
        <Button
          key={option.id}
          variant="outline"
          size="sm"
          onClick={option.action}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
