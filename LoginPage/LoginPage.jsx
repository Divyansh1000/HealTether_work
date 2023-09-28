import HealTetherLogo from "../assets/HealTetherLogo.png";
import NationalHealthAuthority from "../assets/national-health-authority.jpg";

import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div className="flex ">
      <div className="w-full h-screen flex flex-col justify-center items-center bg-teal-200 rounded-r-[5rem]  ">
        <h1 className="text-3xl font-semibold mt-20"> Welcome to</h1>
        <img
          src={HealTetherLogo}
          alt="HealTether Logo"
          className="object-contain w-[200px] m-5	"
        />
        <p>Empower your Practice!</p>{" "}
        <p>Be assured that we have strong commitment to your </p>
        <p> data's privacy and security</p>
        <div className="flex m-12 justify-center items-center ">
          <p className="mx-5">Approved by </p>
          <img
            src={NationalHealthAuthority}
            alt="NationalHealthAuthorityLogo"
            className="object-contain w-[100px] 	"
          />
        </div>

        <div className="flex justify-center mt-20 ">
          <p>Privacy policy | Terms & Conditions </p>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold py-8">
          Join our network of Doctors
        </h1>
        <p className="py-3">Sign in to get started</p>

        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
