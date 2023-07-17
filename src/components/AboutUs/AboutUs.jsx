import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const Doctor = () => {
  return (
    <div className="w-full  lg:w-2/4 p-4">
      <div className="bg-white rounded-lg shadow-lg flex ">
        <img
          src={"assets/images/team/dr.png"}
          alt={"amr elzamel"}
          className="w-1/2 h-64 rounded-t-lg  object-cover object-top  "
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">Dr.Amr Elzamel</h2>
          <h2 className=" text-base">Supervised</h2>
          <div className="flex justify-center flex-col md:flex-row mt-5 gap-5">
            <a
              href={""}
              target="_blank"
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <LinkedInIcon className=" text-sky-700 " />
              LinkedIn
            </a>
            <a
              href={""}
              target="_blank"
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <GitHubIcon className=" text-black" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const TeamMember = ({ image, title, role, linkedin, github }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <img
          src={"assets/images/team/" + image}
          alt={title}
          className="w-full h-64 rounded-t-lg  object-cover object-top  "
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <h2 className=" text-base">{role}</h2>
          <div className="flex justify-center mt-5 gap-5">
            <a
              href={linkedin}
              target="_blank"
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <LinkedInIcon className=" text-sky-700 " />
              LinkedIn
            </a>
            <a
              href={github}
              target="_blank"
              className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
            >
              <GitHubIcon className=" text-black" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const teamMembers = [
    {
      image: "abdullah.jpg",
      title: "abdullah Saeed Kodary",
      role: "Team Leader, Mern Stack developer",
      linkedin: "https://www.linkedin.com/in/abdullah-saeed-93b508203/",
      github: "https://github.com/abdullah0saeed",
    },
    {
      image: "hassan.jpg",
      title: "Hassan Ahmed Abdel-fatah ",
      role: "Team Leader, UI/UX designer",
      linkedin: "https://www.linkedin.com/in/hassan-ahmed-03256a227",
      github: "https://github.com/johndoe",
    },
    {
      image: "amr.jpg",
      title: "Amr Mohamed El-bahnsawy",
      role: "Team Leader, Front End developer",
      linkedin: "https://www.linkedin.com/in/amr-elbahnsawy/",
      github: "https://github.com/amrbahnas",
    },
    {
      image: "ahmedEsmael.jpg",
      title: "Ahmed Esmael Galal Eldien",
      role: "Team Leader, Mobile developer",
      linkedin: "https://www.linkedin.com/in/ahmed-esmail-078978214",
      github: "https://github.com/Elcomi",
    },
    {
      image: "fady.jpg",
      title: "fady Raouf sabh hana",
      role: "Team Leader, BackEnd developer",
      linkedin: "https://www.linkedin.com/in/fady-raouf-434a62199",
      github: "https://github.com/fady231",
    },

    {
      image: "saeed.jpg",
      title: "saeed abdelhasib saeed",
      role: "Team Leader, Ai developer",
      linkedin: "https://www.linkedin.com/in/saeed-abdelhaseeb-2b625a1a9",
      github: "https://github.com/saeedabdelhasib",
    },
    {
      image: "usama.jpg",
      title: "Usama Abdel-Alim Elshazly",
      role: " Front End developer",
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },
    {
      image: "ghada.jpg",
      title: "Ghada Mohamed fathi",
      role: " Front End developer",
      linkedin: "https://www.linkedin.com/in/ghada-mohammed-12a61a241",
      github: "https://github.com/engghadamohammed",
    },

    {
      image: "omar.jpg",
      title: "Omar Ahmed Ibrahim Mohamed",
      role: "Mobile developer",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com",
    },
    {
      image: "ahmed.jpg",
      title: "Ahmed Adbelsalam Tawfik",
      role: "BackEnd developer",
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/ahmedelsellamy",
    },
    {
      image: "ayman.jpg",
      title: "ayman ahmed ibrahim",
      role: "BackEnd developer",
      linkedin: "https://www.linkedin.com/in/janesmith",
      github: "https://github.com/janesmith",
    },

    {
      image: "kareem.jpg",
      title: "kareem abdelrahman shaaban",
      role: "AI developer",
      linkedin: "https://www.linkedin.com/in/kareemelhawagry/",
      github: "https://github.com/kareemelhawagry",
    },
  ];

  return (
    <div className="theContainer mx-auto px-4 lg:px-0 my-10">
      <div className=" my-20">
        <div className=" text-center flex justify-center">
          <h2 className=" text-center text-3xl font-bold pb-2 border-b-[3px] border-orange w-fit">
            About Us
          </h2>
        </div>
        <div className=" flex justify-center mt-10">
          <p className=" text-center w-full md:w-[80%]">
            Game Based Learning is a project developed by a group of students
            from the University of Zagazig, The main goal of this project is to
            develop a web application that allows parent to create and manage
            their own subject data, and thier Children can play Games to learn
            these subjects.
          </p>
        </div>
      </div>
      <div className=" text-center flex justify-center my-10">
        <h2 className=" text-center text-3xl font-bold pb-2 border-b-[3px] border-orange w-fit">
          Our Team Members
        </h2>
      </div>
      <div className=" flex justify-center mb-4">
        <Doctor />
      </div>
      <div className="flex flex-wrap justify-center -mx-4">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
