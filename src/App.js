import './App.css';
import { Cover, Footer,NewSection, FrequentlyAskQuestion, Heroes, MillionDollar, MintCover, RoadMap, UniqueAvatar } from './component';

function App() {
  return (
    <div className="container-fluid">
      <Cover/>
      {/* <MintCover /> */}
      <NewSection/>
      {/* <UniqueAvatar />
      <MillionDollar /> */}
      <RoadMap />
      <Heroes />
      <FrequentlyAskQuestion />
      <Footer />
    </div>
  );
}

export default App;
