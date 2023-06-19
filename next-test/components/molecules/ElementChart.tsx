import { useEffect, useMemo } from "react";
import {
  RadarController,
  BarController,
  RadialLinearScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  Chart,
  CategoryScale,
} from "chart.js";

const ElementChart = ({
  id,
  nameList,
  valueList,
}: {
  id: string;
  nameList: string[];
  valueList: number[];
}) => {
  const isBarType = useMemo(() => {
    return nameList.length < 3;
  }, [nameList.length]);

  useEffect(() => {
    Chart.register(
      RadarController,
      BarController,
      RadialLinearScale,
      LinearScale,
      LineElement,
      BarElement,
      PointElement,
      CategoryScale
    );
    var myChart = new Chart(id, {
      type: isBarType ? "bar" : "radar",
      data: {
        labels: nameList,
        datasets: [
          {
            data: valueList,
            label: "Applied",
            borderColor: "#3e95cd",
            backgroundColor: "rgb(62,149,205,0.1)",
            borderWidth: 2,
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)",
          },
        ],
      },
      options: {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 5,
            ticks: { stepSize: 1 },
          },
          ...(isBarType && {
            y: {
              suggestedMin: 0,
              suggestedMax: 6,
              ticks: { stepSize: 1 },
            },
          }),
        },
      },
    });
    return () => myChart.destroy();
  }, [id, isBarType, nameList, valueList]);
  return <canvas id={id}></canvas>;
};
export default ElementChart;
