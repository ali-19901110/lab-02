'use strict';

// alert('hello') ;
let arrOfObject=[];
function Product(image_url,title,description,keyword,horns)
{
this.image_url =image_url;
this.title     =title;
this.description =description;
this.keyword   =keyword;
this.horns     =horns;
arrOfObject.push(this);
}
Product.prototype.render =function(){
    let proSection = $('#photo-template').clone();
    // proSection.children("img").attr('src',this.image_url);
    proSection.find('h2').text(this.title);
    proSection.find('img').attr('src',this.image_url);
    proSection.find('p').text(this.description);
    proSection.removeAttr('id');
    $('main').append(proSection);

    // let prosel = $('select').clone();
    // prosel.find('option').val(this.title);
    // $('header').append(prosel);

}
Product.prototype.renderSelect =function(){
    var sel = $('<select>').appendTo('header');
    $(arrOfObject).each(function() {
     sel.append($("<option>").attr('value',this.keyword).text(this.text));
    //  arrOfObject[0]['keyword']
    });

}


function getJsonData(){
const ajaxSet ={
    method :'get',
    datatype :'json'
}
console.log("test if i use the ajax");
$.ajax('data/page-1.json',ajaxSet).then(data=>{
console.log('test got the data');
console.log(data);
let proObj
data.forEach(element => {
   proObj =new Product(element.image_url,element.title,element.description,element.keyword,element.horns) ;
   proObj.render(); 
});
   proObj.renderSelect();

});
}
// getJsonData();
$('document').ready(getJsonData);
// $('#photo-template').eq(2).remove();
// $('img').find("#photo-template").slice(2).remove();

// $("#photo-template:nth-child(3)").remove();
