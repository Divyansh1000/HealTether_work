import React, { useState } from "react";

const LoginForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mobileNumber: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full px-20">
      {/* <div className='bg-black'> </div> */}
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <input
              type="number"
              name="mobileNumber"
              placeholder="Mobile number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              className="border border-black rounded p-3 w-full"
            
            
            
            />
            <p className="">
              or <span className="text-purple-700">Create new account</span>
            </p>
            <div className="flex justify-center py-4">
              <button
                type="button"
                onClick={nextStep}
                className="text-white shadow-slate-400 shadow-lg bg-teal-600 px-5 py-2 rounded"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              className="border border-black rounded p-3 w-full"
            />
            <p onClick={() => setStep(3)}>Forgot Password?</p>

            <div className="flex justify-between py-4 ">
              <button
                type="button"
                onClick={prevStep}
                className="text-white shadow-slate-400 shadow-lg bg-teal-600 px-5 py-2 rounded"
              >
                Previous
              </button>
              <button type="submit" className="text-white shadow-slate-400 shadow-lg bg-teal-600 px-5 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="  ">
            <label>Enter new password</label>
            <input
              type="password"
              name="newPassword"
              placeholder="New password"
              value={formData.newPassword}
              onChange={handleInputChange}
              className="border border-black rounded my-2 p-3 w-full"
            />

            <label className="py-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="border border-black rounded my-2 p-3 w-full"
            />
            <div className="flex justify-between mt-3">
              <button
                type="button"
                onClick={prevStep}
                className="text-white shadow-slate-400 shadow-lg bg-teal-600 px-5 py-1 rounded"
              >
                Previous
              </button>
              <button type="submit" className="text-white shadow-slate-400 shadow-lg bg-teal-600 px-5 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
