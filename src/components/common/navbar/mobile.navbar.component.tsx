import { DynamicNavigationMenuProps } from "@/types/common/dynamic.component.interfaces";
import Link from "next/link";

const MobileNavbar = ({ navMenuData }: DynamicNavigationMenuProps) => {
    return (
        <div className="lg:hidden bg-white px-4 pb-4 space-y-4">
            {navMenuData.map((item, index) => (
                <div key={index}>
                    {item.href && !item.children ? (
                        <Link href={item.href} className="block text-gray-700">
                            {item.label}
                        </Link>
                    ) : (
                        <>
                            <span className="block text-gray-700 font-medium">
                                {item.label}
                            </span>
                            {item.children?.map((section, index) => (
                                <div key={index} className="pl-4">
                                    <h5 className="text-sm font-semibold mt-2">
                                        {section.title}
                                    </h5>
                                    <ul className="space-y-1 pl-2">
                                        {section.items.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="text-gray-600 text-sm"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MobileNavbar;
