import { vapi } from "@/lib/vapi";
import { useEffect } from "react";
import { createVapiHandlers } from "@/utils/create.vapi.handlers";

export function useVapiEvents(handlers: ReturnType<typeof createVapiHandlers>) {
    const {
        onError,
        onMessage,
        onCallEnd,
        onSpeechEnd,
        onCallStart,
        onSpeechStart,
    } = handlers;

    useEffect(() => {
        vapi.on("call-start", onCallStart)
            .on("call-end", onCallEnd)
            .on("speech-start", onSpeechStart)
            .on("speech-end", onSpeechEnd)
            .on("message", onMessage)
            .on("error", onError);

        return () => {
            vapi.off("call-start", onCallStart)
                .off("call-end", onCallEnd)
                .off("speech-start", onSpeechStart)
                .off("speech-end", onSpeechEnd)
                .off("message", onMessage)
                .off("error", onError);
        };
    }, [
        onError,
        onMessage,
        onCallEnd,
        onSpeechEnd,
        onCallStart,
        onSpeechStart,
    ]);
}
