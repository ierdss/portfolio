import Image from "next/image";

const About = () => {
    return(
        <main className="w-full">
            <div className="flex flex-col md:flex-row p-20 gap-20 w-full justify-around">
                <Image
                    src="/MeRed.png"
                    height={100}
                    width={400}
                    alt="Me in Red"
                    >

                </Image>
                <div className="flex flex-col w-1/2 gap-4">
                    <h1 className="block sectionHeader">About</h1>
                    <h1 className="block font-bold text-3xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, est.</h1>
                    <p className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae numquam, quasi consectetur corrupti culpa architecto nihil maiores, enim odit corporis veritatis doloremque. Beatae doloremque nemo magnam ut eum rem modi rerum quibusdam optio labore sapiente minima, consequuntur omnis repudiandae nam maxime illum aut autem et hic veniam ea! Deleniti, consequuntur tempore. Illum, adipisci at eligendi similique laborum corporis repellendus exercitationem esse eius ea hic quia impedit.</p>
                </div>
            </div>
        </main>
    )
}

export default About;