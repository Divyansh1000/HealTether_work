import React from "react";

const FormInput = (props) => {
  const { label, onChange, id, ...inputProps } = props;

  return (
    <div className="">
      <div className="w-96 flex justify-between mt">
        <label className="text-teal-800 font-semibold justify-between">{props.label}</label>
        
        <input  {...inputProps} onChange={onChange} className="border rounded-md border-black px-2 m-1"/>
      </div>
      
    </div>
  );
};

export default FormInput;
