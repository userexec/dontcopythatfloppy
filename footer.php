		</main>

		<button id="w31-backtotop-button" class="action-back_to_top">
			<img src="<?php echo get_template_directory_uri(); ?>/icons/PROGM040r.png" alt="Back to Top" Title="Back to Top" />
		</button>
		<button id="w31-readingsettings-button" class="action-reading_settings">
			<img src="<?php echo get_template_directory_uri(); ?>/icons/PROGM018.png" alt="Reading Settings" Title="Reading Settings" />
		</button>
		<button id="w31-colorsettings-button" class="action-color_settings">
			<img src="<?php echo get_template_directory_uri(); ?>/icons/PBRUS001.png" alt="Color Settings" Title="Color Settings" />
		</button>

		<?php get_template_part( 'window', 'colorsettings' ); ?>

		<?php get_template_part( 'window', 'readingsettings' ); ?>

		<div id="starfield">
			<div class="stars"></div>
			<div class="stars"></div>
			<div class="stars"></div>
		</div>

		<script type="module" src="<?php echo get_template_directory_uri(); ?>/dontcopythatfloppy.js"></script>

		<?php wp_footer(); ?>
	</body>
</html>