import React from 'react';
import './App.css'; // Assuming your CSS file is correct and in place.

function App() {
  return (
    <div className="App">
      <header>
        <div className="user">
          <img src={process.env.PUBLIC_URL + '/images/photo1.jpg'} alt="Awais Ansari's profile" />
          <h3 className="name">Awais Ansari</h3>
          <p className="post">Computer Engineer</p>
        </div>

        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#portfolio">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div id="menu" className="fas fa-bars"></div>

      <section className="home" id="home">
        <h3>Hello</h3>
        <h1>I'M <span>Awais Ansari</span></h1>
        <p>
          I am a graduate in Computer Science Engineering. Now currently seeking an
          opportunity in the IT industry, where I can use my experience of Java programming
          and learn new skills, expand my knowledge, and leverage my learning.
        </p>
        <a href="#about"><button className="btn">about me <i className="fas fa-user"></i></button></a>
      </section>

      <section className="about" id="about">
        <h1 className="heading"><span>about</span> me</h1>

        <div className="row">
          <div className="info">
            <h3><span>Full Name : </span> Ansari Awais Ahmad Raees Ahmad</h3>
            <h3><span>Date of Birth : </span> 31/10/2000</h3>
            <h3><span>Qualification : </span> Bachelor of Technology (B.Tech)</h3>
            <h3><span>Branch : </span> Computer Engineering</h3>
            <h3><span>Language : </span> English, Hindi, Urdu, Marathi</h3>
            <a href="/pdf/Awais_Ansari_FullStack_CV.pdf">
              <button className="btn">Download CV <i className="fas fa-download"></i></button>
            </a>
          </div>
          <div className="counter">
            <div className="box">
              <span>2+</span>
              <h3>years of experience</h3>
            </div>

            <div className="box">
              <span>100+</span>
              <h3>projects completed</h3>
            </div>

            <div className="box">
              <span>430+</span>
              <h3>happy clients</h3>
            </div>

            <div className="box">
              <span>12+</span>
              <h3>awards won</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="education" id="education">
        <h1 className="heading">my <span>education</span></h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2022</span>
            <h3>B.Tech (Computer Engineering)</h3>
          </div>

          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2017</span>
            <h3>Front End Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
          </div>

          <div className="box">
            <i className="fas fa-graduation-cap"></i>
            <span>2018</span>
            <h3>Front End Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
          </div>

          {/* Repeat similar blocks as needed */}
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <h1 className="heading">my <span>portfolio</span></h1>
        <div className="box-container">
          <div className="box">
            <img src={process.env.PUBLIC_URL + '/images/img1.jpg'} alt="Portfolio Item 1" />
          </div>
          <div className="box">
            <img src={process.env.PUBLIC_URL + '/images/img2.jpg'} alt="Portfolio Item 2" />
          </div>
          <div className="box">
            <img src={process.env.PUBLIC_URL + '/images/img3.jpg'} alt="Portfolio Item 3" />
          </div>
          {/* Add more portfolio items as needed */}
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading"><span>contact</span> me</h1>
        <div className="row">
          <div className="content">
            <h3 className="title">contact info</h3>

            <div className="info">
              <h3><i className="fas fa-envelope"></i> shaikh@gmail.com</h3>
              <h3><i className="fas fa-phone"></i> +123-456-7890</h3>
              <h3><i className="fas fa-phone"></i> +111-222-3333</h3>
              <h3><i className="fas fa-map-marker-alt"></i> Mumbai, India - 400104</h3>
            </div>
          </div>

          <form>
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="text" placeholder="project" className="box" />
            <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
            <button type="submit" className="btn">send <i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </section>

      <a href="#home" className="top">
        <img src={process.env.PUBLIC_URL + '/images/scroll-top-img.png'} alt="Scroll to Top" />
      </a>
    </div>
  );
}

export default App;
