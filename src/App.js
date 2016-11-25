import React from 'react'
import About from './About'
import Talks from './Talks'
import Posts from './Posts'
import Media from './Media'
import Social from './Social'

const App = () => (
  <div id="content">
    <h1>Marina Limeira</h1>

    <About />
    <Talks />
    <Posts />
    <Media />
    <Social />

    <br />

    marinaflessa at gmail dot com

    <footer>
      &#9733;
      <p>
        PGP Fingerpring: 8DEE D3EB 4686 A989 6DC0 385C D350 64DC <br />
        Btc: 1jNtvvStiDGo4aHS7M79jDSVjag92roCf
      </p>

      <a href="resume.pdf">Resume</a>
    </footer>
  </div>
)

export default App
