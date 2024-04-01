import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

import { ModalProvider } from "@/components/providers/modal-providers";
import { QueryProvider } from "@/components/providers/query-provider";

const PlatfromLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClerkProvider>
            <QueryProvider>
                <Toaster />
                <ModalProvider />
                {children}
            </QueryProvider>
        </ClerkProvider>
    );
};

export default PlatfromLayout;
