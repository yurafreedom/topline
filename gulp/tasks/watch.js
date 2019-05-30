module.exports = function() {
	$.gulp.task('watch',function () {
		$.gulp.watch('src/*.html', $.gulp.series('html'));
		$.gulp.watch('src/static/sass/**/*', $.gulp.series('sass'));
		$.gulp.watch('src/static/js/main.js', $.gulp.series('scripts'));
		$.gulp.watch('src/static/img/*', $.gulp.series('img:dev'));
		$.gulp.watch('src/static/fonts/*', $.gulp.series('fonts'))
	});
}