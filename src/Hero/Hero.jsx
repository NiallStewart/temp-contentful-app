import heroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            repellat voluptas magni qui officia laudantium. Numquam sit facilis
            corrupti aspernatur qui provident excepturi accusamus, inventore
            fugit sequi a expedita consequatur.
          </p>
        </div>
        <div className="image-container">
          <img src={heroImg} alt="Woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
