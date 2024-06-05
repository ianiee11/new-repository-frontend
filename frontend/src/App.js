import React from 'react';

const App = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Writing Service</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/order">Order</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default App;
