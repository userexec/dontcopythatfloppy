<!DOCTYPE html>
<html lang="en" class="error404">
	<head>
		<title><?php wp_title('/'); ?></title>
		<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/dontcopythatfloppy.css">
	</head>
	<body>
		<main>
			<div class="invert">Joshua Woehlke - Developer</div>
			<p>An error has occurred. To continue:</p>
			<p>Press Enter to return to the home page, or</p>
			<p>Press ALT+LEFT ARROW to return to the previous page. If you do this,<br>you will see considerably less blue.</p>
			<p>Error: Page Not Found</p>
			<div class="pressany">Press any key to continue <span class="blink">_</span></div>
		</main>

		<script>
			setInterval(() => {
				document.querySelector('.blink').style.visibility = document.querySelector('.blink').style.visibility === 'hidden' ? 'visible' : 'hidden';
			}, 500);
			document.addEventListener('keydown', () => {
				if (event.keyCode === 18 || event.keyCode === 37) return;
				window.location.href = '/';
			});
		</script>
	</body>
</html>