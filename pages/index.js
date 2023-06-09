import { useRouter } from "next/router";
import { langs } from "../constant";

export default function Home() {
  const { locale } = useRouter();
  const { title, desc } = langs[locale].home;

  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-6xl text-center font-bold">{title}</h1>
      <div className="text-2xl mt-20">{desc}</div>
    </section>
  );
}
