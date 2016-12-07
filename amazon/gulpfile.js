var express = require('express');
var fs = require('fs');
var gulp = require('gulp');
var dust = require('gulp-dust');


gulp.task('dust', function () {
    gulp.src('app/dust/*.html')
        .pipe(dust())
        .pipe(gulp.dest('app/dust'));
});



gulp.task('express', function () {
    var app = express();
    app.use('/', express.static('app'));
    app.get('/search', function (request, response) {
        var q = request.query.q;
        console.log("q=" + q);
        if (q == "html") {
            response.sendFile(__dirname + "/data/results/htmlResults.json");
        } else if (q == "css") {
            response.sendFile(__dirname + "/data/results/css.json");
        } else if (q == "shoes") {
            response.sendFile(__dirname + "/data/results/shoeResults.json");
        } else if (q == "javascript") {
            response.sendFile(__dirname + "/data/results/javascript.json");
        } else if (q == "angular") {
            response.sendFile(__dirname + "/data/results/angular.json");
        } else if (q == "jquery") {
            response.sendFile(__dirname + "/data/results/jquery.json");
        } else {
            response.sendFile(__dirname + "/data/results/defaultResults.json");
        }
    });

    function checkFileExistsSync(filepath) {
        var flag = true;
        try {
            fs.accessSync(filepath, fs.F_OK);
        } catch (e) {
            flag = false;
        }
        return flag;
    }

    app.get('/productDetails', function (request, response) {
        var id = request.query.id;
        if (checkFileExistsSync(__dirname + "/data/details/details-" + id + ".json")) {
            console.log("returning file - details-" + id + ".json");
            response.sendFile(__dirname + "/data/details/details-" + id + ".json");
        } else {
            response.sendFile(__dirname + "/data/details/defaultDetails.json");
        }
    });
    var server = app.listen(4000, function () {
        console.log("server started at port 4000");
    });

});

gulp.task('watch', function () {
    gulp.watch('./app/dust/*.html', function () {
        gulp.run('dust');
    });
});

gulp.task('default', ['dust', 'express', 'watch']);
