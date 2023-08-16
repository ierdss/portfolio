type GalleryProps = {
    gallery: Array<String>,
}

export default function ProjectGallery({ gallery }:GalleryProps) {
    return(
        <div>
            Project Gallery
            <div>
                Image Viewer
            </div>
            <div>
                Sidebar with pictures for desktop.
                Dropdown for mobile.
                Similar to a facebook gallery or an instagram gallery
            </div>
        </div>
    )
}