import Header from "@/components/common/header.component";
import { ReactNode } from "react";

const rootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default rootLayout;
