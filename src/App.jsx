import React, { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import CustomCursor from "./UI/Cursor/CustomCursor";
import ParticlesBackground from "./UI/Particalsbackgroud/ParticalsBackground";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactMSGUI from "./Pages/ContactMSG/ContactMSGUI";
import Navbar from "./Components/Navbar/Navbar";
import { themes } from "./JsonFiles/Theme/Theme.js";
import ThemeSelector from "./UI/ThemeSelector/ThemeSelector.jsx";
import WebProjects from "./Pages/webProject/WebProjects.jsx";
import GraphicDesign from "./Pages/graphicProject/GraphicProjects.jsx";
import AIPromptPage from "./Pages/aiPromptPage/AiPromptPage.jsx";
import UiUxPortfolio from "./Pages/UI-UX-Design/UI-UX_Design.jsx";
import NotFound from "./Pages/404NoFound/404NoFound.jsx";




function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const [openPanel, setOpenPanel] = useState(false);
  const [themeIndex, setThemeIndex] = useTheme();

  function useTheme(defaultIndex = 0) {
    const [themeIndex, setThemeIndex] = useState(() => {
      const saved = localStorage.getItem("portfolio-theme");
      return saved ? Number(saved) : defaultIndex;
    });

    useEffect(() => {
      localStorage.setItem("portfolio-theme", themeIndex);
    }, [themeIndex]);

    return [themeIndex, setThemeIndex];
  }

  return (
    <Router>
      <div
        className={`min-h-screen transition-all duration-700 z-50 
 ${themes[themeIndex].class} ${
          themes[themeIndex].dark ? "text-black" : "text-gray-900"
        }`}
      >
        <Navbar />
        <ParticlesBackground />
        {!isMobile && <CustomCursor />}

        {/* 🎭 Floating Icon Button */}
        <button
          aria-label="Change Theme"
          title="Change Theme"
          onClick={() => setOpenPanel(!openPanel)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full 
          bg-black text-white shadow-xl flex items-center justify-center 
          hover:scale-110 transition z-50"
        >
          🎨
        </button>

        {/* 🎨 Theme Selector Panel */}
        {openPanel && (
          <ThemeSelector
            themes={themes}
            themeIndex={themeIndex}
            setThemeIndex={setThemeIndex}
            close={() => setOpenPanel(false)}
          />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-msg" element={<ContactMSGUI />} />
          <Route path="/web-development" element={<WebProjects />} />
          <Route path="/uiux" element={<UiUxPortfolio/>} />
          <Route path="/graphic-design-projects" element={<GraphicDesign />} />
          <Route path="/ai-prompt" element={<AIPromptPage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
