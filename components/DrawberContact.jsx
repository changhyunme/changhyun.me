"use client"

import Image from "next/image";
import Link from "next/link";
import useStore from "@/store/uiStore";

const DrawberContact = ({}) => {
    const { toggleDrawber } = useStore();
    return(
        <div className="flex flex-col md:flex-row gap-10 justify-center">
            <div className="">
                <div className="max-w-36 md:max-w-24 mx-auto rounded-full overflow-hidden">
                    <Image
                        src="/thumbs/temp/profile.webp"
                        alt="profile image"
                        width={800} 
                        height={800}
                        placeholder="blur"
                        blurDataURL="/thumbs/temp/profile.jpeg"
                        loading="lazy"
                        className={`saturate-50 brightness-150`}
                        unoptimized
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3 text-center md:text-left">
                <h3 className="text-xl font-black italic">Have a question or a project in mind?</h3>
                <div className="flex flex-col gap-3">
                    <div className="">
                        Just hit the button below and reach out — I'll get back to you within 24 hours!<br />
                        Whether it’s building a website, developing a program, or even grabbing a meal together,<br />
                        I’m open to any kind of conversation. 😊
                        {/* <ul className="list-disc pl-5 mt-2">
                            <li>🖥️ Modern web service builds</li>
                            <li>🧪 Experimental feature development</li>
                            <li>⚡ Rapid prototyping</li>
                            <li>🤔 Projects that seem simple — but somehow cost way too much</li>
                        </ul> */}
                    </div>
                    <div className="flex justify-center md:justify-start" translate="no">
                        <Link href="/contact" onClick={()=>toggleDrawber(false)}>
                            <div className="flex flex-row gap-1 w-36 justify-center items-center pl-2 pr-4 py-2 border-1 rounded-sm select-none cursor-pointer
                                            bg-bgSub border-text hover:opacity-70 hover:rounded-xl transition-all duration-300 active:scale-98"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241z"/></g>
                                </svg>
                                <span>
                                    Contact me
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DrawberContact;