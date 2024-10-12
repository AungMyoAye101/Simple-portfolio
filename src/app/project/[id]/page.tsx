import ProjectDetail from "@/components/ProjectDetail";
import Recommed from "@/components/Recommed";

const page = ({ params }: { params: { id: number } }) => {
  return (
    <section className="section-container">
      <ProjectDetail id={params.id} />
      <Recommed />
    </section>
  );
};

export default page;
