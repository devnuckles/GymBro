import { DynamicNavigationMenuProps } from "@/types/common/dynamic.component.interfaces";
import Link from "next/link";

const DesktopNavbar = ({ navMenuData }: DynamicNavigationMenuProps) => {
    return (
        <div className="hidden lg:flex space-x-4">
            {navMenuData.map((item, index) => {
                const colClassMap = {
                    1: "grid-cols-1",
                    2: "grid-cols-2",
                    3: "grid-cols-3",
                    4: "grid-cols-4",
                } as const;

                const columnCount = Math.min(item.children?.length ?? 1, 4);
                const colClass =
                    colClassMap[columnCount as keyof typeof colClassMap];

                return (
                    <div key={index} className="flex items-center group">
                        {item.href && !item.children ? (
                            <Link
                                href={item.href}
                                className="px-3 py-2 text-gray-700 transition-all duration-300 hover:text-primary font-medium"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <>
                                <button className="px-3 py-2 text-gray-700 transition-all duration-300 hover:text-primary font-medium focus:outline-none">
                                    {item.label}
                                </button>

                                {/* Mega Menu */}
                                <div className="bg-white shadow-lg absolute left-0 top-full w-full pt-2 hidden group-hover:block">
                                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                        <div
                                            className={` grid ${colClass} gap-4 p-6 min-w-[500px]`}
                                        >
                                            {item.children?.map(
                                                (section, index) => (
                                                    <div key={index}>
                                                        <h4 className="text-sm font-semibold mb-2 text-gray-800">
                                                            {section.title}
                                                        </h4>
                                                        <ul className="space-y-1">
                                                            {section.items.map(
                                                                (link) => (
                                                                    <li
                                                                        key={
                                                                            link.href
                                                                        }
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                link.href
                                                                            }
                                                                            className="text-gray-600 transition-all duration-300 hover:text-primary text-sm"
                                                                        >
                                                                            {
                                                                                link.label
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default DesktopNavbar;
