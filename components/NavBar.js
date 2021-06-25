import styled from "styled-components";
import Link from "next/link";
export default function NavBar() {
    return (
        <header>
            <NavContainer>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/post">Blog</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/about">About</Link>
                </nav>
            </NavContainer>
        </header>
    );
}

const NavContainer = styled.div``;
