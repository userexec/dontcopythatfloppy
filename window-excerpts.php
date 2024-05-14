<section class="w31-window excerpts">
	<div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div>
	<div class="w31-window-inner">
		<div class="w31-titlebar">
			<div class="w31-menu" role="menu" tabindex="0">
				<div class="w31-minus"></div>
				<ul class="w31-dropdown">
					<li role="menuitem" tabindex="0" class="action-color_settings"><span>C</span>olor Settings...</li>
					<li role="menuitem" tabindex="0" class="action-reading_settings"><span>R</span>eading Settings...</li>
					<hr />
					<li role="menuitem" tabindex="0" class="action-copy_url" data-url="<?php the_permalink(); ?>">Copy <span>U</span>RL<li>
					<li><a role="menuitem" href="/"><span>H</span>ome</a></li>
				</ul>
			</div>
			<div class="w31-title">
				Query Results - <?php 
						$title = esc_attr( get_search_query() );
						if ($title == '') { $title = the_archive_title(); }
						echo $title;
					?>
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
				<?php if( have_posts() ) : while( have_posts() ) : the_post(); ?>
					<div class="w31-excerpt">
						<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<?php the_excerpt(); ?>
						<div class="w31-continue-reading">
							<a href="<?php the_permalink(); ?>">Continue Reading...</a>
						</div>
					</div>
				<?php endwhile; endif; ?>
			</div>
		</div>
		<div class="w31-scrollbar">
			<div class="w31-scrollbar-up"></div>
			<div class="w31-scrollbar-track"></div>
			<div class="w31-scrollbar-down"></div>
		</div>
		<div class="w31-bottombar">
			<div class="w31-bottombar-inner">
				<?php echo $wp_query->found_posts; ?> Posts Found.
			</div>
		</div>
	</div>
</section>