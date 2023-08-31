import Image from "next/image";
import {useEffect, useRef} from "react";

const ImagesListItem = ({url, id, setImageId, imageId, setModalImageId}) => {
    const imageRef = useRef()
    const handleChangeImage = () => {
        setImageId(id)
        setModalImageId(id)
    }
    useEffect(() => {
        if (id === imageId) {   
            imageRef.current.style.opacity = "0"
        } else {
            imageRef.current.style.opacity = "0.7"
        }
    })

    return (
        <div className='flex items-start justify-center w-[110px] h-[100px] relative mt-[20px] cursor-pointer max-sm:w-4/5 max-sm:h-auto max-sm:aspect-[7/6]' onClick={handleChangeImage}>
            <Image src={url} width={1000} height={1000} alt={"Image"} className='w-[110px] h-[100px] rounded-lg max-sm:w-4/5 max-sm:h-auto max-sm:aspect-[7/6]'/>
            <span ref={imageRef} className='absolute top-0 left-2/5 w-[110px] h-[100px] bg-white rounded-lg max-sm:w-4/5 max-sm:h-auto max-sm:aspect-[7/6]'/>
        </div>
    );
};

export default ImagesListItem;