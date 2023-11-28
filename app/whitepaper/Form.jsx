import React from "react";
import StateContext from "../../context/StateContext";

function Form() {

 const { setClicked } = React.useContext(StateContext);
    const date = new Date();

    const [loading, setLoading] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    designation: "",
    phone: "",
    date: date.toLocaleString(),
  });
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const freeEmailDomains = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "aol.com",
    "outlook.com",
    // Add other free email domains as needed
  ];

  const validateForm = () => {
    let formErrors = {};

    // Basic validation
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.email.trim()) formErrors.email = "Email is required";
    if (!formData.company.trim()) formErrors.company = "Company is required";
    if (!formData.designation.trim())
      formErrors.designation = "Designation is required";
    if (!formData.phone.trim()) formErrors.phone = "Phone is required";

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else {
      const emailDomain = formData.email.split("@")[1];
      if (freeEmailDomains.includes(emailDomain)) {
        formErrors.email = "Please provide a business email.";
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // return true if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const stringifiedData = JSON.stringify(formData);
      console.log(stringifiedData);
        setLoading(true);

      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/miras/google_sheets/uTQIFenRyJewtfnN?tabId=Sheet1",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify([
              [
                formData.name,
                formData.email,
                formData.company,
                formData.designation,
                formData.phone,
                formData.date,
              ],
            ]),
          }
        );
        await response.json();
        setClicked("2");

        setFormData({
          ...formData,
          name: "",
          email: "",
          company: "",
          designation: "",
          phone: "",
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label m-0 ch">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label m-0 ch">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="company" className="form-label m-0 ch">
          Company
        </label>
        <input
          type="text"
          className="form-control"
          id="company"
          value={formData.company}
          onChange={handleChange}
        />
        {errors.company && <p className="error-text">{errors.company}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="designation" className="form-label m-0 ch">
          Designation
        </label>
        <input
          type="text"
          className="form-control"
          id="designation"
          value={formData.designation}
          onChange={handleChange}
        />
        {errors.designation && (
          <p className="error-text">{errors.designation}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label m-0 ch">
          Phone
        </label>
        <input
          type="number"
          className="form-control"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error-text">{errors.phone}</p>}
      </div>
      <div className="mb-3">
        {
            loading ? (
                <button
          className="connect text-mycolor p1 py-2 my-3 w-100 px-5 mt-4 d-flex justify-content-center align-items-center"
          type="submit"
        >
          <div class="loader--ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
     
        </button>
            ) : (
                <button
                className="connect text-mycolor p1 py-2 my-3 w-100 px-5 mt-4 d-flex justify-content-center align-items-center"
                type="submit"
              >
                  Submit
              </button>
            )

        }
      
      </div>
    </form>
  );
}

export default Form;
