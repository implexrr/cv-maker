const SaveSubmissionButton = () => {
  return (
    <button type="submit" className="saveSubmission">
      <svg
        viewBox="0 0 48 48"
        width="36"
        height="36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="12"
          y="10"
          width="24"
          height="28"
          rx="2"
          ry="2"
          stroke="#333"
          strokeWidth="2"
          fill="#fff"
        />
        <path d="M16 16H32M16 22H32M16 28H24" stroke="#999" strokeWidth="2" />
        <path
          d="M30 6C35 8 38 13 36 18M36 18L33 15M36 18L39 15"
          stroke="#333"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Save</span>
    </button>
  );
};

export default SaveSubmissionButton;
