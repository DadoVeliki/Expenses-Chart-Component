async function fetchData(){
    const url='data.json';
    const response=await fetch(url);

    const dataPoints=await response.json();

    return dataPoints;
};
fetchData().then(dataPoints=>{
    const dan=dataPoints.map(
        function(index){
            return index.day;
            
        }
    )
});

let chart=document.getElementById("chart");

new Chart(chart,{
    type:"bar",
    data:{
        labels:['mon','tue','wed','thu','fri','sat','sun'],
        datasets:[
            {
                data:[17.45,34.91,52.36,31.07,23.39,43.28,25.48],
                backgroundColor:['hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',                
                'hsl(186, 34%, 60%)',
                                'hsl(10, 79%, 65%)',
                                'hsl(10, 79%, 65%)',
                                'hsl(10, 79%, 65%)',
                                'hsl(10, 79%, 65%)'
                                
            
                ],
                borderRadius: 10,
                borderSkipped: false
            }
        ]
    },
    options: {
        title:{
            display:false
        },
        interaction: {
            intersect: false,
            mode: 'index',
          },
        plugins:{
            legend:{
                display:false
            },
            tooltip: {
                callbacks: {
                }
              }
        },
        
        scales: {
            y: {
                beginAtZero: true
            }
        },
        onHover: (event, chartElement) => {
            const target = event.native ? event.native.target : event.target;
            target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        }
    }
});