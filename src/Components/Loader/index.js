import { useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <BounceLoader color={color} cssOverride={override} size={50} />
    </div>
  );
}

export default Loader;
