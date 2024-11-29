import Chart from "react-apexcharts";

export const DonutChart = ({data}) => {
   
   const options = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: data[1],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  }
  const series = data[0]
    
      return (
        <div >
          <Chart options={options} series={series} type="donut" height={350} width={500} />
        </div>
      );
    }
