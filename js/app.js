

'use strict';

// alert('hello') ;
let arrOfObject=[];
let keyWord = [];
let alltitle   = [];
let inx = 0;

function Product(image_url,title,description,key,horns)
{
this.image_url =image_url;
this.title     =title;
this.description =description;
this.key = key;
this.horns     =horns;
this.id = inx;
alltitle.push(this.title);
arrOfObject.push(this);

}

let proSection
Product.prototype.render =function(){
     proSection = $('#photo-template').clone();
     $('main').append(proSection);
    // proSection.children("img").attr('src',this.image_url);
    proSection.find('h2').text(this.title);
    proSection.find('img').attr('src',this.image_url);
    proSection.find('p').text(this.description);
    proSection.removeAttr('id');
    proSection.attr('id', this.id);
    inx++;
}

Product.prototype.renderSelect =function(){
    if (!keyWord.includes(this.key)){
        keyWord.push(this.key)
        let newOption = $('<option></option>');
        $('select').append(newOption);
        newOption.text(this.key);
    }}
console.log()
function renderSelect () {
    $('select').on('change', function(){
       let  $selected = $('select').val();
    //    if ($selected !='default'){
    //        $('div').hide();
    //        arrOfObject.forEach(element=>{
    //            if(element.key === $selected){
    //                console.log(element.key);
    //                $('#'+element.id).show();
    //            }
    //        });
           
    //    }else{
    //        $('div').show();
    //    }

        for (let i = 0; i<inx; i++){
            if (arrOfObject[i].key == $selected) {
                $('#'+i).show();
             }
            else{
                if($('select').val() == 'default'){
                    $('#'+i).show();
                }else{
                $('#'+i).hide();
            }}
        }
    });
}
function getJsonData(){
const ajaxSet ={
    method :'get',
    datatype :'json'
}


$.ajax('data/page-1.json',ajaxSet).then(data=>{
let proObj
let checkArr=[];
data.forEach(element => {
   proObj =new Product(element.image_url,element.title,element.description,element.keyword,element.horns) ;
   

   proObj.render(); 
   proObj.renderSelect();
});

});
}

// getJsonData();
$('document').ready(getJsonData);
renderSelect();

// $(document).ready(function(){
//     $("#btn-1").click(function(){
//         $("section").toggle();
//         $("#photo-template").hide();
//     });
//   });

$(document).ready(function(){
    $("#sort-AZ").click(function(){
        // alert('hello');
        // console.log(arrOfObject);
       arrOfObject.sort((a, z) => a.title.charCodeAt() - z.title.charCodeAt());
        // console.log(sort);
        
    });
  });