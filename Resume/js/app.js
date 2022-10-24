$(document).ready(function(){

//     $('#profile_ripple').ripple({
//         resolution:512,
//         dropRadius:10
//     });


    // for percentage 
   
    // const bars = document.querySelectorAll('.progress-bar');

    // bars.forEach(function(bar){
    //     let percentage = bar.dataset.percent;
    //     let tooltip = bar.children[0];
    //     tooltip.innerText = percentage + '%';
    //     bar.style.width = percentage + '%';
        // console.log(percentage);
    // })  



    // const counters = document.querySelectorAll('.counter');
    // console.log(counters);

    // function runCounter (){
    //     counters.forEach(counter =>{
    //         counter.innerText = 0;
    //           let target = +counter.dataset.count;

              
    //     })
    // }


        // for work section

        // var $wrapper = $(".portfoliyo_wrapper");

        //initialize isotope


        // $wrapper.isotope({
        //     filter : '*',
        //     layoutMode : 'masonry',
        //     animationOptions  :{
        //         duration : 750,
        //         easing : 'linear'
        //     }
        // });


        // let links = document.querySelectorAll('.tabs a');
         
        // links.forEach(link => {
        //     let selector = link.dataset.filter;
        //     link.addEventListener('click',function(e){
        //         e.preventDefault();

                
        //         $wrapper.isotope({
        //             filter:'*',
        //             layoutMode:'masonry',
        //             animationOptions:{
        //                 duration:750,
        //                 easing:'linear'
        //             }
        //         });


        //     });
        // })

      // slider


      $('.slider').slick({
           arrows : false,
           autoplay : true
      });
});