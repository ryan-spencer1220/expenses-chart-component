const data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

window.onload = function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  var barColors = "hsl(10, 79%, 65%)";
  var bar = "hsl(186, 34%, 60%)";

  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.map((element) => element.day),
      datasets: [
        {
          data: data.map((element) => element.amount),
          backgroundColor: (color) => {
            console.log(color);
            let colors = color.dataIndex === 2 ? bar : barColors;
            return colors;
          },
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              fontColor: "#a9a4a4",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
    },
  });
};
