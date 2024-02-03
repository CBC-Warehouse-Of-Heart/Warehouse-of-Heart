import { defaultConfig } from "next/dist/server/config-shared";
import React from "react"
import { motion } from "framer-motion";

const Scene4Page13: React.FC = () => {
    return (
        <div className="w-[390px] h-[844px] flex flex-col items-center relative bg-[url('./bg/bg1.jpeg')] bg-cover bg-center">
            <motion.div>
                <video src={require('/app/bgVDO/postIt.mp4')} 
                autoPlay 
                muted
                className="w-[390px] h-[844px] items-center"
                />
            </motion.div>

            <video src=""></video>

        </div>
    );
};
export default Scene4Page13
