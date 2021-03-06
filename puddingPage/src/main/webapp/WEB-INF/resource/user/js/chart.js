window.onload = function () {
    pieChartDraw();
}

let pieChartData = {
    labels: ['로맨스', '현판', '로판', '무협', '판타지', '자유'],
    datasets: [{
        data: [60, 25, 35, 7, 25, 10],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)']
    }]
};

let pieChartDraw = function () {
    let ctx = document.getElementById('pieChartCanvas').getContext('2d');

    window.pieChart = new Chart(ctx, {
        type: 'pie',
        data: pieChartData,
        options: {
            responsive: false
        }
    });
};


