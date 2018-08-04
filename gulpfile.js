//这句话就相当于:<script src="gulp.js"></script>
var gulp = require("gulp");

gulp.task('watch',function(){
	livereload.listen();

	gulp.watch('./css/*css',['css']);
});