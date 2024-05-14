<section class="w31-window page">
	<div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div>
	<div class="w31-window-inner">
		<div class="w31-titlebar">
			<div class="w31-menu" role="menu" tabindex="0">
				<div class="w31-minus"></div>
				<ul class="w31-dropdown">
					<li role="menuitem" tabindex="0" class="action-color_settings"><span>C</span>olor Settings...</li>
					<li role="menuitem" tabindex="0" class="action-reading_settings"><span>R</span>eading Settings...</li>
					<hr />
					<li><a role="menuitem" href="/"><span>H</span>ome</a></li>
				</ul>
			</div>
			<div class="w31-title">
				Page Viewer - <?php the_title(); ?>
			</div>
			<div class="w31-minimize">
			</div>
			<div class="w31-maximize w31-available action-maximize_window" role="button" tabindex="0">
			</div>
			<div class="w31-restore w31-available action-restore_window" role="button" tabindex="0">
			</div>
		</div>
		<div class="w31-content">
			<div class="w31-reading">
				<?php the_content(); ?>
			</div>
		</div>
		<div class="w31-bottombar">
			<div class="w31-bottombar-inner">
				Last Updated: <?php the_modified_time('Y-m-d'); ?>
			</div>
		</div>
	</div>
</section>