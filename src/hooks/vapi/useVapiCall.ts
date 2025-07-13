import { vapi } from "@/lib/vapi";
import { useUser } from "@clerk/nextjs";
import { useVapiEvents } from "./useVapiEvents";
import { useVapiCallState } from "./useVapiCallState";
import { useCallEndRedirect } from "./useCallEndRedirect";
import { useErrorSuppression } from "./useErrorSuppression";
import { useMessageAutoScroll } from "./useMessageAutoScroll";
import { createVapiHandlers } from "@/utils/create.vapi.handlers";

export interface Message {
    content: string;
    role: "assistant" | "user";
}

interface UseVapiCallReturn {
    callActive: boolean;
    connecting: boolean;
    isSpeaking: boolean;
    messages: Message[];
    callEnded: boolean;
    toggleCall: () => Promise<void>;
    messageContainerRef: React.RefObject<HTMLDivElement>;
}

export function useVapiCall(): UseVapiCallReturn {
    const {
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
    } = useVapiCallState();

    const { user } = useUser();

    const messageContainerRef = useMessageAutoScroll(messages);

    useCallEndRedirect(callEnded);

    useErrorSuppression(["Meeting has ended"]);

    const vapiHandlers = createVapiHandlers({
        setMessages,
        setCallEnded,
        setCallActive,
        setConnecting,
        setIsSpeaking,
    });

    useVapiEvents(vapiHandlers);

    const toggleCall = async () => {
        if (callActive) {
            vapi.stop();
            return;
        }
        try {
            setConnecting(true);
            setMessages([]);
            setCallEnded(false);

            const fullName = user?.firstName
                ? `${user.firstName} ${user.lastName || ""}`.trim()
                : "There";

            await vapi.start(
                undefined, // no assistant
                undefined, // no assistantOverrides
                undefined, // no squad
                process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, // workflow ID

                {
                    variableValues: {
                        fullName: fullName,
                        userId: user?.id,
                    },
                }
            );
        } catch (error) {
            console.error("Failed to start call", error);
            setConnecting(false);
        }
    };

    return {
        messages,
        callEnded,
        callActive,
        connecting,
        toggleCall,
        isSpeaking,
        messageContainerRef,
    };
}
