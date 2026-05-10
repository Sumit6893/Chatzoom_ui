import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link } from "react-router-dom";
import { loginUserApi } from "../api/auth.api";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUserApi(data);

      localStorage.setItem("token", result.token);
      localStorage.setItem("name", result.name);

      Swal.fire("Success", "Login Done", "success");

      navigate("/dashboard");
    } catch (error) {
      Swal.fire(
        "Error",
        error.response?.data?.message || "Login Failed",
        "error",
      );
    }

    const result = await res.json();

    if (res.ok) {
      localStorage.setItem("token", result.token);
      localStorage.setItem("name", result.name);

      Swal.fire("Success", "Login Done", "success");

      navigate("/dashboard");
    } else {
      Swal.fire("Error", result.message || "Login Failed", "error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
          Welcome Back
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Login
        </button>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-green-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
