"use client";

import { useUser } from "@clerk/nextjs";
import CallCard from "./call.card.component";

interface CallCardWrapperProps {
    isSpeaking: boolean;
    callActive: boolean;
    callEnded: boolean;
}

const CallCardWrapper = ({
    isSpeaking,
    callActive,
    callEnded,
}: CallCardWrapperProps) => {
    const { user } = useUser();

    const callCardData = [
        {
            userStatus: false,
            userFullName: "GymBro AI",
            userTitle: "Fitness & Diet Coach",
            userImage: "/assets/robot-headshot.jpg",
        },
        {
            userStatus: true,
            userTitle: "Trainee",
            userFullName: user
                ? `${user.firstName} ${user.lastName || ""}`.trim()
                : "Guest",
            userImage: user?.imageUrl,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {callCardData.map((callCard, index) => (
                <CallCard
                    key={index}
                    userStatus={callCard.userStatus}
                    callEnded={callEnded}
                    isSpeaking={isSpeaking}
                    callActive={callActive}
                    userFullName={callCard.userFullName}
                    userTitle={callCard.userTitle}
                    userImage={callCard.userImage}
                />
            ))}
        </div>
    );
};

export default CallCardWrapper;
