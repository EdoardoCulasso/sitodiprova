const url = "https://raw.githubusercontent.com/icobasco/sample_data_files/master/pera_misure_sample.json"
let temperaturaOrdinata = []
let umiditaOrdinata = []
let misure = []

const visualizza = ()=> {

    fetch(url)
    .then((dati)=>dati.json())
    .then((misure)=> {

        let divHe = document.createElement("div");
        let divMisu = document.getElementById("misure");
        divMisu.className = "col-sm-12";
        // console.log("Trovate " + misure + " misure");

        divHe.innerHTML = "<div class=\"row\">" +  
            "<div class=\"col-sm-3  col-xl-2 bg-danger border d-flex justify-content-center\">DISPOSITIVO</div>" +
            "<div class=\"col-sm-3 bg-danger border d-flex justify-content-center\">DATA</div>" +
            "<div class=\"col-sm-3 bg-dark border d-flex justify-content-center\">TEMPERATURA<br /></div>" +
            "<div class=\"col-sm-3 bg-danger border d-flex justify-content-center\">UMIDITA'<br /></div>" +
            "</div>";
        divMisu.appendChild(divHe);
        
        let i=0
        for (var misura of misure)  {
            misure [i]= misure
            let divRiga = document.createElement("div");
            divRiga.innerHTML = "<div class=\"row\">" +  
                "<div class=\"col-sm-3 col-xl-2 bg-info border d-flex justify-content-center\">" + misura.lora_device_id + "</div>" +
                "<div class=\"col-sm-3 bg-info border d-flex justify-content-center\">" + tempo(misura.measured_at) + "</div>" +
                "<div class=\"col-sm-3 bg-secondary border d-flex justify-content-center\">" + temperatura(misura.data.sensor1.lowRes.temperature) + "</div>" +
                "<div class=\"col-sm-3 bg-info border d-flex justify-content-center\">" + misura.data.sensor1.lowRes.humidity + "</div>" +
                "</div>";
            divMisu.appendChild(divRiga);
            i++
        }

    })
}

const temperaturaCrescente = () => {
    temperaturaOrdinata.sort()

    fetch(url)
    .then((dati)=>dati.json())
    .then((misure)=> stampaOrdi(misure))

}

const umiditaCrescente =()=>{
    umiditaOrdinata.sort()

    fetch(url)
    .then((dati) => dati.json())
    .then((misure)=>stampaOrdi(misure))
}

const umiditaDecrescente =()=>{
    umiditaOrdinata.sort(function (x, y) {
        return y - x;
    });

    fetch(url)
    .then((dati) => dati.json())
    .then((misure)=> stampaOrdi(misure))
}

const temperaturaDecrescente =()=>{
    temperaturaOrdinata.sort(function (x, y) {
        return y - x;
    });

    fetch(url)
    .then((dati) => dati.json())
    .then((misure)=> stampaOrdi(misure))
}

const stampaOrdi = () => {
    
    let i=0
    for (var misura of misure)  {
        let divRiga = document.createElement("div");
        divRiga.innerHTML = "<div class=\"row\">" +  
            "<div class=\"col-sm-3 bg-info border d-flex justify-content-center\">" + misura.lora_device_id + "</div>" +
            "<div class=\"col-sm-3 bg-info border d-flex justify-content-center\">" + tempo(misura.measured_at) + "</div>" +
            "<div class=\"col-sm-3 bg-secondary border d-flex justify-content-center\">" + temperatura(misure[i]) + "</div>" +
            "<div class=\"col-sm-3 bg-info border d-flex justify-content-center\">" + misura.data.sensor1.lowRes.humidity + "</div>" +
            "</div>";
        divMisu.appendChild(divRiga);
        i++
    }

}

const tempo = (time)=> 
    time.substring(8, 10) + "/" + time.substring(5, 7) + "/" + time.substring(0, 4) 

const temperatura = (temperature)=>
    temperature /= 10
