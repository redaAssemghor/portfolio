import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <a
        href="https://t.me/redaassemghor"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telegram"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
          </svg>
        </div>
        <p className="hidden lg:block pr-[2.8em]">AVAILABLE NOW</p>
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    font-family: inherit;
    background: #2ca0d9;
    color: white;
    padding: 0.35em 0;
    font-size: 17px;
    border: none;
    border-radius: 0.7em;
    letter-spacing: 0.08em;
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;
    overflow: hidden;
    height: 2.5em;
    padding-left: 2.8em;
  }

  @media (max-width: 600px) {
    .button {
      background: transparent;
    }
  }

  .button .icon {
    background: #fff;
    height: 2em;
    width: 2em;
    border-radius: 2em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0.4em;
    transition: all 0.5s;
  }

  .icon svg {
    margin-left: 0.1em;
    transition: all 0.5s;
    color: #2ca0d9;
    width: 1.2rem;
    height: 1.2rem;
  }

  .button:hover .icon svg {
    transform: rotate(360deg);
  }

  .button:hover .icon {
    width: calc(100% - 0.85rem);
    border-radius: 0.5em;
  }
`;

export default Button;
