import { DynamicMenuItem } from "@/types/common/dynamic.component.interfaces";

export const navMenuData: DynamicMenuItem[] = [
    { label: "Generate Workout", href: "/generate-workout" },
    { label: "Fitness Plans", href: "/fitness-plans" },
    { label: "Profile", href: "/profile" },
    { label: "About", href: "/about" },

    // {
    //     label: "Services",
    //     children: [
    //         {
    //             title: "Web Development",
    //             items: [
    //                 { label: "React", href: "/services/react" },
    //                 { label: "Next.js", href: "/services/nextjs" },
    //             ],
    //         },

    //         {
    //             title: "Mobile",
    //             items: [
    //                 { label: "React Native", href: "/services/react-native" },
    //                 { label: "Flutter", href: "/services/flutter" },
    //             ],
    //         },

    //         {
    //             title: "Mobile",
    //             items: [
    //                 { label: "React Native", href: "/services/react-native" },
    //                 { label: "Flutter", href: "/services/flutter" },
    //             ],
    //         },
    //     ],
    // },
];
