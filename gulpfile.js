var gulp = require('gulp');
var ts = require('gulp-typescript');
 
gulp.task('default', function () {
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            module: "system",
            moduleResolution: "node",
            experimentalDecorators: true,
            emitDecoratorMetadata: false,
            noImplicitAny: true
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('src/**/*.ts', ['default']);
});