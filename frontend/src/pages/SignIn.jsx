import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const SignIn = ({ isDarkMode }) => {
  const [formType, setFormType] = useState("signin");
  const navigate = useNavigate();

  // Toggle between Sign-In and Sign-Up forms
  const handleChangeFormType = () => {
    setFormType(formType === "signin" ? "signup" : "signin");
  };

  // Navigate to Forgot Password page
  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div>
      <section
        className={`flex justify-center items-center w-full lg:flex ${
          formType === "signup" ? "mt-10" : "mt-15"
        }`}
      >
        <div className="w-full">
          {formType === "signin" ? (
            <section className="flex flex-col w-full rounded-2xl justify-center items-center">
              <AuthForm formType={formType} isDarkMode={isDarkMode} />

              {/* Forgot Password Link */}
              <p
                onClick={handleForgotPassword}
                className={`mt-3 text-sm cursor-pointer underline ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                Forgot Password?
              </p>

              {/* Toggle to Sign-Up */}
              <p className={isDarkMode ? "text-white" : "text-gray-800"}>
                Don't have an account?
                <button
                  className="cursor-pointer bg-white text-black py-1 mx-2 rounded"
                  onClick={handleChangeFormType}
                >
                  Sign-Up
                </button>
              </p>
            </section>
          ) : (
            <section className="flex flex-col space-y-8 rounded-2xl justify-center items-center">
              <AuthForm formType={formType} isDarkMode={isDarkMode} />

              {/* Toggle to Sign-In */}
              <p className={isDarkMode ? "text-white" : "text-gray-800"}>
                Already have an account?
                <button
                  className="cursor-pointer bg-white text-black py-1 mx-2 rounded"
                  onClick={handleChangeFormType}
                >
                  Sign-In
                </button>
              </p>
            </section>
          )}
        </div>
      </section>
    </div>
  );
};

export default SignIn;
