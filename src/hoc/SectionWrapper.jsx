import { motion } from 'framer-motion';
import { style } from '../styles';
import { staggerContainer } from '../utils/motion';
import { Component } from 'react';

const SectionWrapper = (Component, idName) => 
function HOC() {
    return (
        <motion.div>
            <Component/>
        </motion.div>
    )
}

export default SectionWrapper