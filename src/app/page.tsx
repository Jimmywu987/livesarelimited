import { AboutUs } from "@/components/mainPage/AboutUs";
import { Banner } from "@/components/mainPage/Banner";
import { Services } from "@/components/mainPage/Services";
import { Partner } from "@/components/mainPage/Partner";

const Home = () => {
  return (
    <div className="space-y-16">
      <Banner />
      <Services />
      <AboutUs />
      <Partner />
    </div>
  );
};

export default Home;
