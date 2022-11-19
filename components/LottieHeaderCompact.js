import animationData from "../public/assets/35799-3-animation.json";
import Lottie from "react-lottie";
import React from "react";

function LottieHeaderCompact() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return <Lottie options={defaultOptions} height={300} width={300} />;
}

export default LottieHeaderCompact;