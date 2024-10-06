import { useState } from "react";
import { waterBucketChallenge } from "./Water.utils";


const Water = () => {
  const [heightX, setHeightX] = useState(0);
  const [heightY, setHeightY] = useState(0);
  const [target, setTarget] = useState<number>(0);
  const [steps, setSteps] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(event.target.value, 10));
    setHeightX(value);
  };

  const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, parseInt(event.target.value, 10));
    setHeightY(value);
  };

  const handleCalculate = () => {
    if (heightX <= 0 || heightY <= 0 || target <= 0) {
      setErrorMessage(
        "Please enter valid values for the jugs, and the amount must be (greater than 0)."
      );
      setSteps([]);
      return;
    }

    setErrorMessage("");
    const result = waterBucketChallenge(heightX, heightY, target);
    setSteps(result);
  };

  return (
    <section className="jars_container">
      <div className="jars_container_item">
        <h5>X</h5>
        <div className="jar">
          <div
            className="water"
            style={{
              height: `${(heightX / Math.max(heightX, heightY)) * 100}%`,
            }}></div>
        </div>
        <input
          id="a"
          type="number"
          value={heightX.toString() || ''}
          onChange={handleChangeA}
          min="0"
        />
      </div>
      <div className="jars_container_item">
        <h5>Y</h5>
        <div className="jar">
          <div
            className="water"
            style={{
              height: `${(heightY / Math.max(heightX, heightY)) * 100}%`,
            }}></div>
        </div>
        <input
          id="b"
          type="number"
          value={heightY.toString() || ''}
          onChange={handleChangeB}
          min="0"
        />
      </div>
      <div className="container_z">
        <h5>Z</h5>
        <input
          id="target"
          type="number"
          onChange={(e) => setTarget(Number(e.target.value))}
          min="0"
        />
        <button
          style={{
            marginTop: "10px",
          }}
          onClick={handleCalculate}>
          Calcular
        </button>
      </div>
      <div className="container_total">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Water;
