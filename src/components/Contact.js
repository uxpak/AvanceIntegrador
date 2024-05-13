// En Contact.js

import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Contact;
