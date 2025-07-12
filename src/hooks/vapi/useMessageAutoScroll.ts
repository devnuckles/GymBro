import { useEffect, useRef } from "react";
import { Message } from "./useVapiCall";

export function useMessageAutoScroll(messages: Message[]) {
    const messageContainerRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop =
                messageContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return messageContainerRef;
}
