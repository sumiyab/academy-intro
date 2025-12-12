import { Rubik_Mono_One, Inter } from "next/font/google";
const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <div>
      <div className="text-3f-gg bg-background p-8 hover:text-hover max-sm:bg-amber-600 max-sm:flex max-sm:flex-col">
        hello world
      </div>
      <div className={rubik.className}>TOM</div>
    </div>
  );
};

export default Home;
