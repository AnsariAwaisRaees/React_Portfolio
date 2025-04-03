import './App.css';

function App() {
    return (
        <div className='App'>
            <header>
                <div class="user">
                    <img src={process.env.PUBLIC_URL + '/images/photo1.jpg'} alt="Awais Ansari's profile" />
                    <h3 class="name">Awais Ansari</h3>
                    <p class="post">Computer Engineer</p>
                </div>

                <nav class="navbar">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#portfolio">Skills</a></li>
                        <li><a href="#contact">contact</a></li>
                    </ul>
                </nav>
            </header>

            <div id="menu" class="fas fa-bars"></div>
            
            <section class="home" id="home">
                <h3>Hello</h3>
                <h1>I'M <span>Awais Ansari</span></h1>
                <p>I am a graduated in Computer Science
                    Engineering. Now currently seeking an
                    opportunity in IT industry, where I can use my
                    experience of Java programming and learn new
                    skills, expand my knowledge and leverage my
                    learning.
                </p>
                <a href="#about"><button class="btn">about me <i class="fas fa-user"></i></button></a>
            </section>

            <section class="about" id="about">
                <h1 class="heading"> <span>about</span> me </h1>

                <div class="row">
                    <div class="info">
                        <h3> <span>Full Name : </span> Ansari Awais Ahmad Raees Ahmad </h3>
                        <h3> <span> Date of Birth : </span> 31/10/2000 </h3>
                        <h3> <span> Qualification : </span> Bachelor of Technology (B.Tech)</h3>
                        <h3> <span> Branch : </span> Computer Engineering </h3>
                        <h3> <span> Language : </span> English, Hindi, Urdu, Marathi </h3>
                        <a href="/pdf/Awais_Ansari_FullStack_CV.pdf"><button class="btn"> Download CV <i class="fas fa-download"></i> </button></a>
                    </div>
                    <div class="counter">
                        <div class="box">
                            <span>2+</span>
                            <h3>years of experience</h3>
                        </div>

                        <div class="box">
                            <span>100+</span>
                            <h3>porject completed</h3>
                        </div>

                        <div class="box">
                            <span>430+</span>
                            <h3>happy clients</h3>
                        </div>

                        <div class="box">
                            <span>12+</span>
                            <h3>awards won</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section class="education" id="education">
                <h1 class="heading"> my <span>education</span> </h1>

                <div class="box-container">

                <div class="box">
                    <i class="fas fa-graduation-cap"></i>
                    <span>2022</span>
                    <h3>B.Tech (Computer Engineering)</h3>
                    <p></p>
                </div>

                <div class="box">
                    <i class="fas fa-graduation-cap"></i>
                    <span>2017</span>
                    <h3>front end development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                </div>

                <div class="box">
                    <i class="fas fa-graduation-cap"></i>
                    <span>2018</span>
                    <h3>front end development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                </div>

                <div class="box">
                    <i class="fas fa-graduation-cap"></i>
                    <span>2019</span>
                    <h3>front end development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                </div>

                <div class="box">
                    <i class="fas fa-graduation-cap"></i>
                    <span>2020</span>
                    <h3>front end development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                </div>

                <div class="box">
                    <i class="fas fa-graduation-cap"></i>
                    <span>2021</span>
                    <h3>front end development</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
                </div>

                </div>
            </section>
            
            <section class="portfolio" id="portfolio">
                <h1 class="heading"> my <span>portfolio</span> </h1>
                <div class="box-container">
                    <div class="box">
                      <img src={process.env.PUBLIC_URL + '/images/img1.jpg'} alt="Portfolio Item 1" />
                    </div>
                    <div class="box">
                      <img src={process.env.PUBLIC_URL + '/images/img2.jpg'} alt="Portfolio Item 1" />
                    </div>
                    <div class="box">
                      <img src={process.env.PUBLIC_URL + '/images/img3.jpg'} alt="Portfolio Item 1" />
                    </div>

                    <div class="box">
                      <img src={process.env.PUBLIC_URL + '/images/img4.jpg'} alt="Portfolio Item 1" />
                    </div>

                    <div class="box">
                      <img src={process.env.PUBLIC_URL + '/images/img5.jpg'} alt="Portfolio Item 1" />
                    </div>

                    <div class="box">
                      <img src={process.env.PUBLIC_URL + '/images/img6.jpg'} alt="Portfolio Item 1" />
                    </div>
                </div>
            </section>

            <section class="contact" id="contact">
                <h1 class="heading"> <span>contact</span> me </h1>
                <div class="row">
                    <div class="content">
                        <h3 class="title">contact info</h3>

                        <div class="info">
                            <h3> <i class="fas fa-envelope"></i> shaikh@gmail.com </h3>
                            <h3> <i class="fas fa-phone"></i> +123-456-7890 </h3>
                            <h3> <i class="fas fa-phone"></i> +111-222-3333 </h3>
                            <h3> <i class="fas fa-map-marker-alt"></i> mumbai, india - 400104. </h3>
                        </div>
                    </div>

                    <form action="">
                        <input type="text" placeholder="name" class="box"></input>
                        <input type="email" placeholder="email" class="box"></input>
                        <input type="text" placeholder="project" class="box"></input>
                        <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textarea>
                        <button type="submit" class="btn"> send <i class="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </section>

            <a href="#home" class="top">
                <img src="images/scroll-top-img.png" alt=""></img>
            </a>
        </div>
    );
}

export default App;