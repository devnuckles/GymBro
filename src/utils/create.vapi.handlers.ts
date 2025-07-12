import { Message } from "@/hooks/vapi/useVapiCall";

interface HandlersParams {
    setCallActive: React.Dispatch<React.SetStateAction<boolean>>;
    setConnecting: React.Dispatch<React.SetStateAction<boolean>>;
    setIsSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
    setCallEnded: React.Dispatch<React.SetStateAction<boolean>>;
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export function createVapiHandlers({
    setCallActive,
    setConnecting,
    setIsSpeaking,
    setCallEnded,
    setMessages,
}: HandlersParams) {
    const onCallStart = () => {
        setConnecting(false);
        setCallActive(true);
        setCallEnded(false);
    };

    const onCallEnd = () => {
        setCallActive(false);
        setConnecting(false);
        setIsSpeaking(false);
        setCallEnded(true);
    };

    const onSpeechStart = () => setIsSpeaking(true);

    const onSpeechEnd = () => setIsSpeaking(false);

    const onMessage = (message: any) => {
        if (
            message.type === "transcript" &&
            message.transcriptType === "final"
        ) {
            setMessages((prev) => [
                ...prev,
                { content: message.transcript, role: message.role },
            ]);
        }
    };

    const onError = (error: any) => {
        console.error("Vapi Error", error);
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
