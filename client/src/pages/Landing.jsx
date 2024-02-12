import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import {Link} from "react-router-dom";
import {Logo} from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            ea libero placeat, at voluptatibus animi obcaecati quam deleniti
            facilis, sit quae deserunt modi recusandae rem inventore nobis
            pariatur. Voluptatem ad numquam quia obcaecati repellendus minima
            vitae corporis beatae, ab nihil.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
