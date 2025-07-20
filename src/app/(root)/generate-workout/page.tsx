"use client";

import { useVapiCall } from "@/hooks/vapi/useVapiCall";
import CallControls from "@/components/platform/generate-workout/call.controls.component";
import CallCardWrapper from "@/components/platform/generate-workout/call.card.wrapper.component";
import MessageContainer from "@/components/platform/generate-workout/message.container.component";

const GenerateWorkout = () => {
    const {
        messages,
        callEnded,
        callActive,
        connecting,
        isSpeaking,
        toggleCall,
        messageContainerRef,
    } = useVapiCall();

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground overflow-hidden pb-6 pt-24">
            <div className="container mx-auto px-4 h-full max-w-5xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold uppercase">
                        <span>Generate Your </span>
                        <span className="text-primary uppercase">
                            Workout Plan
                        </span>
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Have a voice conversation with our AI assistant to
                        create your personalized plan
                    </p>
                </div>

                <CallCardWrapper
                    callEnded={callEnded}
                    isSpeaking={isSpeaking}
                    callActive={callActive}
                />

                <MessageContainer
                    messages={messages}
                    messageContainerRef={messageContainerRef}
                    callEnded={callEnded}
                />

                <CallControls
                    toggleCall={toggleCall}
                    callActive={callActive}
                    callEnded={callEnded}
                    connecting={connecting}
                />
            </div>
        </div>
    );
};
export default GenerateWorkout;
