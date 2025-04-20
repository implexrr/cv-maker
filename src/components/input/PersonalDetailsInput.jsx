const PersonalDetailsInput = () => {
  return (
    <form id="personalDetails">
      <div className="formLabel">
        <div className="formLabel icon"></div>
        <div className="formLabel title">Personal Details</div>
        <div className="showMore icon"></div>
      </div>

      <div id="fullNameInput">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="TDL"
          required
        />
      </div>

      <div id="addressInput">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="TDL"
          required
        />
      </div>

      <div id="phoneInput">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="TDL" required />
      </div>

      <div id="emailPinput">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="TDL"
          name="email"
          required
        />
      </div>
    </form>
  );
};

export default PersonalDetailsInput;
