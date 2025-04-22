import sampleCV from "../../data/sampleCV.json";

const PersonalDetailsInput = () => {
  const { fullName, address, phone, email } = sampleCV.personalDetails;
  console.log(phone)
  return (
    <form id="personalDetails">
      <div className="formLabel">
        <div className="formLabel icon"></div>
        <div className="formLabel title">Personal Details</div>
        <button type="button" className="showMore icon"></button>
      </div>

      <div id="fullNameInput" className="personalInput">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Bob McJobhunter"
          defaultValue={fullName}
          required
        />
      </div>

      <div id="addressInput" className="personalInput">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="123 Maplevood Rd, ON, Canada"
          defaultValue={address}
          required
        />
      </div>

      <div id="phoneInput" className="personalInput">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="647-967-1111"
          defaultValue={phone}
          required
        />
      </div>

      <div id="emailInput" className="personalInput">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="pleasehireme42@gmail.com"
          name="email"
          defaultValue={email}
          required
        />
      </div>
    </form>
  );
};

export default PersonalDetailsInput;
