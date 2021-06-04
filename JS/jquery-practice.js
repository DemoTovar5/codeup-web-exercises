(function(){
    let jqElements = $('.jqClass');
    let backgroundBlue = 'lightblue';
    let backgroundReset = '';
    function addClickEvents(elementsToBind, color1, color2){
        let handlerBlueBckGnd = function(){
            elementsToBind.css('background-color', color1);
            $(this).css('background-color', color2);
        }
        elementsToBind.click(handlerBlueBckGnd);
    }
    addClickEvents(jqElements, backgroundReset, backgroundBlue);
    addClickEvents($(".card"), "", "red");
    //make sure the DOM is loaded first
    $(document).ready(function() {
        alert ("Dom has finished loading!")
    });
    // parent method for adding all listeners

        //get the elements to add listener and change image
        // $('.col-md-3 ').hover(
        //     function() {
        //         $(this).find('background-image', 'jazz-music-rubber-duck.jpg');
        //     },
        //     function() {
        //         $(this).find('background-image', 'question.png');
        //     }
        //     );

        $(".col-md-3").hover(function (){
            $(this).find(".img-fluid").attr("src", "images/jazz-music-rubber-duck.jpg")
        },function (){
            $(this).find(".img-fluid").attr("src", "images/question.png")
        })

        // addEvents(cardContainers, 'images/jazz-music-rubber-duck.jpg', 'mouseover');
        // addEvents(cardContainers, 'images/question.png', 'mouseout');

    // add mouseover/mouseout events to all selected elements
    function addEvents(cardContainers, imgPath, listenerType){
        cardContainers.forEach((cc) => {
            let card = cc;
            //create listener which will call function change the image
            let listener = function (event) {
                let cardImg = card.querySelector(".card .card-img-top");
                changeImage(cardImg, imgPath);
            };
            cc.addEventListener(listenerType, listener);
        });
    }
    //actual function to swap images
    function changeImage(card, imgPath){
        card.setAttribute('src', imgPath);
    }
})();

