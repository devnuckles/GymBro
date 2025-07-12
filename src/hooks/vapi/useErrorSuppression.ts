import { useEffect } from "react";

export function useErrorSuppression(errorMessagesToSuppress: string[]) {
    useEffect(() => {
        const originalError = console.error;
        console.error = function (msg, ...args) {
            const fullMessage =
                typeof msg === "string" ? msg : JSON.stringify(msg);
            const argMessage = args
                .map((arg) =>
                    typeof arg === "string" ? arg : JSON.stringify(arg)
                )
                .join(" ");

            const combinedMessage = `${fullMessage} ${argMessage}`.trim();

            if (
                errorMessagesToSuppress.some((errorMessage) =>
                    combinedMessage.includes(errorMessage)
                )
            ) {
                console.log(`Ignoring known error: ${combinedMessage}`);
                return;
            }
            return originalError.call(console, msg, ...args);
        };
        return () => {
            console.error = originalError;
        };
    }, [errorMessagesToSuppress]);
}
