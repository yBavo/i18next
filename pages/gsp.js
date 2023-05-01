import { langs } from "../constant";

export async function getStaticProps({ locale }) {
  const t = langs[locale].gsp;

  return {
    props: {
      t,
    },
  };
}

const gsp = ({ t }) => {
  const { title, desc } = t;

  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-6xl text-center font-bold">{title}</h1>
      <div className="text-2xl mt-20">{desc}</div>
    </section>
  );
};

export default gsp;
