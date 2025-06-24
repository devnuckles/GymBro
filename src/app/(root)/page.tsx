import DynamicButton from "@/components/common/dynamic.button.component";

export default function HomePage() {
    return (
        <main className="h-screen flex justify-center items-center">
            <h1 className="text-4xl text-center font-bold mb-8">
                Welcome to <br /> GymBro!
            </h1>

            <DynamicButton btnText="Explore Now" href="/sign-in" />
        </main>
    );
}
