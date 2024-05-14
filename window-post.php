<section class="w31-window post">
	<div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div>
	<div class="w31-window-inner">
		<div class="w31-titlebar">
			<div class="w31-menu" role="menu" tabindex="0">
				<div class="w31-minus"></div>
				<ul class="w31-dropdown">
					<li role="menuitem" tabindex="0" class="action-copy_url" data-url="<?php the_permalink(); ?>">Copy <span>U</span>RL</li>
					<li role="menuitem" tabindex="0" class="action-color_settings"><span>C</span>olor Settings...</li>
					<li role="menuitem" tabindex="0" class="action-reading_settings"><span>R</span>eading Settings...</li>
					<hr />
					<hr />
					<li><a href="/"><span>H</span>ome</a></li>
				</ul>
			</div>
			<div class="w31-title">
				Post Viewer - <?php the_time('Ymd'); ?>.HTM
			</div>
			<div class="w31-minimize">
			</div>
			<div class="w31-maximize w31-available action-maximize_window" role="button" tabindex="0">
			</div>
			<div class="w31-restore w31-available action-restore_window" role="button" tabindex="0">
			</div>
		</div>
		<article id="post-<?php the_ID(); ?>" <?php post_class('w31-content'); ?>>
			<?php if ( has_post_thumbnail() ) : ?>
				<div class="w31-featured-image">
					<div class="w31-featured-image-inner">
						<?php the_post_thumbnail(); ?>
					</div>
				</div>
			<?php endif; ?>
			<div class="w31-reading">
				<h1 class="w31-post-title"><?php the_title(); ?></h1>
				<?php $categories = get_the_category(); ?>
				<?php if ( !empty($categories) ) : ?>
					<div class="w31-categories">
						<?php foreach ( $categories as $category ) : ?>
							<a href="<?php echo get_category_link($category->term_id); ?>"><?php echo $category->name; ?></a>
						<?php endforeach; ?>
					</div>
				<?php endif; ?>
				<?php the_content(); ?>
			</div>
		</article>
		<div class="w31-scrollbar">
			<div class="w31-scrollbar-up"></div>
			<div class="w31-scrollbar-track"></div>
			<div class="w31-scrollbar-down"></div>
		</div>
		<div class="w31-bottombar">
			<div class="w31-bottombar-inner">
				Last Updated: <?php the_modified_time('Y-m-d'); ?> - Questions? Feedback? <a href="mailto:joshua.woehlke@gmail.com">Send me a note!</a>
			</div>
		</div>
	</div>
</section>