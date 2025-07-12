import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <>
            <Link href="/">
                <Image src="/brand/logo.svg" alt="" height={50} width={100} />
            </Link>
        </>
    );
};

export default Logo;
