import React from 'react'
import '../styles/register.css'

export default function Register(){
  return (
    <main>
      <section className="form-card">
        <h1>Create an account</h1>
        <p>Pick a username that matches your puzzle energy.</p>
        <form>
          <div className="form-group">
            <label htmlFor="register-username">Username</label>
            <input id="register-username" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input id="register-password" type="password" required />
          </div>
          <div className="form-group">
            <label htmlFor="register-confirm">Verify Password</label>
            <input id="register-confirm" type="password" required />
          </div>
          <button className="button" type="submit">Sign Up</button>
        </form>
      </section>
    </main>
  )
}
