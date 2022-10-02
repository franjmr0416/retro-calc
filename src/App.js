import Button from "./components/Button";
import "./App.css";
import LayoutButtons from "./components/LayoutButtons";
const App = () => {
  return (
    <div className="home">
      <LayoutButtons>
        <Button>AC</Button>
        <Button>%</Button>
        <Button>+</Button>
        <Button>-</Button>

        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>&times;</Button>

        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>&divide;</Button>

        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>

        <Button isEqualSign>=</Button>
        <Button isZeroSign>0</Button>
        <Button>.</Button>
      </LayoutButtons>
    </div>
  );
};

export default App;
