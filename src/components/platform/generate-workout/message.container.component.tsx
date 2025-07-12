import { RefObject } from "react";

interface Message {
    content: string;
    role: "assistant" | "user";
}

interface MessageContainerProps {
    messages: Message[];
    callEnded: boolean;
    messageContainerRef: RefObject<HTMLDivElement>;
}

const MessageContainer = ({
    messages,
    callEnded,
    messageContainerRef,
}: MessageContainerProps) => {
    return (
        <>
            {messages.length > 0 && (
                <div
                    ref={messageContainerRef}
                    className="w-full bg-card/90 backdrop-blur-sm border border-border rounded-xl p-4 mb-8 h-64 overflow-y-auto transition-all duration-300 scroll-smooth"
                >
                    <div className="space-y-3">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className="message-item animate-fadeIn"
                            >
                                <div className="font-semibold text-xs text-muted-foreground mb-1">
                                    {msg.role === "assistant"
                                        ? "GymBro AI"
                                        : "You"}
                                    :
                                </div>
                                <p className="text-foreground">{msg.content}</p>
                            </div>
                        ))}

                        {callEnded && (
                            <div className="message-item animate-fadeIn">
                                <div className="font-semibold text-xs text-primary mb-1">
                                    System:
                                </div>
                                <p className="text-foreground">
                                    Your fitness program has been created!
                                    Redirecting to your profile...
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default MessageContainer;
