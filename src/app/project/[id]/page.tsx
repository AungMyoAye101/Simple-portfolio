import React from "react";

const page = ({ params }: { params: { id: number } }) => {
  return (
    <section className="section-container">
      <h1>hello{params.id}</h1>
    </section>
  );
};

export default page;
