import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useRef } from "react";

const ChartCanvas = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const options = {
    plugins: {
      responsive: true,
      legend: {
        labels: {
          font: {
            size: window.innerWidth > 500 ? 14 : 12,
          },
        },
        position: "right",
      },
      title: {
        display: true,
        text: "Perolehan Suara",
      },
    },
    maintainAspectRatio: false,
  };
  const data = {
    labels: [
      "Candidate 1",
      "Candidate 2",
      "Candidate 3",
      "Candidate 4",
      "Candidate 5",
      "Candidate 6",
    ],
    datasets: [
      {
        label: "votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut height={"25%"} data={data} options={options} />;
};

export default ChartCanvas;
