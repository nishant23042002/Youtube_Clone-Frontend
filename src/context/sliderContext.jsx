import { createContext, useContext, useState } from "react";


export const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
    const [isSliderOpen, setIsSliderOpen] = useState(false);

    return (
        <SliderContext.Provider value={{ isSliderOpen, setIsSliderOpen }}>
            {children}
        </SliderContext.Provider>
    );
};

export const useSlider = () => useContext(SliderContext)