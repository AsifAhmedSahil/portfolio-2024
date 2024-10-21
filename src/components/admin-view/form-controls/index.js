"use client";

export default function FormControls({ controls, formData, setFormData }) {
  return controls.map((controlItem) => (
    <div key={controlItem.name} className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {controlItem.label}
      </label>
      <input
        placeholder={controlItem.placeholder}
        type={controlItem.type}
        name={controlItem.name}
        id={controlItem.name}
        value={formData[controlItem.name] || ''} // Ensure it's controlled
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            [controlItem.name]: e.target.value,
          }));
        }}
        className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
      />
    </div>
  ));
}
