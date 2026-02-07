import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NorthStar from './components/NorthStar'
import LeadershipSection from './components/LeadershipSection'
import WhyWeExist from './components/WhyWeExist'
import HowWeTransform from './components/HowWeTransform'
import Vision from './components/Vision'

function App() {
  return (
    <div>
      <Header />
      {/* <div className='h-[116px]' /> */}
      <HeroSection />
      <NorthStar />
      <LeadershipSection />
      <WhyWeExist />
      <HowWeTransform />
      <Vision />
    </div>
  );
};

export default App