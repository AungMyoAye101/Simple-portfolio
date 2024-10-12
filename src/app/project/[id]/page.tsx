import ProjectDetail from "@/components/ProjectDetail";
import Recommed from "@/components/Recommed";

const page = ({ params }: { params: { id: number } }) => {
  return (
    <section className="section-container">
      {/* <div className="flex flex-col md:flex-row gap-10 justify-center py-10 ">
        <div className="relative w-[45%] h-[40vh] bg-purple-400 rounded-lg ">
          <Image src={project.image} fill alt="nama" className="object-cover" />
        </div>
        <div className="w-[50%] flex flex-col gap-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-poppin font-semibold ">
            {project.name}
          </h1>
          <p className="font-lora text-lg md:text-xl ">{project.description}</p>
          <div className="flex items-center flex-wrap gap-2">
            {project.iconList.map((icon, i) => (
              <div
                key={i}
                className="flex gap-2 items-center border border-cyan-500 rounded-lg px-2 py-1 hover:shadow-md hover:shadow-cyan-400 bg-blend-difference"
              >
                <Image src={icon.icon} width={25} height={25} alt={icon.name} />{" "}
                <span className=" font-poppin font-light">{icon.name}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <a
              href={project.siteLink}
              target="_blank"
              className="flex items-center gap-2 text-base md:text-lg font-poppin hover:text-purple-400"
            >
              <FaGithub />
              <span>Source Code</span>
            </a>
            <a
              href={project.siteLink}
              target="_blank"
              className="flex items-center gap-2 text-base md:text-lg font-poppin hover:text-purple-400"
            >
              <FaExternalLinkAlt />
              <span>Live Site</span>
            </a>
          </div>
        </div>
      </div> */}
      <ProjectDetail id={params.id} />

      <Recommed />
    </section>
  );
};

export default page;
