import React, {memo} from 'react'

const ThemeSelector = ({ themes, themeIndex, setThemeIndex, close }) => (
  <div className="fixed bottom-24 right-6 w-56 p-4 rounded-xl 
    bg-white/90 backdrop-blur shadow-2xl z-50">
    
    <h3 className="text-sm font-semibold mb-3 text-gray-800">
      Choose Mood
    </h3>

    <div className="space-y-2">
      {themes.map((theme, index) => (
        <button
          key={theme.name}
          onClick={() => {
            setThemeIndex(index);
            close();
          }}
          className={`w-full text-left px-3 py-2 rounded-md text-sm
          hover:bg-gray-200 transition
          ${themeIndex === index ? "bg-gray-300 font-semibold" : ""}`}
        >
          {theme.name}
        </button>
      ))}
    </div>
  </div>
);
export default React.memo(ThemeSelector);