import SocialMediaLinks from "./Links";

export default function Footer() {
    return(
        <footer className="flex flex-col w-full py-6 px-16 border-t border-nav-border">
            <div className="flex-col text-center sm:flex-row sm:text-left flexBetween footer_copyright gap-8">
                <p>@ 2023 Andrei Sager. All rights reserved</p>
                <SocialMediaLinks/>
            </div>
        </footer>
    )
}