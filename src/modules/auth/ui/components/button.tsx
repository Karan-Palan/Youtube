import { Button } from "@/components/ui/button";
import { UserCircle2Icon } from "lucide-react";

export const AuthButton = () => {
    return (
        // add auth states
        <Button variant="outline" className="px-4 py-2 font-medium text-blue-600 hover:text-blue-500 border-blue-500/2 rounded-full">
            <UserCircle2Icon/>
            Sign In
        </Button>
    )
}