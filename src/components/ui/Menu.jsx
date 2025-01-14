import styled from "styled-components";

const MenuButton = () => {
  return (
    <StyledWrapper>
      <nav className="menu">
        <input
          id="menu-open"
          name="menu-open"
          className="menu-open"
          href="#"
          type="checkbox"
        />
        <label htmlFor="menu-open" className="menu-open-button">
          <span className="lines line-1" />
          <span className="lines line-2" />
          <span className="lines line-3" />
        </label>

        <a className="menu-item purple" href="#contact">
          Contact
        </a>
        <a className="menu-item orange" href="#projects">
          Projects
        </a>
        <a className="menu-item lightblue" href="#about">
          About
        </a>
      </nav>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .menu-open-button {
    background: #eeeeee;
    border-radius: 100%;
    width: 80px;
    height: 80px;
    margin-left: -40px;
    position: absolute;
    color: #ffffff;
    text-align: center;
    line-height: 80px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition: -webkit-transform ease-out 200ms;
    transition: -webkit-transform ease-out 200ms;
    transition: transform ease-out 200ms;
    font-size: 20px;
  }

  .menu-item {
    border-radius: 10%;
    margin-top: 15px;
    margin-left: -35px;
    position: absolute;
    color: #ffffff;
    text-align: center;
    padding: 10px 20px;
    font-size: 0px;
  }

  .menu-open {
    display: none;
  }

  .lines {
    width: 25px;
    height: 3px;
    background: #596778;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -12.5px;
    margin-top: -1.5px;
    -webkit-transition: -webkit-transform 200ms;
    transition: -webkit-transform 200ms;
    transition: transform 200ms;
  }

  .line-1 {
    -webkit-transform: translate3d(0, -8px, 0);
    transform: translate3d(0, -8px, 0);
  }

  .line-2 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .line-3 {
    -webkit-transform: translate3d(0, 8px, 0);
    transform: translate3d(0, 8px, 0);
  }

  .menu-open:checked + .menu-open-button .line-1 {
    -webkit-transform: translate3d(0, 0, 0) rotate(45deg);
    transform: translate3d(0, 0, 0) rotate(45deg);
  }

  .menu-open:checked + .menu-open-button .line-2 {
    -webkit-transform: translate3d(0, 0, 0) scale(0.1, 1);
    transform: translate3d(0, 0, 0) scale(0.1, 1);
  }

  .menu-open:checked + .menu-open-button .line-3 {
    -webkit-transform: translate3d(0, 0, 0) rotate(-45deg);
    transform: translate3d(0, 0, 0) rotate(-45deg);
  }

  .menu {
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 80px;
    text-align: center;
    box-sizing: border-box;
    font-size: 26px;
  }

  /* .menu-item {
   transition: all 0.1s ease 0s;
} */

  .menu-item:hover {
    background: #eeeeee;
    color: #091974;
  }

  .menu-item:nth-child(3) {
    -webkit-transition-duration: 180ms;
    transition-duration: 180ms;
  }

  .menu-item:nth-child(4) {
    -webkit-transition-duration: 180ms;
    transition-duration: 180ms;
  }

  .menu-item:nth-child(5) {
    -webkit-transition-duration: 180ms;
    transition-duration: 180ms;
  }

  .menu-item:nth-child(6) {
    -webkit-transition-duration: 180ms;
    transition-duration: 180ms;
  }

  .menu-item:nth-child(7) {
    -webkit-transition-duration: 180ms;
    transition-duration: 180ms;
  }

  .menu-item:nth-child(8) {
    -webkit-transition-duration: 180ms;
    transition-duration: 180ms;
  }

  .menu-item:nth-child(9) {
    -webkit-transition-duration: 180ms;
    transition-duration: 180ms;
  }

  .menu-open-button {
    z-index: 2;
    -webkit-transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    -webkit-transition-duration: 400ms;
    transition-duration: 400ms;
    -webkit-transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    transform: scale(1.1, 1.1) translate3d(0, 0, 0);
    cursor: pointer;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
  }

  .menu-open-button:hover {
    -webkit-transform: scale(1.2, 1.2) translate3d(0, 0, 0);
    transform: scale(1.2, 1.2) translate3d(0, 0, 0);
  }

  .menu-open:checked + .menu-open-button {
    -webkit-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: 200ms;
    transition-duration: 200ms;
    -webkit-transform: scale(0.8, 0.8) translate3d(0, 0, 0);
    transform: scale(0.8, 0.8) translate3d(0, 0, 0);
  }

  .menu-open:checked ~ .menu-item {
    -webkit-transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    transition-timing-function: cubic-bezier(0.935, 0, 0.34, 1.33);
    font-size: 20px;
  }

  .menu-open:checked ~ .menu-item:nth-child(3) {
    transition-duration: 180ms;
    -webkit-transition-duration: 180ms;
    -webkit-transform: translate3d(-130px, 0px, 0); /* Moves left */
    transform: translate3d(-130px, 0px, 0); /* Moves left */
  }

  .menu-open:checked ~ .menu-item:nth-child(4) {
    transition-duration: 280ms;
    -webkit-transition-duration: 280ms;
    -webkit-transform: translate3d(-80px, -80px, 0); /* Moves left and up */
    transform: translate3d(-80px, 80px, 0); /* Moves left and up */
  }

  .menu-open:checked ~ .menu-item:nth-child(5) {
    transition-duration: 380ms;
    -webkit-transition-duration: 380ms;
    -webkit-transform: translate3d(0px, 150px, 0); /* Moves left and down */
    transform: translate3d(0px, 150px, 0); /* Moves left and down */
  }

  .blue {
    background-color: #b908ff;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
  }

  .blue:hover {
    color: #669ae1;
    text-shadow: none;
  }

  .green {
    background-color: #70cc72;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
  }

  .green:hover {
    color: #70cc72;
    text-shadow: none;
  }

  .red {
    background-color: #fe4365;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
  }

  .red:hover {
    color: #fe4365;
    text-shadow: none;
  }

  .purple {
    background-color: #c49cde;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
  }

  .purple:hover {
    color: #c49cde;
    text-shadow: none;
  }

  .orange {
    background-color: #fc913a;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
  }

  .orange:hover {
    color: #fc913a;
    text-shadow: none;
  }

  .lightblue {
    background-color: #62c2e4;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.14);
    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.12);
  }

  .lightblue:hover {
    color: #62c2e4;
    text-shadow: none;
  }

  .credit {
    margin: 24px 20px 120px 0;
    text-align: right;
    color: #eeeeee;
  }

  .credit a {
    padding: 8px 0;
    color: #c49cde;
    text-decoration: none;
    transition: all 0.3s ease 0s;
  }

  .credit a:hover {
    text-decoration: underline;
  }
`;

export default MenuButton;
