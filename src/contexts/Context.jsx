import { createContext, useState } from "react";
import run from "../config/gemini";
export const AppContext = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    setResultData(""); // Clear the current result
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input);
    setPrevPrompts((prev)=>[...prev, input])

    const response = await run(prompt);
    let formattedText = response.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    formattedText = formattedText.replace(/\* /g, "<br> ");

    typeText(formattedText); // Call the typing effect function

    setLoading(false);
    setInput(""); // Clear input after sending
  };

  const typeText = (text) => {
    let index = -1;
    const typingSpeed = 2; // Adjust typing speed here (in milliseconds)

    const typingEffect = () => {
      if (index < text.length) {
        setResultData((prev) => prev + text.charAt(index));
        index++;
        setTimeout(typingEffect, typingSpeed); // Continue typing
      }
    };

    typingEffect(); // Start typing
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && input.trim() !== '') {
      onSent(input);
    }
  };

  const contextValues = {
    input,
    setInput,
    onSent,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    handleKeyDown
  };


  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
