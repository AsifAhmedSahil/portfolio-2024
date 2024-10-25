"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "heading",
    placeholder: "Enter heading text",
    type: "text",
    label: "Enter heading text",
  },
  {
    name: "summary",
    placeholder: "Enter Career summary",
    type: "text",
    label: "Enter Career summary",
  },
  {
    name: "resumelink",
    placeholder: "Enter Resume Drive Link",
    type: "text",
    label: "Enter Resume Drive Link",
  },
];

export default function AdminHomeView({ formData, setFormData, handleSaveData }) {
  console.log(formData);
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData('home')}
          className="mt-[10px] text-black border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
