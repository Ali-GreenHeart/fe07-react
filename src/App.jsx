import { PaintQuadrat, ali } from "./PaintQuadrat"

function App() {
  return (
    <div>
      <h1>{ali}</h1>
      {/*props-> react componentlerinin attribute-lardiri */}
      <PaintQuadrat bgColor='red' />
      <PaintQuadrat bgColor='green' />
      <PaintQuadrat bgColor='blue' />
      {/* {PaintQuadrat({ bgColor: 'green' })} */}
    </div>
  );
}

export default App;
