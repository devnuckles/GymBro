import { Message } from "@/hooks/vapi/useVapiCall";

interface HandlersParams {
    setCallActive: React.Dispatch<React.SetStateAction<boolean>>;
    setConnecting: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
    setCallEnded: React.Dispatch<React.SetStateAction<boolean>>;
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

// Strictly define expected structure of a transcript message
interface TranscriptMessage {
    type: "transcript";
    transcriptType: "final" | "interim";
    transcript: string;
    role: "assistant" | "user";
}

// Optional: More message types can be added here
type VapiMessage = TranscriptMessage | Record<string, unknown>;

interface VapiError {
    message: string;
    code?: number;
    stack?: string;
}

export function createVapiHandlers({
    setCallActive,
    setConnecting,
    setIsSpeaking,
    setCallEnded,
    setMessages,
}: HandlersParams) {
    const onCallStart = (): void => {
        setConnecting(false);
        setCallActive(true);
        setCallEnded(false);
    };

    const onCallEnd = (): void => {
        setCallActive(false);
        setConnecting(false);
        setIsSpeaking(false);
        setCallEnded(true);
    };

    const onSpeechStart = (): void => {
        setIsSpeaking(true);
    };

    const onSpeechEnd = (): void => {
        setIsSpeaking(false);
    };

    const onMessage = (message: VapiMessage): void => {
        if (
            message.type === "transcript" &&
            message.transcriptType === "final" &&
            typeof message.transcript === "string" &&
            (message.role === "assistant" || message.role === "user")
        ) {
            const newMessage: Message = {
                content: message.transcript,
                role: message.role,
            };
            setMessages((prev) => [...prev, newMessage]);
        }
    };

    const onError = (error: VapiError): void => {
        console.error("Vapi Error:", error.message);
        setConnecting(false);
        setCallActive(false);
    };

    return {
        onCallStart,
        onCallEnd,
        onSpeechStart,
        onSpeechEnd,
        onMessage,
        onError,
    };
}
