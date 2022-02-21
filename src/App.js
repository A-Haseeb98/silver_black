import './App.css';
import { Cover, Footer,NewSection, FrequentlyAskQuestion, Heroes, MintCover, RoadMap } from './component';

function App() {
  return (
    <div className="container-fluid">
      <Cover/>
      {/* <MintCover /> */}
      <NewSection/>
      <RoadMap />
      <Heroes />
      <FrequentlyAskQuestion />
      <Footer />
    </div>
  );
}

export default App;
