import Header from "@/components/common/header.component";
import { ReactNode } from "react";

const rootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <div className="py-26">{children}</div>
        </>
    );
};

export default rootLayout;
