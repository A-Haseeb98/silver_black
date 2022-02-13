import './App.css';
import { Cover, Footer, FrequentlyAskQuestion, Heroes, MillionDollar, RoadMap, UniqueAvatar } from './component';

function App() {
  return (
    <div className="container-fluid">
      <Cover/>
      <UniqueAvatar />
      {/* <MillionDollar /> */}
      <RoadMap />
      <Heroes />
      <FrequentlyAskQuestion />
      <Footer />
    </div>
  );
}

export default App;
