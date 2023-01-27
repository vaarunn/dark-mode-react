import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  return (
    <main>
      <nav className='nav-center'>
        <h1>overracted</h1>
        <button className='btn' onClick={toggleTheme}>
          toggle
        </button>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
