import React from "react";
import "./index.css";
import Card from "../../Card";
import Technology from "../../Technology";
import "./mobile.css";

function About() {
  return (
    <div className="section about__container">
      <div className="slide">
        <div className="about__container__item about-me">
          <h2>About Me</h2>
          <p>
            Hello, my name is Britton Smith, I am a Full Stack Web
            Developer/Designer from Fullsail University partnered with
            DigitalByte.io. I make beautiful modern websites that are optimized
            for all devices. I work with many technologies to bring my clients
            the most efficient product for their needs. I am also certified in
            Google Analytics so I can track and make reports of web traffic.
            Using this tool I can develop and execute strategies for digital
            marketing efforts. These efforts will create revenue-driving
            programs that build relationships with clients, as well as online
            audiences through the various digital and social media platforms. If
            you're interested in building a new site, redesigning your current
            website, or growing your customer market don't be afraid to contact
            me!
          </p>
        </div>
      </div>
      <div className="slide">
        <div className="about__container__item services">
          <Card
            width="25%"
            height="80%"
            name="Design"
            image="./images/icons/layout.png"
            content="I make designs for both desktop and mobile devices using Adobe Xd. I will conceptualize creative ideas, as well as creating visual elements in line with my client’s brand. Depending on the project, my design process usually takes 2-3 weeks with revisions to meet my client’s ideal style. I use my skills to be able to builds websites that are easy to understand, navigate, use, and adhere to design standards and specifications."
            button="Get A Quote"
          />

          <Card
            width="25%"
            height="80%"
            name="Development"
            image="./images/icons/rocket-ship.png"
            content="I develop using the JavaScript framework ReactJS, this brings me the most efficient way to bring my client’s back-end security, render speed, high SEO score, and overall productivity. I can develop for any needs such as eCommerce, portfolio, blogging, admin panel, and much more. Depending on the scope and size it takes me 2-3 weeks to push a webb app live."
            button="Get A Quote"
          />

          <Card
            width="25%"
            height="80%"
            name="Google Analytics"
            image="./images/icons/data.png"
            content="Being certified in google analytics, I have a strong grasp on current marketing tools and strategies. Using my tools I am able to research audience preferences and discover new trends, measure web traffic and monitor SEO, suggest new ways to attract prospective customers,  and many more opportunities for you to take advantage of."
            button="Get A Quote"
          />
        </div>
      </div>
      <div className="slide">
        <div className="about__container__item technologies">
          <h2>Technologies</h2>
          <div className="technologies__items">
            <Technology name="Reactjs" img="./images/icons/reactjs.png" />
            <Technology name="JavaScript" img="./images/ja.png" />
            <Technology name="CSS" img="./images/icons/css.webp" />
            <Technology name="HTML" img="./images/icons/html.webp" />
            <Technology name="MySQL" img="./images/icons/mysql.png" />
            <Technology name="Adobe XD" img="./images/icons/xd.png" />
            <Technology name="Bootstrap" img="./images/icons/bs.jpg" />
            <Technology name="GitHub" img="./images/icons/git.png" />
            <Technology name="NodeJS" img="./images/icons/node.jpg" />
            <Technology name="MongoDB" img="./images/icons/mongodb.png" />
            <Technology
              name="Google Analytics"
              img="./images/icons/google.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
