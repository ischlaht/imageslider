

    var index = 1;

    function plusindex(n){
        index = index + n;
        showImage(index);
    }


    function showImage(n){
        var i;
        var pic= document.getElementsByClassName("slides");
        if(n > pic.length){ index = 1};
        if(n < 1){ index = pic.length};


        for(i=0;i<pic.length;i++){
        pic[i].style.display = "none";
 }
 
 pic[index-1].style.display = "block";
}
    
    
                                                                                                      
    showImage(1);





// -------------------------------------------------------------------------------Add this to Html file!

    // <div id="container">
    //     <img class="slides" src="Images/photo1.jpg"/>
    //     <img class="slides" src="Images/photo2.jpg"/>
    //     <img class="slides" src="Images/photo3.jpg"/>
    //     <img class="slides" src="Images/photo4.jpg"/>
    //     <img class="slides" src="Images/photo5.jpg"/>
    //     <button class="btn" onClick="plusindex(-1)" id="btn_prev">&#x2770;</button>
    //     <button class="btn" onClick="plusindex(+1)" id="btn_next">&#x2771;</button>



    // </div>
