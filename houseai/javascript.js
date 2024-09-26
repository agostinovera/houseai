const displayy=[
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "imagenes"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "ArtBreeder",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: " imagenes"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Creador de imagenes"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Creador de imagenes"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Uso General"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Uso General"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Uso General"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Uso General"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Uso General"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Uso General"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Paraphraser"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Paraphraser"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Productividad"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Productividad"
    },
    {
        logo: "imagenes/dalle3.png",
        nombre: "Dall-E",
        link: "https://openai.com/index/dall-e-2/",
        desarrollador: "OpenAi",
        puntuacion: "10/10",
        uso: "Productividad"
    }
]

function mostrardisplayy(listadisplay=displayy){
    let displayhtml="";
    listadisplay.forEach((displayy)=>{
        displayhtml+=`<div class="card"><div class="column1">`;
        displayhtml+=`<img src="${displayy.logo}" alt="${displayy.nombre}">`;
        displayhtml+=`<strong><h3> ${displayy.nombre} </h3></strong>`;
        displayhtml+=`<p><a href= "${displayy.link}">`;
        displayhtml+=`<strong><h2> ${displayy.desarrollador} </h2></strong>`;
        displayhtml+=`<p class="like"><img src="imagenes/889221.png" alt="Likes"> ${displayy.puntuacion} </p>`;
        displayhtml+=`</div>`;
        displayhtml+=`<div class="column2">`;
        displayhtml+=`<p>Idioma: <strong>${displayy.uso}</strong></p>`;
});
    document.querySelector(".listado-displayy").innerHTML=displayhtml;

}
function filtraria(nombreia){
const listafiltrada= displayy.filter((ia)=> {
    return ia.uso==nombreia
})
mostrardisplayy(listafiltrada)
}