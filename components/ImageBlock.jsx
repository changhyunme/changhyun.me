'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const ImageBlock = ({ block, index }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // md 기준

    const imageName = block.src.split('/').pop().replace(/\.[^/.]+$/, '.webp');
    const blurThumb = block.blur || `https://asset/changhyun.me/img/temp/${block.src.split('/').pop()}`;

    const containerClass = `select-none my-4 ${!block.position ? "flex flex-col justify-center" : ""}`;
    const innerWrapperClass = `${!block.position ? "flex justify-center" : ""}`;

    const imageClassBase = `rounded-md cursor-crosshair saturate-60 hover:saturate-100 transition-all duration-300`;
    const captionClass = `text-xs text-center italic mt-3 text-text/50 ${
        block.position === "full" || !block.position ? "block" : "md:hidden"
    }`;

    const getImageLayoutClass = () => {
        switch (block.position) {
            case "left":
                return "float-left mr-4 mb-4 w-full";
            case "right":
                return "float-right ml-4 mb-4 w-full";
            case "full":
                return "w-full";
            default:
                return "w-full md:w-4/7";
        }
    };

    const isMotionImage = block.position === "left" || block.position === "right";

    return (
        <motion.div
            key={index}
            translate="no"
            className={containerClass}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
            }}
        >
            <div className={innerWrapperClass}>
                {isMotionImage ? (
                    <motion.div
                        initial={isMobile ? { width: "100%" } : { width: "33.333%" }}
                        whileHover={
                            isMobile
                            ? {}
                            : {
                                width: "50%",
                                transition: {
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 18,
                                },
                            }
                        }
                        className={`${getImageLayoutClass()}`}
                    >
                        <Image
                            src={`https://asset/changhyun.me/img/temp/${imageName}`}
                            alt={block.alt}
                            width={800}
                            height={800}
                            placeholder="blur"
                            blurDataURL={blurThumb}
                            loading="lazy"
                            className={`${imageClassBase} w-full`}
                            unoptimized
                        />
                    </motion.div>
                ) : (
                    <div className={getImageLayoutClass()}>
                        <Image
                            src={`https://asset/changhyun.me/img/temp/${imageName}`}
                            alt={block.alt}
                            width={800}
                            height={800}
                            placeholder="blur"
                            blurDataURL={blurThumb}
                            loading="lazy"
                            className={`${imageClassBase} w-full`}
                            unoptimized
                        />
                    </div>
                )}
            </div>

            {block.caption && (
                <figure className={captionClass}>
                    <div className="mb-2">
                        {block.gear} / {block.caption} <br />
                        Taken in {block.location}
                    </div>
                    <span>{block.copyright}</span>
                </figure>
            )}
        </motion.div>
    );
};

export default ImageBlock;
