import { UserProfile } from "@clerk/nextjs";

const Profile = () => {
    return (
        <div className="container ">
            <div className="w-full flex items-center justify-center">
                <UserProfile />
            </div>
        </div>
    );
};

export default Profile;
