import { motion } from "framer-motion";

const Efectos = ({ imageSrc, title, subtitle }) => (
    <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='border-2 border-lime-800 p-2'
>
    <a href="">
        <img className='w-64' src={imageSrc} alt="" />
        <h1 className='flex justify-center font-mono font-black tracking-wider'>{title}</h1>
        <p className='flex justify-center text-lime-600'>{subtitle}</p>
    </a>
    </motion.div>
);

export default Efectos;