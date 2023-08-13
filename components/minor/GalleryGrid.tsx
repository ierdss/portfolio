import Image from "next/image";

export default function GalleryGrid() {
    return(
        <div className="w-full grid grid-cols-3 grid-rows-4 grid-flow-dense gap-4">
            <div className="gridSquare gridSquare__small !rounded-full !shadow-inner !shadow-neutral-400 border border-neutral-200">
   
            </div>
            <div className="gridSquare gridSquare__big !rounded-full !rounded-bl-none">
                {/* <Image
                    src="/MeRed.png"
                    width={300}
                    height={300}
                    alt="Me"
                    className="gridImage"
                /> */}
            </div>
            <div className="gridSquare gridSquare__tall !rounded-tr-full !rounded-bl-full bg-secondary-red"></div>
            <div className="gridSquare gridSquare__small bg-neutral-800"></div>
            <div className="gridSquare gridSquare__small !rounded-bl-full"></div>
            <div className="gridSquare gridSquare__long !rounded-full !rounded-bl-none"></div>
            <div className="gridSquare gridSquare__small !rounded-full !rounded-tr-none bg-secondary-red"></div>
        </div>
    )
}