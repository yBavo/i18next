import { useRouter } from "next/router";

const About = () => {
  const { locale } = useRouter();

  const title = {
    en: "About",
    fr: "A Propos",
  };

  const desc = {
    en: "I'm an About description.",
    fr: "Je suis une description d'A propos.",
  };
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-6xl text-center font-bold">{title[locale]}</h1>
      <div className="text-2xl mt-20">{desc[locale]}</div>
    </section>
  );
};

export default About;
