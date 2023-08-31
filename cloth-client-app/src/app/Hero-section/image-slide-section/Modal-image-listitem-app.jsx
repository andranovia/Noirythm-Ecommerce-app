import Image from "next/image";
import {useEffect, useRef} from "react";

const ModalImagesListItem = ({url, id, setImageId, imageId, handeler}) => {
    const imageRef = useRef()
    const handleChangeImage = () => {
        setImageId(id)
        handeler(id)
    }
    useEffect(() => {
        if (id === imageId) {
            imageRef.current.style.opacity = "0"
        } else {
            imageRef.current.style.opacity = "0.7"
        }
    })

    return (
        <div className='w-[180px] h-[150px] relative mt-[20px] cursor-pointer flex items-center justify-center' onClick={handleChangeImage}>
            <Image src={url} width={1000} height={1000} alt={"Image"} className='w-[180px] h-[150px] rounded-xl shadow'/>
            <span ref={imageRef} className='absolute top-0 left-0 w-[180px] h-[150px] bg-white opacity-40 rounded-xl'/>
        </div>
    );
};

export default ModalImagesListItem;