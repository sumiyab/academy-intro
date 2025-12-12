import { Rubik_Mono_One, Inter } from "next/font/google";
const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <div>
      <div className={rubik.className}>TOM</div>
    </div>
  );
};

export default Home;
