const Footer = () => {
    return(
        <footer className="w-full">
            <h1>Footer</h1>
            <div className="flexBetween footer_copyright">
                <p>@ 2023 Doggo Match. All rights reserved</p>
                <p className="text-gray">
                    <span className="text-black font-semibold">
                        10,214
                    </span> projects
                     submitted
                </p>
            </div>
        </footer>
    )
}

export default Footer;