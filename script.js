
Highcharts.chart('container', {
    chart: {
        type: 'column',
        plotBorderWidth: 1,
    },
    legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'top',
            symbolRadius: 0,
            x:0,
            y:0
    },
    credits: {
    		enabled: false
    },
    exporting: {
    		enabled: false
    },
    title: {
        text: null
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true,
        tickWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: null
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Japan',
        color: '#007272',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5]

    }, {
        name: 'Norway',
        color: '#FF5400',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3]

    }, {
        name: 'US',
        color: '#14555A',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6]

    }]
});
