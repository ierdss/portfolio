import SocialMediaLinks from "./minor/Links";
import { FooterSectionContent } from "@/constants/SectionContent";

export default function Footer() {
    const { copyright } = FooterSectionContent;

    return(
        <footer className="flex flex-col w-full py-6 px-16 border-t border-nav-border">
            <div className="flex-col text-center sm:flex-row sm:text-left flexBetween footer_copyright gap-8">
                <p>{copyright}</p>
                <SocialMediaLinks/>
            </div>
        </footer>
    )
}