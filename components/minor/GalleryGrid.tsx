import Image from "next/image";

export default function GalleryGrid() {
    return(
        <div className="w-full grid grid-cols-3 grid-rows-4 grid-flow-dense gap-4">
            <div className="gridSquare gridSquare__small">
   
            </div>
            <div className="gridSquare gridSquare__big">
                {/* <Image
                    src="/MeRed.png"
                    width={300}
                    height={300}
                    alt="Me"
                    className="gridImage"
                /> */}
            </div>
            <div className="gridSquare gridSquare__tall"></div>
            <div className="gridSquare gridSquare__small"></div>
            <div className="gridSquare gridSquare__small"></div>
            <div className="gridSquare gridSquare__long"></div>
            <div className="gridSquare gridSquare__small"></div>
        </div>
    )
}