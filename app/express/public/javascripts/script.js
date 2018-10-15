$(document).ready(function () {
    $("#input_search").on('input', () => {
        fetch('/search/' + $('#input_search').val()).then((res) => res.json()).then((res) => {
            $('#result').empty()
            res.forEach(card => {
                $("#result").append('<td><img src="https://art.hearthstonejson.com/v1/render/latest/enUS/256x/'+card.id+'.png"/></td>')            
            });
            console.log(res)
        })
    })



    // });
    $("#submit").on('click', () => {
        fetch('/search/' + $('#input_search').val()).then((res) => res.json()).then((res) => {
            console.log(res)
        })
        // .then(function (myBlob) {
        //     var objectURL = URL.createObjectURL(myBlob);
        //     myImage.src = objectURL;
        // });
    })
});