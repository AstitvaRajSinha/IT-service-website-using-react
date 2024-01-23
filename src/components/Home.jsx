import React from "react";
import vg from "../assets/2.webp";
import sg from "../assets/photo_2023-11-27_19-18-54-removebg-preview.png"
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home " id="home">
        <main>
          <h1>Tech<span>STAR</span></h1>
          <p>Solution to Your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p className="paratext">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            corporis animi at perferendis. Esse nisi doloribus natus aperiam
            repellendus sit sequi officia itaque magni distinctio. Saepe iure
            velit sint et inventore error, quibusdam architecto esse nemo illo
            eius quasi excepturi. Dicta dolorem asperiores aliquam molestias eos
            facere quasi delectus velit!
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            consequuntur atque perferendis fuga, nemo molestias quidem ut natus
            iste ullam voluptate tempore voluptatibus asperiores mollitia alias
            soluta fugiat corrupti enim blanditiis? Fugiat nesciunt, odit velit
            distinctio voluptates corrupti facilis officia et ab eligendi neque
            quae quia saepe iure tenetur expedita animi molestiae, dolorum
            suscipit sint? Nulla ratione laborum voluptate consectetur beatae
            dolores sunt, quaerat culpa quia fugiat tempore mollitia architecto
            voluptatem quae omnis nobis aliquam facere quas non illum.
            Praesentium dicta labore voluptatem, eaque vel tempora, quaerat
            dolore, cum dignissimos omnis molestias quod id asperiores sed
            itaque. Est, quas repellendus.
          </p>
        </div>
        <img src={sg} alt="" />
      </div>
      <div className="home4" id="brands"> 
        <img src={vg} alt="" />
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{animationDelay:"0.1s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.3"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <AiFillYoutube/>
              <p>YouTube</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
