var but1 = document.querySelector("#but1");
var but2 = document.querySelector("#but2");
var but3 = document.querySelector("#but3");
var but4 = document.querySelector("#but4");
var content = document.querySelector("#content");
var button = document.querySelector("#button");
var inp = document.querySelector("#inp");

var arr = [ { name : "SUNDAR LAL", img : "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/06/26/857353-slide-6-disha.jpg", msg : "My dear jijaji, taxi ka kiraya dedena"}, 
            { name : "BABITAJI", img : "https://static.langimg.com/thumb/msid-84673157,imgsize-171867,width-700,height-525,resizemode-75/navbharat-times.jpg", msg : "Hello jethaji !"}, 
            { name : "CHAMPAK LAL", img : "https://pbs.twimg.com/profile_images/1043619083420409856/edDcRLQg_400x400.jpg", msg : "Aee babuchak, aaj raat ko jaldi aajana, bhulna mat, late hua toh khaana nahi milega"}, 
            { name : "BHIDE", img : "https://static.toiimg.com/photo/msid-69457164/69457164.jpg?1612650", msg : "jethalal ! maintenancne"}, 
            { name : "DAYA", img : "https://www.jagranimages.com/images/24_06_2018-dya_beti_1_18118762.jpg", msg : "tapu ke papa, aaj jaldi aajana, yaad hai na aaj ka plan"}, 
            { name : "SODI", img : "https://media.newstrack.in/uploads/entertainment/television-news/Sep/09/big_thumb/Sodhi_5b950d4db2ba2.png", msg : "Oye jetha pra!"}, 
            { name : "TARAK MEHTA", img : "https://pbs.twimg.com/media/DALhSYkUAAAC9Sy.jpg", msg : "Anjali nahi maanege, aaj raat party nahi ho payege."}, 
            { name : "POPAT LAL", img : "https://images.mid-day.com/images/images/2021/may/poptalal_d.jpg", msg : "mere liye ladki deakho na koi, jethalal !!!"}, 
            { name : "BAABITA JII P", img : "https://images.herzindagi.info/image/2020/Apr/5-minute-makeup-hacks.jpg", msg : "Hiii Jethaji !"}, 
            { name : "BAAGHA", img : "https://st1.bollywoodlife.com/wp-content/uploads/2020/06/Taarak-Mehta-Ka-Ooltah-Chashmah-Dilip-Joshi-.jpg", msg : "woh toh jaise jiske soch, sethji"}, 
            { name : "BABITAJI", img : "https://static.langimg.com/thumb/msid-84673157,imgsize-171867,width-700,height-525,resizemode-75/navbharat-times.jpg", tame : "1 minute ago"},
            { name : "CHAMPAK LAL", img : "https://pbs.twimg.com/profile_images/1043619083420409856/edDcRLQg_400x400.jpg", tame : "30 min ago"},
            { name : "DAYA", img : "https://www.jagranimages.com/images/24_06_2018-dya_beti_1_18118762.jpg", tame : "Today, 10:30 AM"}, 
            { name : "BABITAJI", img : "https://static.langimg.com/thumb/msid-84673157,imgsize-171867,width-700,height-525,resizemode-75/navbharat-times.jpg", calls : "Today, 7:20 AM"},
            { name : "DAYA", img : "https://www.jagranimages.com/images/24_06_2018-dya_beti_1_18118762.jpg", calls : "30 minutes ago"}];

var jhanda = 0;




function chats(arr){


        but2.addEventListener("click", function(){

            var arr2 = arr.filter( function (elem){

                      return elem.msg;

                       })


        
                intializeChats(arr2);

        })
        
};    


function status(arr){  


        but3.addEventListener("click", function(){

            var arr2 = arr.filter( function (elem){

                      return elem.tame;

                       })


                       intializeStatus(arr2);
        })
        
};


function call(arr){


        but4.addEventListener("click", function(){

            var arr2 = arr.filter( function (elem){

                      return elem.calls;

                       })


                       intializeCall(arr2);
        })
        
};


function intializeChats(arr2){

    var tempalete = ``;


           arr2.forEach( function (elem){

                 tempalete += `   <div class="rectangle">

                                 <div class="circle">
 
                                  <img src="${elem.img}" alt="">
 
                                  </div>
 
                                  <h3>${elem.name}</h3>
                                  <p>${elem.msg.length > 40 ? elem.msg.substring(0,40) + ("...") : elem.msg}</p>
 
                                   </div>`
               
           });

           content.innerHTML = tempalete;


}


function intializeStatus(arr2){

        var tempalete = ``;
    
    
               arr2.forEach( function (elem){
    
                     tempalete += `   <div class="rectangle">
    
                                     <div class="circle">
     
                                      <img src="${elem.img}" alt="">
     
                                      </div>
     
                                      <h3>${elem.name}</h3>
                                      <p>${elem.tame}</p>
     
                                       </div>`
                   
               });
    
               content.innerHTML = tempalete;
    
    
    }

function intializeCall(arr2){

        var tempalete = ``;
    
    
               arr2.forEach( function (elem){
    
                     tempalete += `   <div class="rectangle">
    
                                     <div class="circle">
     
                                      <img src="${elem.img}" alt="">
     
                                      </div>
     
                                      <h3>${elem.name}</h3>
                                      <p>${elem.calls}</p>
                                      <i class="ri-arrow-left-down-line"></i>
                                      <i class="ri-phone-fill"></i>
     
                                       </div>`
                   
               });
    
               content.innerHTML = tempalete;
    
    
    }


function inputDisplay(){

         button.addEventListener("click", function(){

                if( jhanda === 0){

                        inp.style.display = "block";
                        jhanda = 1;

                }

                else{

                        inp.style.display = "none"
                        jhanda = 0;

                }

         })

}    

function inputSearch(){

        inp.addEventListener("input", function(elem){

                  var arr2 = arr.filter( function (elem){

                                  return elem.name.toLowerCase().indexOf(inp.value.toLowerCase()) ||  elem.msg.toLowerCase().indexOf(inp.value.toLowerCase()) !== -1 ? true : false;

                             })


                             intializeChats();


        })

}

chats(arr);
status(arr);
call(arr);
inputDisplay();
inputSearch(arr);
