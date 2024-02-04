import Image from "next/image"
import Img1 from "../../../public/images/hero-1.jpeg"
import Img2 from "../../../public/images/hero-2.jpeg"
import Img3 from "../../../public/images/hero-3.jpeg"

const Gallery = () => {
  return (
    <div className="container mx-auto py-14 h-full">
        <div className="flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2 h-48">
                    <Image
                        src={Img1}
                        alt="img"
                        className="img"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="w-1/2 p-1 md:p-2 h-48">
                    <Image
                        src={Img2}
                        alt="img"
                        className="img"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="w-full p-1 md:p-2 h-48">
                    <Image
                        src={Img3}
                        alt="img"
                        className="img"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2 h-48">
                    <Image
                        src={Img1}
                        alt="img"
                        className="img"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="w-1/2 p-1 md:p-2 h-48">
                    <Image
                        src={Img2}
                        alt="img"
                        className="img"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="w-1/2 p-1 md:p-2 h-48">
                    <Image
                        src={Img3}
                        alt="img"
                        className="img"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gallery