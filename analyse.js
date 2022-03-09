$(function(){
    $('[value="Prévisualiser"]').before('<input class="cw" type="butto," value="Analyse" onclick="alert($(\'#text\').sceditor(\'instance\').val().split(\' \').filter(function(v){return v!==\'\'}).length + \' mot(s).\');"/>  ');
    });