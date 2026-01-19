export default function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary: "bg-cyan-600 hover:bg-cyan-500",
    secondary: "bg-gray-800 hover:bg-gray-700"
  };

  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-xl text-white transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
