function myFunction() {
    var selectedDate=document.getElementById("demo").value;
    console.log(selectedDate);
    const Http = new XMLHttpRequest();
    const url='https://landslide-91e14-default-rtdb.asia-southeast1.firebasedatabase.app/moisture.json';


    Http.onreadystatechange = () => {
        if (Http.readyState == 4 && Http.status == 200) {
            console.log(Http.responseText);
            var resData=JSON.parse(Http.responseText);
            console.log(resData);
            var i;
            var plotData=[];
            for(i=0;i<resData.length;i++){
                var y=resData[i]['reading']
                if(resData[i]['date']==selectedDate){
                var temp1=resData[i]['date'].split('-');
                var temp2=resData[i]['time'].split(':');
                var x=new Date(temp1[0],temp1[1]-1,temp1[2],temp2[0],temp2[1]);
                console.log(x,y);
                plotData.push({x:x,y:y});
                }

            }

            //console.log(plotData);
            if(plotData.length!=0){
                var chart = new CanvasJS.Chart("chartContainer",
                {
                    title:{
                        text: "Moisture Sensor Data"
                    },
                    axisX:{
                        gridColor: "lightgreen" ,
                        gridThickness: 2
                    },
                    axisY:{
                        gridColor: "lightgreen"
                    },
                    data: [
                        {
                            type: "line",

                            dataPoints: plotData
                        }

                    ]
                });

                chart.render();
            }
            else{
                document.getElementById("chartContainer").innerHTML="No data available for this date."
            }
        }
    }
    Http.open("GET", url);
    Http.send();
}

function myFunction2() {
    var selectedDate=document.getElementById("demo2").value;
    //console.log(selectedDate);
    const Http = new XMLHttpRequest();
    const url='https://landslide-91e14-default-rtdb.asia-southeast1.firebasedatabase.app/vibration.json';


    Http.onreadystatechange = () => {
        if (Http.readyState == 4 && Http.status == 200) {
            //console.log(Http.responseText);
            var resData=JSON.parse(Http.responseText);
            //console.log(resData);
            var i;
            var plotData=[];
            for(i=0;i<resData.length;i++){
                var y=resData[i]['reading']
                if(resData[i]['date']==selectedDate){
                var temp1=resData[i]['date'].split('-');
                var temp2=resData[i]['time'].split(':');
                var x=new Date(temp1[0],temp1[1]-1,temp1[2],temp2[0],temp2[1]);
                //console.log(x,y);
                plotData.push({x:x,y:y});
                }

            }

            console.log(plotData);
            if(plotData.length!=0){
                var chart = new CanvasJS.Chart("chartContainer2",
                {
                    title:{
                        text: "Vibration Sensor data"
                    },
                    axisX:{
                        gridColor: "lightgreen" ,
                        gridThickness: 2
                    },
                    axisY:{
                        gridColor: "lightgreen"
                    },
                    data: [
                        {
                            type: "line",

                            dataPoints: plotData
                        }

                    ]
                });

                chart.render();
            }
            else{
                document.getElementById("chartContainer2").innerHTML="No data available for this date."
            }
        }
    }
    Http.open("GET", url);
    Http.send();

}