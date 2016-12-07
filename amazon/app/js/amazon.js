"use strict";

$(document).ready(function () {

    var searchUrl = "/search?q=";
    $("#go").click(function () {
        var q = $("#q").val();
        $.get(searchUrl + q, displayResults);
    });

    function displayResults(data) {
        var results = data;
        dust.render('searchResults', results, function (err, out) {
            console.log("html from dust=" + out);
            $("#main").html(out);
        });

        $("a.productLink").each(function (index, value) {

            var link = $(this).attr('href');

            $(this).click(function (event) {
                //alert(link);
                event.preventDefault();
                $.get(link, displayDetails);
            });
        });


        function displayDetails(product) {
            $("#main").hide();
            $("#details").show();
            dust.render('productDetails', product, function (err, out) {
                console.log("html from dust=" + out);
                $("#productInfo").html(out);
            });
            $("#backToSearch").click(function () {
                $("#main").show();
                $("#details").hide();
            })
        }


        function prepareDetailHtml(product) {
            var detailHtml = "<div id='product'>";
            detailHtml += "<div id='divi5'>";
            detailHtml += "<img src='" + product.image + "' style='height:200px; width:150px'>";
            detailHtml += " </div>";

            detailHtml += "<div id='divi10'>" +
                "<a class='productLink' style='color:#a07d08;' href='/productDetails?id=" + product.id + "'> <h1>" + product.name + "</h1></a>" +
                "<p><b>By: " + product.author + "</b></p>" + "<p><b>Rating: " + product.rating + "</b> | <b>Stock: " + product.stock + "</b></p>" +

                "<p><b>Description</b>: " + product.desc + "</p>" +
                " <h3 style='color:#a07d08;'>Product Details:</h3>" +
                " <p><b>Paperback:</b> 490 pages </p>" +
                "<p> <b>Publisher:</b> John Wiley & Sons; 1st edition (November 8, 2011)</p>" +
                "<p><b> Language:</b> English </p>" +
                " <p> <b> Product Dimensions: </b> 7.4 x 1 x 9.2 inches </p >" + "<h3 style='color:#a07d08;'>Customer Reviews:</h3>" + preparereview(product.reviews) + "</div>" + "<div id='divi15'>" +
                "<p style='color:#a07d08'><b>Price: $" + product.price + "</b></p>" + "<p> List Price: <strike> $35.00 </strike>. Save:50%</p >" +
                "<p> Want it tomorrow, Oct .20 ? Order within 3 hrs 48 mins and choose One - Day Shipping at checkout </p>" + "FREE Shipping on orders above $25." + " <p> Qty:<input type ='tel' size='3' maxlength='2'> </p>" +
                "<input type = 'button' id = 'addcart'  value = 'Add to Cart' >" +
                "</div>"


            detailHtml += "</div>";
            return detailHtml;
        }

    }

    function preparereview(reviews) {
        var reviewshtml = "<div id='reviews'>";
        for (var i = 0; i < reviews.length; i++) {
            reviewshtml += reviews[i].name;
            reviewshtml += reviews[i].comments;
            reviewshtml += "<br>";
            reviewshtml += reviews[i].date;
            reviewshtml += "</div>";
        }
        reviewshtml += "</div>";
        console.log(reviewshtml);
        return reviewshtml;
    }

    function prepareHtml(row) {
        var rowContent = "<div id='row' style='float:left; width:10%'>";
        rowContent += "<img height ='140' src='" + row.image + "'/>&nbsp;";
        rowContent += "<br><br></div>";
        rowContent += "<div style='float:left; width:70%; height:30%;'>";
        rowContent += "<a class='productLink' href='/productDetails?id=" + row.id + "'>" + row.name + "</a>";
        rowContent += " <br> By: " + row.author + "<br>";
        rowContent += " <br> Price: $" + row.price + "<br>";
        rowContent += " <br> Description: " + row.desc + "<br>";
        rowContent += " <br> Stock: " + row.stock + "<br>";

        rowContent += "</div>" + "<div style='float:left; width:15%;height:30%;'>" + "<br> <input type='button'  value ='Add to Cart' id='bttn1'>" + "</div>";
        return rowContent;
    }


});
