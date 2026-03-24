import React from 'react'
import '../styles/login.css'

export default function Login(){
  return (
    <main>
      <section className="form-card">
        <div className="login-hero">
          <h1>Welcome back</h1>
          <p>Continue the streak by logging into your Sudoku vault.</p>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="login-username">Username</label>
            <input id="login-username" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password" required />
          </div>
          <button className="button" type="submit">Sign In</button>
        </form>
      </section>
    </main>
  )
}
