export default function GalleryGrid() {
    return(
        <div className="w-full grid grid-col-3 gap-4">
            <div className="w-full aspect-square bg-black rounded-xl"></div>
            <div className="w-full aspect-square bg-black rounded-xl col-start-2 col-span-2 row-span-2"></div>
            <div className="w-full bg-black rounded-xl row-start-2 row-end-4"></div>
            <div className="w-full aspect-square bg-black rounded-xl"></div>
            <div className="w-full aspect-square bg-black rounded-xl"></div>
            <div className="w-full bg-black rounded-xl col-start-1 col-span-2"></div>
            <div className="w-full aspect-square bg-black rounded-xl"></div>
        </div>
    )
}