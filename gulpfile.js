const gulp = require('gulp');
const sync = require('browser-sync').create();

gulp.task('serve', () => {
	sync.init({
	ui: false,
	notify: false,
	port: 3000,
	server: {
		baseDir: '.'
	}
});

gulp.watch('index.html').on('change', () => {
	sync.reload();
});