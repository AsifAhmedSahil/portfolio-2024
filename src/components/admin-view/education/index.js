"use client";


import FormControls from "../form-controls";


const controls = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "Enter College Name",
  },
];

// const handleDelete = async (id) => {
//   const response = await deleteData("education", id);
//   if (response?.success) {
//     fetchData();
//   }
// };


export default function AdminEducationView({handleSaveData, formData, setFormData , data,handleDelete,handleEducationUpdate}) {
  return  <div className="w-full">
  <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div key={item._id} className="flex flex-col gap-4 border p-4 border-green-600 text-black">
                  <p>Degree: {item.degree}</p>
                  <p>Institution: {item.college}</p>
                  <p>Year: {item.year}</p>
                  <button onClick={() => handleEducationUpdate(item)} className="mt-2 border text-black border-blue-600 p-2 font-bold text-[14px]">
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
    <button onClick={()=> handleSaveData('education')} className="mt-[10px] border text-black border-green-600 p-4 font-bold text-[16px]">
      Add Education
    </button>
  </div>
</div>
}
