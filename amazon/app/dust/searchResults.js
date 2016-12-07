(function (dust) {
    dust.register("searchResults", body_0);

    function body_0(chk, ctx) {
        return chk.s(ctx.get(["results"], false), ctx, {
            "block": body_1
        }, {});
    }
    body_0.__dustBody = !0;

    function body_1(chk, ctx) {
        return chk.w("<div id='row' style='float:left; width:10%'><img height='140' src='").f(ctx.get(["image"], false), ctx, "h").w("' /><br><br></div><div style='float:left; width:70%; height:30%;'><a class='productLink' href='/productDetails?id=").f(ctx.get(["id"], false), ctx, "h").w("'>").f(ctx.get(["name"], false), ctx, "h").w("</a><br> By: ").f(ctx.get(["author"], false), ctx, "h").w("<br><br> Price: $").f(ctx.get(["price"], false), ctx, "h").w("<br><br> Description: ").f(ctx.get(["desc"], false), ctx, "h").w("<br><br> Stock: ").f(ctx.get(["stock"], false), ctx, "h").w("<br></div><div style='float:left; width:15%;height:30%;'><br> <input type='button' value='Add to Cart' id='bttn1'></div>");
    }
    body_1.__dustBody = !0;
    return body_0
}(dust));
