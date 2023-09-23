import {
  Criteria,
  Faq,
  Hero,
  Introduction,
  Partners,
  Rewards,
  Rules,
  Timeline,
} from "../components";
const Home = () => {
  return (
    <div>
      <Hero />

      <Introduction />

      <Rules />

      <Criteria />
      <Faq />
      <Timeline />
      <Rewards />
      <Partners />
    </div>
  );
};

export default Home;
