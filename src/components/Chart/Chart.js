import "./Chart.css";

const Chart = (props) => {
  return (
    <div className="chart">
      {props.chartInput.map((input) => {
        <CharBar
          key={input.label}
          value={input.value}
          maxValue={null}
          label={input.label}
        />;
      })}
    </div>
  );
};

export default Chart;
