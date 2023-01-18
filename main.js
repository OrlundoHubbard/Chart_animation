const ctx = document.getElementById('chart').getContext("2d");

const labels = [
    'T-Series',
    'Cocomelon - Nursery Rhymes',
    'SET India',
    'Sony SAB',
    'Like Nastya',
    'Kids Diana Show',
    'WWE',
    'Vlad and Niki',
    'Movieclips',
    'Colors TV',
];

const data = {
    labels,
    datasets: [{
        data: [211.6, 147.87, 136.89, 90.42, 86.77, 86.22, 73.30, 72.11, 59.69, 57.36],
        label: "Biggest YouTube Channels by views",
    },
],
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
    },
};

const myChart = new myChart(ctx, config);