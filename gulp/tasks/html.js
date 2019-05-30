module.exports = function() {
	$.gulp.task('html',function () {
		return $.gulp.src('src/*.html')
		.pipe($.gulp.dest('build')) // место хранения обработаного файла 
		.on('end', $.bs.reload);
	});
}