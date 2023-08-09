import { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf');

    return(
        <primitive 
            object={earth.scene}
            scale={2.5}
            position-x={0}
            rotation-x={0}
        />
    )
}

export default function EarthCanvas() {
    return(
        <Canvas
            shadows
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 35,
                near: 0.1,
                far: 100,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    autoRotateSpeed={3}
                    rotateSpeed={2}
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    )
}