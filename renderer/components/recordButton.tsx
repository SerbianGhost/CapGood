const RecordButton = () => {
  return (
    <button className="button home-page__button home-page__button_type_record">
      <svg
        viewBox="-2.4 -2.4 28.80 28.80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0">
          <rect
            x="-2.4"
            y="-2.4"
            width="28.80"
            height="28.80"
            rx="14.4"
            fill="#DB4852"
            strokeWidth="0"
          ></rect>
        </g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M16 9L21 7V17L16 15M4 5.5H15C15.5523 5.5 16 5.94772 16 6.5V17.5C16 18.0523 15.5523 18.5 15 18.5H4C3.44772 18.5 3 18.0523 3 17.5V6.5C3 5.94772 3.44772 5.5 4 5.5Z"
            stroke="#ffffff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
      <span className="home-page__button-text-content">Запись экрана</span>
    </button>
  );
};
export default RecordButton;
