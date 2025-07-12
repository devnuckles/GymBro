import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useCallEndRedirect(callEnded: boolean) {
    const router = useRouter();

    useEffect(() => {
        if (!callEnded) return;

        const timer = setTimeout(() => {
            router.push("/profile");
        }, 1500);

        return () => clearTimeout(timer);
    }, [callEnded, router]);
}
