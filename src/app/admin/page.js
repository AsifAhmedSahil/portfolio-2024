"use client";

import AdminAboutView from "@/components/admin-view/about";
import AdminContactView from "@/components/admin-view/contact";
import AdminEducationView from "@/components/admin-view/education";
import AdminExperienceView from "@/components/admin-view/experience";
import AdminHomeView from "@/components/admin-view/home";
import Login from "@/components/admin-view/login";
import AdminProjectView from "@/components/admin-view/project";
import { addData, deleteData, getData, login, updateData } from "@/services";
import { useEffect, useState } from "react";

const initialHomeFormData = {
  heading: "",
  summary: "",
  resumelink:""
};

const initialAboutFormData = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

const initialExperienceFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialEducationFormData = {
  degree: "",
  year: "",
  college: "",
};

const initialProjectFormData = {
  name: "",
  website: "",
  technologies: "",
  github: "",
};

const initialLoginFormData = {
  username: "",
  password: "",
};

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [aboutViewFormData, setAboutViewFormData] =
    useState(initialAboutFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceFormData
  );
  const [educationViewFormData, setEducationViewFormData] = useState(
    initialEducationFormData
  );
  const [projectViewFormData, setProjectViewFormData] = useState(
    initialProjectFormData
  );


  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);

 

  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);

    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (
      currentSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }
  }

  console.log(allData, 'allData');


  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      education: educationViewFormData,
      experience: experienceViewFormData,
      project: projectViewFormData,
    };

    const response = update
      ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
      : await addData(currentSelectedTab, dataMap[currentSelectedTab]);
    console.log(response, "response");

    if (response.success) {
      resetFormDatas();
      extractAllDatas();
      setUpdate(false)
    }
  }
  const handleDelete = async (id) => {
    const response = await deleteData(currentSelectedTab, id);
    console.log(response)
    if (response?.success) {
      extractAllDatas();
    }
  };

  const handleEducationUpdate = (item) => {
    setEducationViewFormData(item);
    setUpdate(true);
  };
  const handleExperienceUpdate = (item) => {
    setExperienceViewFormData(item);
    setUpdate(true);
  };
  const handleProjectUpdate = (item) => {
    setProjectViewFormData(item);
    setUpdate(true);
  };

  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);

  function resetFormDatas() {
    setHomeViewFormData(initialHomeFormData);
    setAboutViewFormData(initialAboutFormData);
    setExperienceViewFormData(initialExperienceFormData);
    setEducationViewFormData(initialEducationFormData);
    setProjectViewFormData(initialProjectFormData);
  }

  console.log(allData, homeViewFormData, "homeViewFormData");

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")));
  }, []);

  async function handleLogin() {
    const res = await login(loginFormData);

    console.log(res, "login");

    if (res?.success) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    }
  }

  if (!authUser)
    return (
      <Login
        formData={loginFormData}
        handleLogin={handleLogin}
        setFormData={setLoginFormData}
      />
    );

    const menuItems = [
      {
        id: "home",
        label: "Home",
        component: (
          <AdminHomeView
            formData={homeViewFormData}
            setFormData={setHomeViewFormData}
            handleSaveData={handleSaveData}
          />
        ),
      },
      {
        id: "about",
        label: "About",
        component: (
          <AdminAboutView
            formData={aboutViewFormData}
            setFormData={setAboutViewFormData}
            handleSaveData={handleSaveData}
          />
        ),
      },
      {
        id: "experience",
        label: "Experience",
        component: (
          <AdminExperienceView
            formData={experienceViewFormData}
            handleSaveData={handleSaveData}
            setFormData={setExperienceViewFormData}
            data={allData?.experience}
            handleDelete={handleDelete}
            handleExperienceUpdate={handleExperienceUpdate}
          />
        ),
      },
      {
        id: "education",
        label: "Education",
        component: (
          <AdminEducationView
            formData={educationViewFormData}
            handleSaveData={handleSaveData}
            setFormData={setEducationViewFormData}
            data={allData?.education}
            handleDelete={handleDelete}
            handleEducationUpdate={handleEducationUpdate}
          />
        ),
      },
      {
        id: "project",
        label: "Project",
        component: (
          <AdminProjectView
            formData={projectViewFormData}
            handleSaveData={handleSaveData}
            setFormData={setProjectViewFormData}
            data={allData?.project}
            handleDelete={handleDelete}
            handleProjectUpdate={handleProjectUpdate}
          />
        ),
      },
      {
        id: "contact",
        label: "Contact",
        component: <AdminContactView
        data={allData && allData?.contact}
        />,
      },
    ];

  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-0.5 flex justify-center spcae-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-white"
            onClick={() => {
              setCurrentSelectedTab(item.id);
              resetFormDatas();
              setUpdate(false);
            }}
          >
            {item.label}
          </button>
        ))}
        <button
          onClick={() => {
            setAuthUser(false);
            sessionStorage.removeItem("authUser");
          }}
          className="p-4 font-bold text-xl text-white"
        >
          Logout
        </button>
      </nav>
      <div className="mt-10 p-10">
      {menuItems.map((item) => (
        item.id === currentSelectedTab ? (
          <div key={item.id}>{item.component}</div> // Ensure unique key
        ) : null
      ))}
      </div>
    </div>
  );
}
