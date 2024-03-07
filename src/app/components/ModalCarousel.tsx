"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

const ModalCarousel = ({ children }: { children: React.ReactNode }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="absolute z-50 bottom-4 right-4 bg-yellow-400 px-2 py-1 rounded-lg">
        🔍
      </AlertDialogTrigger>

      <AlertDialogContent>
        <div className="flex justify-end relative -translate-y-4 translate-x-4">
          <AlertDialogCancel className="p-2 absolute z-20">
            <X />
          </AlertDialogCancel>
        </div>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalCarousel;
