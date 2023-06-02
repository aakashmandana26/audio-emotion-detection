import { createContext, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {

    const [comment, setComment] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [audio, setAudio] = useState("");
    const [objectData, setObjectData] = useState({});

    return (
        <Context.Provider
            value={{
                comment,
                setComment,
                isChecked,
                setIsChecked,
                selectedValue,
                setSelectedValue,
                audio,
                setAudio,
                objectData,
                setObjectData,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;
