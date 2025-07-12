import { useState } from "react";
import { Message } from "./useVapiCall";

export function useVapiCallState() {
    const [callEnded, setCallEnded] = useState(false);
    const [callActive, setCallActive] = useState(false);
    const [connecting, setConnecting] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);

    return {
        callEnded,
        setCallEnded,
        callActive,
        setCallActive,
        connecting,
        setConnecting,
        isSpeaking,
        setIsSpeaking,
        messages,
        setMessages,
    };
}
