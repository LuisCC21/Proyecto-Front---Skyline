import Chart from "react-apexcharts";

export const BarChart = ({ data }) => {
  const options = {
    series: [
      {
        data: data[0],
      },
    ],
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: data[1],
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={350}
        width={500}
      />
    </div>
  );
};
