import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="skill-box">
          <span className="title">Front-end</span>

          <div className="skill-bar">
            <span
              style={{
                background: "linear-gradient(90deg, #ffde01 0%, #ffa800 100%)",
              }}
              className="skill-per front-end"
            >
              <span className="tooltip">100%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Back-end</span>

          <div className="skill-bar">
            <span
              style={{
                background: "linear-gradient(90deg, #08ca1b 0%, #00fafa 100%)",
              }}
              className="skill-per back-end"
            >
              <span className="tooltip">85%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Team Leadership</span>

          <div className="skill-bar">
            <span
              style={{
                background: "linear-gradient(90deg, #f1662b 0%, #34a9dc 100%)",
              }}
              className="skill-per team-leadership"
            >
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Problem Solving</span>

          <div className="skill-bar">
            <span
              style={{
                background: "linear-gradient(90deg, #f70354 0%, #c543d3 100%)",
              }}
              className="skill-per problem-solving"
            >
              <span className="tooltip">95%</span>
            </span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    position: relative;
    max-width: 500px;
    width: 100%;
    border-radius: 7px;
    user-select: none;
    margin: 0;
    padding: 0;
  }

  .container .skill-box {
    width: 100%;
    margin: 25px 0;
  }

  .skill-box .title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }

  .skill-box .skill-bar {
    height: 2px;
    width: 100%;
    border-radius: 6px;
    margin-top: 6px;
    background: rgba(0, 0, 0, 0.1);
  }

  .skill-bar .skill-per {
    position: relative;
    display: block;
    height: 100%;
    width: 90%;
    border-radius: 6px;
    animation: progress 0.4s ease-in-out forwards;
    opacity: 0;
  }

  .skill-per.team-leadership {
    /*progreso de las diferentes lenguajes*/
    width: 80%;
    animation-delay: 0.1s;
  }

  .skill-per.front-end {
    /*progreso de las diferentes lenguajes*/
    width: 100%;
    animation-delay: 0.1s;
  }

  .skill-per.back-end {
    /*progreso de las diferentes lenguajes*/
    width: 85%;
    animation-delay: 0.2s;
  }

  .skill-per.problem-solving {
    /*progreso de las diferentes lenguajes*/
    width: 95%;
    animation-delay: 0.3s;
  }

  @keyframes progress {
    0% {
      width: 0;
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }

  .skill-per .tooltip {
    position: absolute;
    right: -14px;
    top: -28px;
    font-size: 9px;
    font-weight: 500;
    color: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    background: #000000;

    z-index: 1;
  }

  .tooltip::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 10px;
    width: 10px;
    z-index: -1;
    background: #000000;
    transform: translateX(-50%) rotate(45deg);
  }
`;

export default Card;
