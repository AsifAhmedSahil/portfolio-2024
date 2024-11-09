import React, { useState } from "react";
import FormControls from "../form-controls";

// Define your form control structure (existing ones)
const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Project Image URL",
    type: "text",
    label: "Project Image URL",
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
    label: "Github",
  },
  
];

export default function AdminProjectView({
  formData,
  setFormData,
  handleSaveData,
  data,
  handleDelete,
  handleProjectUpdate,
}) {
  // State for managing image file and preview
  const [file, setFile] = useState(null);




  


  // Trigger image upload when the form is submitted
  const handleSubmit = async () => {
    console.log(formData)
    handleSaveData("project");  // Call the save data function after image upload
  };

  return (
    <div className="w-full">
  <div className="bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4">
    <div className="mb-10">
      {data && data.length ? (
        data.map((item) => (
          <div
            key={item._id}
            className="flex flex-col md:flex-row gap-4 border p-4 border-green-600 text-black rounded-md"
          >
            <div className="flex-1 overflow-hidden">
              <p className="font-semibold text-lg">Project Name: {item.name}</p>
              <p className=" ">Project Image: {item.technologies}</p>
              <p>Live Link: {item.website}</p>
              <p>Github: {item.github}</p>
            </div>

            

            <div className="flex gap-2 flex-wrap md:flex-col md:ml-4">
              <button
                // onClick={() => handleProjectUpdate(item)}
                className="mt-2 border text-black border-blue-600 p-2 font-bold text-[14px] hover:bg-blue-100 rounded"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="mt-2 border text-black border-red-600 p-2 font-bold text-[14px] hover:bg-red-100 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No Projects Available</p>
      )}
    </div>

    {/* Project Form Controls */}
    <FormControls controls={controls} formData={formData} setFormData={setFormData} />

    {/* Save Project Button */}
    <button
      onClick={handleSubmit} // Call handleSubmit which will call handleImageUpload first
      className="mt-4 w-full md:w-auto border text-black border-green-600 p-4 font-bold text-[16px] rounded hover:bg-green-100"
    >
      Add Project
    </button>
  </div>
</div>

  );
}
