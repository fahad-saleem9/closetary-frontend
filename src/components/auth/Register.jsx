// src/components/auth/Register.jsx
import { useState } from "react";
import React from "react";
import { useNavigate, Link } from "react-router-dom"; // 👈 Link add
import { registerUser, googleLogin, facebookLogin } from "../../services/api";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

export default function Register() {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        if (form.password !== form.password2) {
            setMessage(" Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const data = await registerUser(form);
            setMessage("Registered successfully: " + data.username);

            setTimeout(() => {
                navigate("/login");
            }, 1500);
        } catch (err) {
            setMessage(" Error: " + JSON.stringify(err));
        }
        setLoading(false);
    };

    const handleGoogle = async () => {
        try {
            const tokenId = "GOOGLE_TOKEN_YAHAN";
            const data = await googleLogin(tokenId);
            console.log("Google Login Success:", data);
            navigate("/home");
        } catch (err) {
            setMessage(" Google login failed");
        }
    };

    const handleFacebook = async () => {
        try {
            const accessToken = "FACEBOOK_TOKEN_YAHAN";
            const data = await facebookLogin(accessToken);
            console.log("Facebook Login Success:", data);
            navigate("/home");
        } catch (err) {
            setMessage(" Facebook login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-6">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
                    Log in or sign up in seconds
                </h2>
                <p className="text-center text-gray-500 mb-6 text-sm">
                    Join <span className="font-semibold text-blue-600">Closetary</span> with your email or social accounts
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="username"
                        placeholder="👤 Username"
                        value={form.username}
                        onChange={handleChange}
                        className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="📧 Email"
                        value={form.email}
                        onChange={handleChange}
                        className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="🔑 Password"
                        value={form.password}
                        onChange={handleChange}
                        className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        required
                    />
                    <input
                        type="password"
                        name="password2"
                        placeholder="🔒 Confirm Password"
                        value={form.password2}
                        onChange={handleChange}
                        className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-4 py-3 rounded-lg w-full hover:bg-blue-700 transition font-medium shadow-md"
                    >
                        {loading ? "Registering..." : "Register with Email"}
                    </button>
                </form>

                <div className="my-6 flex items-center">
                    <hr className="flex-1 border-gray-300" />
                    <span className="px-3 text-gray-400 text-sm">OR</span>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Google Login */}
                <button
                    onClick={handleGoogle}
                    className="flex items-center justify-center gap-3 border border-gray-300 bg-white px-4 py-3 rounded-lg w-full hover:shadow-md transition mb-3 font-medium"
                >
                    <FcGoogle size={22} />
                    Continue with Google
                </button>

                {/* Facebook Login */}
                <button
                    onClick={handleFacebook}
                    className="flex items-center justify-center gap-3 border border-gray-300 bg-white px-4 py-3 rounded-lg w-full hover:shadow-md transition font-medium"
                >
                    <FaFacebookF size={20} className="text-blue-600" />
                    Continue with Facebook
                </button>

                {message && (
                    <p
                        className={`mt-4 text-center text-sm font-medium ${message.startsWith("✅")
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                    >
                        {message}
                    </p>
                )}

                {/* 👇 Already have an account? */}
                <p className="mt-6 text-center text-gray-600 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 font-medium hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}
