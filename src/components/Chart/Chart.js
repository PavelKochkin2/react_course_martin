import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const inputValues = props.chartInput.map((input) => input.value);
  const totalMax = Math.max(...inputValues);
  console.log(props.chartInput);

  return (
    <div className="chart">
      {props.chartInput.map((input) => (
        <ChartBar
          key={input.label}
          value={input.value}
          maxValue={totalMax}
          label={input.label}
        />
      ))}
    </div>
  );
};

export default Chart;
