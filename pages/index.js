import { useRouter } from "next/router";

export default function Home() {
  const { locale } = useRouter();

  const title = {
    en: "Home",
    fr: "Accueil",
  };

  const desc = {
    en: "Welcome to home!",
    fr: "Bienvenu!",
  };

  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-6xl text-center font-bold">{title[locale]}</h1>
      <div className="text-2xl mt-20">{desc[locale]}</div>
    </section>
  );
}
