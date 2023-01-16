import Button from "./components/Button";
import { PaintQuadrat } from "./components/PaintQuadrat";

function App() {
  return (
    <div>
      {/*props-> react componentlerinin attribute-lardiri */}
      <PaintQuadrat bgColor='red' />
      <PaintQuadrat bgColor='green' />
      <PaintQuadrat bgColor='blue' />
      {/* {PaintQuadrat({ bgColor: 'green' })} */}
      <Button clickleyende={() => {
        console.log('clicked on me!')
      }} bgColor="green" text="click me" />
    </div>
  );
}

export default App;
