import './App.css';
import { Cover, Footer, FrequentlyAskQuestion, Heroes, MillionDollar, MintCover, RoadMap, UniqueAvatar } from './component';

function App() {
  return (
    <div className="container-fluid">
      <Cover/>
      {/* <MintCover /> */}
      <UniqueAvatar />
      <MillionDollar />
      <RoadMap />
      <Heroes />
      <FrequentlyAskQuestion />
      <Footer />
    </div>
  );
}

export default App;
