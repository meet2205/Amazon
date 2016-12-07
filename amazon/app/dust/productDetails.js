(function (dust) {
    dust.register("productDetails", body_0);

    function body_0(chk, ctx) {
        return chk.s(ctx.get(["details"], false), ctx, {
            "block": body_1
        }, {});
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
        return chk.w("<div id='product'><div id='divi5'><img src='").f(ctx.get(["image"], false), ctx, "h").w("' style='height:200px; width:150px'></div><div id='divi10'><a class='productLink' style='color:#a07d08;' href='/productDetails?id=").f(ctx.get(["id"], false), ctx, "h").w("'><h1> ").f(ctx.get(["name"], false), ctx, "h").w("</h1></a><p><b>By: ").f(ctx.get(["author"], false), ctx, "h").w("</b></p><p><b>Rating: ").f(ctx.get(["rating"], false), ctx, "h").w("</b> | <b>Stock: ").f(ctx.get(["stock"], false), ctx, "h").w("</b></p><p><b>Description</b>: ").f(ctx.get(["desc"], false), ctx, "h").w("</p><h3 style='color:#a07d08;'>Product Details:</h3><p><b>Paperback:</b> ").f(ctx.get(["paperback"], false), ctx, "h").w(" </p><p> <b>Publisher:</b> ").f(ctx.get(["publisher"], false), ctx, "h").w("</p><p><b> Language:</b> ").f(ctx.get(["language"], false), ctx, "h").w(" </p><p><b>ISBN-10:</b>").f(ctx.get(["ISBN"], false), ctx, "h").w("</p><h3 style='color:#a07d08;'>Customer Reviews:</h3> ").s(ctx.get(["reviews"], false), ctx, {
            "block": body_2
        }, {}).w("</div><div id='divi15'><p style='color:#a07d08'><b>Price: $").f(ctx.get(["price"], false), ctx, "h").w("</b></p><p> List Price: <strike> $35.00 </strike>. Save:50%</p><p> Want it tomorrow, Oct .20 ? Order within 3 hrs 48 mins and choose One - Day Shipping at checkout </p>FREE Shipping on orders above $25.<p> Qty:<input type='tel' size='3' maxlength='2'> </p><input type='button' id='addcart' value='Add to Cart'></div></div>");
    }
    body_1.__dustBody = !0;

    function body_2(chk, ctx) {
        return chk.w("<p>").f(ctx.get(["name"], false), ctx, "h").w("</p><p>").f(ctx.get(["comments"], false), ctx, "h").w("</p><p>").f(ctx.get(["date"], false), ctx, "h").w("</p>");
    }
    body_2.__dustBody = !0;
    return body_0
}(dust));
