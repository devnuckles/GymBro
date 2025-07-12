import DynamicButton from "@/components/common/dynamic.button.component";

interface CallControlsProps {
    callEnded: boolean;
    callActive: boolean;
    connecting: boolean;
    toggleCall: () => void;
}

const CallControls = ({
    callEnded,
    toggleCall,
    callActive,
    connecting,
}: CallControlsProps) => {
    return (
        <div className="w-full flex justify-center gap-4">
            <DynamicButton
                onClick={toggleCall}
                variant={callActive || callEnded ? undefined : "gradient"}
                disabled={connecting || callEnded}
                className="relative"
                btnText={
                    callActive
                        ? "End Call"
                        : connecting
                          ? "Connecting..."
                          : callEnded
                            ? "View Profile"
                            : "Start Call"
                }
                btnIcon={
                    connecting && (
                        <span className="absolute inset-0 rounded-full animate-ping bg-primary/50 opacity-75" />
                    )
                }
            />
        </div>
    );
};

export default CallControls;
