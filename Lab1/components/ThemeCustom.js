import React, { createContext, useContext, useState } from 'react'

// B1: Khơi tạo context cho theme
const ThemeContext = createContext();

export const ThemeCustom = ({children}) => {

  // B2: Tạo state để lưu trạng thái đang sử dụng mẫu theme nào
  const [theme, setTheme] = useState('light')

  // Hàm chuyển mẫu giao diện
  const toggleTheme = () => {
    setTheme( theme === 'light' ? 'drak' : 'light');
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

// Định nghĩa hàm hook
export const useTheme = () => useContext(ThemeContext);