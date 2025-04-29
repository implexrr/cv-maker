const ClearResumeButton = ({clearResume}) => {
  return (
    <button type="button" className="clearResume" onClick={clearResume}>
    <svg
      viewBox="0 0 48 48"
      width="36"
      height="36"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trash Can Body */}
      <rect
        x="12"
        y="16"
        width="24"
        height="26"
        rx="2"
        fill="#ef4444"
        stroke="#b91c1c"
        strokeWidth="2"
      />

      {/* Lid */}
      <rect x="10" y="12" width="28" height="6" rx="1" fill="#b91c1c" />

      {/* Handle */}
      <rect x="20" y="8" width="8" height="4" rx="1" fill="#991b1b" />

      {/* Interior Lines */}
      <line x1="18" y1="20" x2="18" y2="38" stroke="#fff" strokeWidth="2" />
      <line x1="24" y1="20" x2="24" y2="38" stroke="#fff" strokeWidth="2" />
      <line x1="30" y1="20" x2="30" y2="38" stroke="#fff" strokeWidth="2" />
    </svg>
    <span>Clear Resume</span>
  </button>
  )
}

export default ClearResumeButton