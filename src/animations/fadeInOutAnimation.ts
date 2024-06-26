const fadeInOutAnimation = {
    initial: {
        opacity: 0,
        scale: 0.8, // Starting from behind with a smaller scale
    },
    animate: {
        opacity: 1,
        scale: 1, // Scaling to full size
    },
    exit: {
        opacity: 0,
        scale: 0.8, // Scaling back to a smaller size
    },
    transition: {
        duration: 0.5,
    },
};

export default fadeInOutAnimation;