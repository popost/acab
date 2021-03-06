$(document).foundation();
$.getJSON("Nomenclator_FTS.json", function(json) {
    $("#po__input").on("change paste keyup", function() {
        var myNode = document.getElementById("po-results");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        var searchString = $(this).val();
        if(searchString.length > 2){
            for (var i=0; i<json.length; i++) {
                var searchCodeResult = json[i].codi.toLowerCase().search(searchString.toLowerCase())
                if( searchCodeResult == -1){
                    var searchDescriptionResult = json[i].descripcio.toLowerCase().search(searchString.toLowerCase())
                    if( searchDescriptionResult == -1){
                    } else {
                        print();
                    }
                } else {
                    print();
                }
                function print(){
                    var box;
                    box = '<li class="accordion-item" data-accordion-item>'
                            +'<a href="#" class="accordion-title">'
                                +json[i].codi
                                + ' - '
                                +json[i].descripcio
                            +'</a>'
                            +'<div class="accordion-content" data-tab-content>'
                                +'<dl class="po-results-item">'
                                    + '<dt> Butlleti</dt><dd>' + json[i].butlleti +'</dd>'
                                    + '<dt> Codi</dt><dd>' + json[i].codi +'</dd>'
                                    + '<dt> Descripció</dt><dd>' + json[i].descripcio +'</dd>'
                                    + '<dt> Normativa</dt><dd>' + json[i].normativa +'</dd>'
                    if(json[i].preu.length > 0){
                        box = box + '<dt> Preu normal</dt><dd>' + json[i].preu +'€</dd>'
                    }
                    if(json[i].preu_descompte.length > 0){
                        box = box + '<dt> Preu descompte</dt><dd>' + json[i].preu_descompte +'€</dd>'
                    }
                    if(json[i].retirada_carnet.length > 0){
                        box = box + '<dt> Retirada carnet</dt><dd>' + json[i].retirada_carnet +'</dd>'
                    }
                    if(json[i].retirada_punts.length > 0){
                        box = box + '<dt> Retirada punts</dt><dd>' + json[i].retirada_punts +'</dd>'
                    }
                    if(json[i].retirada_punts.length > 0){
                        box = box + '<dt> Vigent</dt><dd>' + json[i].vigent +'</dd>'
                    }
                    box = box  + '</dl></div></li>'
                    
                    $("#po-results").append(box)
                }
            }
            Foundation.reInit('accordion');
        }
        
    });
});