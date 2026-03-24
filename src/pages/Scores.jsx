import React from 'react'
import '../styles/scores.css'

export default function Scores(){
  return (
    <main>
      <h1 className="section-title" style={{marginTop:0}}>Hall of Fame</h1>
      <div className="table-wrap score-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Username</th>
              <th scope="col">Completed</th>
              <th scope="col">Favorite Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span className="rank rank-1">1</span></td>
              <td className="tone tone-1">gridmaster</td>
              <td className="tone tone-1">168</td>
              <td className="tone tone-1">Aries</td>
            </tr>
            <tr>
              <td><span className="rank rank-2">2</span></td>
              <td className="tone tone-2">calmpixels</td>
              <td className="tone tone-2">142</td>
              <td className="tone tone-2">Taurus</td>
            </tr>
            <tr>
              <td><span className="rank rank-3">3</span></td>
              <td className="tone tone-3">numberscout</td>
              <td className="tone tone-3">121</td>
              <td className="tone tone-3">Gemini</td>
            </tr>
            <tr>
              <td><span className="rank rank-4">4</span></td>
              <td className="tone tone-4">teaandlogic</td>
              <td className="tone tone-4">96</td>
              <td className="tone tone-4">Cancer</td>
            </tr>
            <tr>
              <td><span className="rank rank-5">5</span></td>
              <td className="tone tone-5">lumengrid</td>
              <td className="tone tone-5">88</td>
              <td className="tone tone-5">Leo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}
