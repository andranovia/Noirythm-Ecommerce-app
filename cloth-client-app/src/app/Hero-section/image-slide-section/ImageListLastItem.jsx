
import Image from "next/image";

const ImagesListLastItem = ({url, setModalOpen}) => {
    const handelOpenModal = () => {
        setModalOpen(true)
    }

    return (
        <div className='flex items-start justify-center w-[110px] h-[100px] relative cursor-pointer max-sm:w-4/5 max-sm:h-auto max-sm:aspect-[7/6]' onClick={handelOpenModal}>
            <Image src={url} width={1000} height={1000} alt={"Image"} className='w-[110px] h-[100px] rounded-lg shadow max-sm:w-4/5 max-sm:h-auto max-sm:aspect-[7/6]'/>
            <span className='flex items-center justify-center text-white absolute top-0 left-2/5 w-[110px] h-[100px] bg-[#333] opacity-80 rounded-lg max-sm:w-4/5 max-sm:h-auto max-sm:aspect-[7/6]'> More...</span>
        </div>
    );
};

export default ImagesListLastItem;