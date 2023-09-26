import React, { useState } from "react";
import FormInput from "./FormInput";

const PatientsRecord = () => {
  const [values, setValues] = useState({
    name: "",
    mobileNumber: "",
    birthday: "",
    age: "",
    gender: "",
    height: "",
    whatsappNumber: "",
    email: "",
    address: "",
    medicalRecords: null,
    paymentHistory: "",
    idType: "",
    idNumber: "",
    otherDocuments: null,
    upiId: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    accountHolder: "",
    procedureRecords: [],
    appointmentHistory: "",
  });

  const basicDetails = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      // label: "Name",
    },

    {
      id: 2,
      name: "mobileNumber",
      type: "number",
      placeholder: "Mobile Number",
      // label: "Mobile number",
    },
  ];

  const personalDetails = [
    {
      id: 1,
      name: "birhtday",
      type: "birthday",
      placeholder: "Birhtday",
      label: "Birhtday",
    },
    {
      id: 2,
      name: "age",
      type: "number",
      placeholder: "Age",
      label: "Age",
    },
    {
      id: 3,
      name: "gender",
      type: "text",
      placeholder: "Gender",
      label: "Gender",
    },
    {
      id: 4,
      name: "height",
      type: "text",
      placeholder: "Height",
      label: "Height",
    },
    {
      id: 5,
      name: "weight",
      type: "text",
      placeholder: "Weight",
      label: "Weight",
    },
  ];

  const contactDetails = [
    {
      id: 1,
      name: "mobile",
      type: "text",
      placeholder: "mobile",
      label: "Mobile",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "address",
      type: "text",
      placeholder: "Address",
      label: "Address",
    },
  ];

  const medicalRecords = [
    {
      id: 1,
      name: "",
      type: "file",
      placeholder: "",
      label: "",
    },
  ];

  const paymentHistorys = [
    {
      id: 1,
      name: "",
      type: "file",
      placeholder: "",
      label: "",
    },
  ];

  const documentDetails = [
    {
      id: 1,
      name: "idType",
      type: "text",
      placeholder: "ID Type ",
      label: "ID Type",
    },
    {
      id: 2,
      name: "idNumber",
      type: "number",
      placeholder: "number",
      label: "ID no.",
    },
    {
      id: 3,
      name: "",
      type: "file",
      placeholder: "",
      label: "Other Documents",
    },
  ];

  const bankDetails = [
    {
      id: 1,
      name: "upiId",
      type: "text",
      placeholder: "UPI ID",
      label: "UPI ID",
    },

    {
      id: 2,
      name: "bank",
      type: "text",
      placeholder: "Bank Name",
      label: "Bank",
    },
    {
      id: 3,
      name: "accountNumber",
      type: "number",
      placeholder: "A/c number",
      label: "A/c no.",
    },
    {
      id: 4,
      name: "ifsc",
      type: "text",
      placeholder: "ifsc",
      label: "IFSC code",
      pattern: "[a-zA-Z0-9]+",
    },
    {
      id: 5,
      name: "accountHolder",
      type: "text",
      placeholder: "Account Holder Name",
      label: "Account Holder",
    },
  ];

  const procedureRecords = [
    {
      id: 1,
      name: "",
      type: "file",
      placeholder: "",
      label: "",
    },
  ];

  const appointmentsHistorys = [
    {
      id: 1,
      name: "",
      type: "file",
      placeholder: "",
      label: "",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex justify-between ">
        <div className="w-2/4">
          
          <div className="w-full p-4 flex ">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-xl font-bold mt-6">
              PR
            </div>

            <div className="w-4/5">
              {basicDetails.map((basicDetail) => (
                <FormInput
                  key={basicDetail.id}
                  {...basicDetail}
                  values={values[basicDetail.name]}
                  onChange={onChange}
                />
              ))}

              <div className="flex center  my-4  ml-20 gap-20">
                <button className=" rounded-lg p-2  bg-green-900 text-white">
                  Save Changes
                </button>
                <button className=" rounded-lg p-2  bg-gray-500 text-white">
                  Start Consultation
                </button>
              </div>
            </div>
          </div>

          <div className=" p-4">
            <p className="uppercase font-semibold tracking-wider	my-2">
              Personal Details
            </p>
            {personalDetails.map((personalDetail) => (
              <FormInput
                key={personalDetail.id}
                {...personalDetail}
                values={values[personalDetail.name]}
                onChange={onChange}
              />
            ))}

            <div className="relative border border-grey mt-8"></div>
          </div>

          <div className=" p-4">
            <p className="uppercase font-semibold tracking-wider	my-2">
              contact Details
            </p>
            {contactDetails.map((contactDetail) => (
              <FormInput
                key={contactDetail.id}
                {...contactDetail}
                values={values[contactDetail.name]}
                onChange={onChange}
              />
            ))}

            <div className="relative border border-grey mt-8"></div>
          </div>

          <div className=" p-4">
            <p className="uppercase font-semibold tracking-wider my-2	">
              medical Records
            </p>
            {medicalRecords.map((medicalRecord) => (
              <FormInput
                key={medicalRecord.id}
                {...medicalRecord}
                values={values[medicalRecord.name]}
                onChange={onChange}
              />
            ))}

            <div className="relative border border-grey mt-8"></div>
          </div>

          <div className=" p-4">
            <p className="uppercase font-semibold tracking-wider	my-2">
              payment History
            </p>
            {paymentHistorys.map((paymentHistory) => (
              <FormInput
                key={paymentHistory.id}
                {...paymentHistory}
                values={values[paymentHistory.name]}
                onChange={onChange}
              />
            ))}
            <div className="relative border border-grey mt-8"></div>
          </div>
        </div>

        <div className="relative border border-grey mt-8"></div>

        <div className="w-2/4">
          <div className=" p-4">
            <p className="uppercase font-semibold tracking-wider	my-2">
              Documents
            </p>
            {documentDetails.map((documentDetail) => (
              <FormInput
                key={documentDetail.id}
                {...documentDetail}
                values={values[documentDetail.name]}
                onChange={onChange}
              />
            ))}

            <div className="relative border border-grey mt-8"></div>
          </div>

          <div className=" p-4">
            <p className="uppercase font-semibold tracking-wider	my-2">
              bank Details
            </p>
            {bankDetails.map((bankDetail) => (
              <FormInput
                key={bankDetail.id}
                {...bankDetail}
                values={values[bankDetail.name]}
                onChange={onChange}
              />
            ))}

            <div className="relative border border-grey mt-8"></div>
          </div>

          <div className=" p-4">
            <p className="uppercase font-semibold tracking-wider	my-2">
              procedureRecords
            </p>
            {procedureRecords.map((procedureRecord) => (
              <FormInput
                key={procedureRecord.id}
                {...procedureRecord}
                values={values[procedureRecord.name]}
                onChange={onChange}
              />
            ))}

            <div className="relative border border-grey mt-8"></div>
          </div>

          <div className=" p-4">
            <p className="uppercase font-semibold tracking-wider	my-2">
              appointmentHistorys
            </p>
            {appointmentsHistorys.map((appointmentHistory) => (
              <FormInput
                key={appointmentHistory.id}
                {...appointmentHistory}
                values={values[appointmentHistory.name]}
                onChange={onChange}
              />
            ))}

            <div className="relative border border-grey mt-8"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PatientsRecord;
