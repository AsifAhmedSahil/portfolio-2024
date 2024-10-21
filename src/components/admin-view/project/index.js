"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "github",
  },
];

export default function AdminProjectView({ formData, setFormData , handleSaveData , data,handleDelete ,handleProjectUpdate}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div key={item._id} className="flex flex-col gap-4 border p-4 border-green-600 text-black">
                  <p>Project Name: {item.name}</p>
                  <p>Technologies: {item.technologies}</p>
                  <p>Live Link: {item.website}</p>
                  <p>Github: {item.github}</p>
                  <button onClick={() => handleProjectUpdate(item)} className="mt-2 border text-black border-blue-600 p-2 font-bold text-[14px]">
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="mt-2 border text-black border-red-600 p-2 font-bold text-[14px]"
                  >
                    Delete
                  </button>
                </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button onClick={()=> handleSaveData('project')} className="mt-[10px] border text-black border-green-600 p-4 font-bold text-[16px]">
          Add Project
        </button>
      </div>
    </div>
  );
}
