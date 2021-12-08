
function updateMap(){
    fetch("/data.json")
    .then(response=>response.json())
    .then(rsp=>{ 
        // rsp here stands for response
        // rsp.data returns arrays from json
        console.log(rsp.data)

        rsp.data.forEach(element => {
            var latitude=element.latitude;
            var longitude=element.longitude;

            cases=element.infected;
            if(cases>255){
                color="rgb(255,0,0)";
            }

            else{
                color=`rgb(${cases},0,0)`;
            }
            
            const marker = new mapboxgl.Marker({
                draggable: false,  
                color:color 
                })
                .setLngLat([longitude, latitude])
                .addTo(map); 
        });
           
    })
  
}

updateMap()