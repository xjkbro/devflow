import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
    return (
        <header>
            <NavContainer>
                <Navigation>
                    <Image
                        src="/images/DevFlow Logo - BG.png"
                        height={174}
                        width={348}
                    />
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/programming">Programming</Link>
                    <Link href="/aquatics">Aquatics</Link>
                    <Link href="/contact">Contact</Link>
                </Navigation>
            </NavContainer>
        </header>
    );
}

const NavContainer = styled.div`
    /* display: inline-flex; */
`;
const Navigation = styled.nav`
    display: flex;
    height: 174px;
    align-items: center;
    justify-content: space-around;
    > a {
        padding: 0 10px;
    }
`;
