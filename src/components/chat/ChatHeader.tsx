
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { StorageSidebar } from "@/components/sidebar/StorageSidebar";

export const ChatHeader = () => {
  return (
    <header className="bg-white border-b p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <StorageSidebar />
          </SheetContent>
        </Sheet>
        
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">S</div>
          <h1 className="text-xl font-bold ml-2">Stor-a-gentic</h1>
        </div>
      </div>
      
      <div>
        <Button variant="outline" size="sm">
          New Chat
        </Button>
      </div>
    </header>
  );
};
