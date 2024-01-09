import Alert from "./Alerts";
import Button from "./Button";
import Badges from "./Badges";
import Cards from "./Cards";
import { FaRebel, FaOldRepublic, FaJedi, FaCheck } from "react-icons/fa6";

export function App() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl">Buttons</h2>
      <div className="flex items-center">
        <Button size={100} backgroundColor={"blue"} disabled={false} />
        <Button size={80} backgroundColor={"red"} disabled={false} />
        <Button size={50} backgroundColor={"green"} disabled={true} />
      </div>
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl">Alerts</h2>

        <Alert backgroundColor={"#86BA90"} size={50} icon={FaJedi} />
        <Alert backgroundColor={"#ACBFA4"} size={50} icon={FaOldRepublic} />
        <Alert backgroundColor={"#30BCED"} size={50} icon={FaRebel} />
      </div>

      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl">Badges</h2>
      </div>

      <div className="flex items-center">
        <Badges icon={FaCheck} backgroundColor={"#FF9F1C"} size={70} />
        <Badges icon={FaCheck} backgroundColor={"#F7C548"} size={60} />
        <Badges icon={FaCheck} backgroundColor={"#DBDFAC"} size={50} />
        <Badges icon={FaCheck} backgroundColor={"#5F758E"} size={40} />
      </div>

      <div className="flex flex-col items-center mt-10">
        <h2 className="text-2xl">Cards</h2>
      </div>

      <div className="flex mt-10 justify-between">
        <Cards
          href="https://react.dev/learn/passing-props-to-a-component"
          imgSrc="src/assets/karl-kohler-N_MXyBUV5hU-unsplash.jpg"
          imgAlt="Mountain View"
          title={"Travel to Mountain"}
        />
        <Cards
          href="https://react.dev/learn/passing-props-to-a-component"
          imgSrc="src/assets/rumman-amin-6iSZzFMKQbs-unsplash.jpg"
          imgAlt="Beach"
          title={"Travel to Beach"}
        />
        <Cards
          href="https://react.dev/learn/passing-props-to-a-component"
          imgSrc="src/assets/who-s-denilo-Un067U25aOc-unsplash.jpg"
          imgAlt="Dessert"
          title={"Travel to Dessert"}
        >
          <button className=" bg-blue-800 h-10 w-40 my-10 rounded-2xl text-slate-50">
            See prices!
          </button>
        </Cards>
      </div>
    </div>
  );
}

export default App;
