"use client";

import useStore from "@/store/uiStore";
import { motion } from "framer-motion";

const Drawber = ({ children }) => {
    const { breitbild, lightmode, drawber, toggleDrawber } = useStore();
    return (
        <>
            <motion.div className={`fixed top-0 left-0 w-screen h-screen bg-black/5 backdrop-blur-xs
                ${ drawber ? "z-51 " : "" }`}
                 onClick={()=>toggleDrawber(true)}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1 }}
            ></motion.div>
            <motion.div className={`z-60 fixed bottom-0 left-0 w-full bg-bgSub text-textWhite shadow-xl
                                    
                                  ${ lightmode ? "border-t-1 border-ui/30" : "border-t-1 border-ui/30"}`}  
                        initial={{ 
                            translateY : drawber ? "0%" : "100%" 
                        }}      
                        animate={{
                            translateY : drawber ? "0" : "100%"  
                        }}
                        transition={{ type: "spring", damping: 20, stiffness: 200 }}
            >
                <div className={`w-full mx-auto my-0 px-3 md:px-0`}
                >  
                    {children}
                </div>
            </motion.div>
        </>
    );
}
export default Drawber;