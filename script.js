
//function hover image index


$(document).ready(function() {
    $( "#index_img" ).mouseover(function(){
        $(this).attr("src", "img/index_hover.jpg");
    });

    $( "#index_img" ).mouseout(function(){
        $(this).attr("src","img/index.jpeg");
    });
    
    
});


// functions for formation page

function info(id_value){
    div_html = create_div(id_value);
    document.getElementById('info').innerHTML = content;
    console.log(content);
    
    var style = document.createElement('style');
    style.innerHTML = `#form_img {
        display:block;
        margin:auto;
        max-width:65%;
        max-height:65%;
      }#info{
            color : white;
            max-width:85%;
            max-height:85%;
            margin:auto;

        }`;
    document.head.appendChild(style);




}

function create_div(id_value){
    for_img = 'img/f'+ id_value + '.jpg';
    if (id_value == 1){
        for_name = "Escola Secundária Artur Gonçalves"
        for_link = "http://agrupamento.esagtn.com/"
        for_local = "Torres Novas"
        for_course = "Ciências Socioeconómicas"
    }else if(id_value == 2){
        for_name = "Faculdade de Ciências da Universidade de Lisboa"
        for_link = "https://www.ulisboa.pt/curso/licenciatura/tecnologias-de-informacao"
        for_local= "Lisboa"
        for_course = "Tecnologias de informação"
    }else if(id_value == 3){
        for_name = "Faculdade de Ciências da Universidade de Lisboa"
        for_link = "https://fenix.ciencias.ulisboa.pt/degrees/minor-em-estatistica-e-investigacao-operacional-564500436615392"
        for_local= "Lisboa"
        for_course = "Minor em Estatística e Investigação Operacional"
    }else{
        for_name = "Iscte - Instituto Universitário de Lisboa"
        for_link = "https://www.iscte-iul.pt/curso/18/mestrado-gestao-de-sistemas-de-informacao"
        for_local= "Lisboa"
        for_course = "Gestão de Sistemas de Informação (atualmente)"
    };
    
    content = "<p> <h2>"+ for_name +"</h2> </p><p style=' margin-top: 5%'> <a href="+ for_link+" style='color: white '> Visitar o site (Clique aqui) </a> </p><p>"+for_local+" </p><p>"+ for_course+"</p>   <img  id='form_img' src=" + for_img + " style='margin-top: 10px'>";
    
    return content;
    
}

