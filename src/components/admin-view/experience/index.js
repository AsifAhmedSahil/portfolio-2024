"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Job Profile",
  },
];

export default function AdminExperienceView({
  formData,
  handleSaveData,
  setFormData,
  data,
  handleDelete,
  handleExperienceUpdate
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div key={item._id} className="flex flex-col gap-4 border p-4 border-green-600 text-black">
                  <p>Position: {item.position}</p>
                  <p>Company: {item.company}</p>
                  <p>Duration: {item.duration}</p>
                  <p>Location: {item.location}</p>
                  <p>Job Profile: {item.jobprofile}</p>
                  <button onClick={() => handleExperienceUpdate(item)} className="mt-2 border text-black border-blue-600 p-2 font-bold text-[14px]">
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
        <button
          onClick={() => handleSaveData("experience")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px] text-black"
        >
          Add Experience
        </button>
      </div>
    </div>
  );
}
