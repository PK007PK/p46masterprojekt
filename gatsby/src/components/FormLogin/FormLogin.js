import React from 'react';
import { FormLoginStyles } from './FormLoginStyles';

export default function FormMailchimp(props) {
  return (
    <FormLoginStyles {...props}>
      <p className="info">Zaloguj się do systemu obsługi zleceń</p>
      <form action="action_page.php" method="post">
        <div className="">
          <label htmlFor="uname">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label htmlFor="psw" style={{ marginTop: '20px' }}>
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button type="submit" disabled>
            Login
          </button>
        </div>
      </form>
    </FormLoginStyles>
  );
}
