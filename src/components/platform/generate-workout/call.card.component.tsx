import DynamicCard from "@/components/common/dynamic.card.component";
import Image from "next/image";

export interface CallCardProps {
    isSpeaking: boolean;
    callActive: boolean;
    callEnded: boolean;
    userImage: string | undefined;
    userFullName: string;
    userTitle: string;
    userStatus: boolean;
}

const CallCard = ({
    isSpeaking,
    callActive,
    callEnded,
    userImage,
    userTitle,
    userStatus,
    userFullName,
}: CallCardProps) => {
    return (
        <DynamicCard
            cardFor="ai-assistant"
            content={
                <div className="aspect-video flex flex-col items-center justify-center p-6 relative">
                    {/* AI VOICE ANIMATION */}
                    <div
                        className={`absolute inset-0 ${
                            isSpeaking ? "opacity-30" : "opacity-0"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-center items-center h-20">
                            {[...Array(5)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`mx-1 h-16 w-1 bg-primary rounded-full ${
                                        isSpeaking ? "animate-sound-wave" : ""
                                    }`}
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* AI IMAGE */}
                    <div className="relative size-32 mb-4">
                        <div
                            className={`absolute inset-0 bg-primary opacity-10 rounded-full blur-lg ${
                                isSpeaking ? "animate-pulse" : ""
                            }`}
                        />
                        <div className="relative w-full h-full rounded-full bg-card flex items-center justify-center border border-border overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-secondary/10" />
                            {userImage && (
                                <Image
                                    fill
                                    src={userImage}
                                    alt="User Image"
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    </div>

                    <h2 className="text-xl font-bold text-foreground">
                        {userFullName}
                    </h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        {userTitle}
                    </p>

                    {/* SPEAKING INDICATOR */}

                    {userStatus ? (
                        <div className="mt-2 flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border">
                            <div className="w-2 h-2 rounded-full bg-muted" />
                            <span className="text-xs text-muted-foreground">
                                Ready
                            </span>
                        </div>
                    ) : (
                        <div
                            className={`mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border ${
                                isSpeaking ? "border-primary" : ""
                            }`}
                        >
                            <div
                                className={`w-2 h-2 rounded-full ${
                                    isSpeaking
                                        ? "bg-primary animate-pulse"
                                        : "bg-muted"
                                }`}
                            />
                            <span className="text-xs text-muted-foreground">
                                {isSpeaking
                                    ? "Speaking..."
                                    : callActive
                                      ? "Listening..."
                                      : callEnded
                                        ? "Redirecting to profile..."
                                        : "Waiting..."}
                            </span>
                        </div>
                    )}
                </div>
            }
        />
    );
};

export default CallCard;
