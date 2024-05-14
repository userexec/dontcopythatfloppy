<section class="w31-window posts">
	<div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div><div class="tick"></div>
	<div class="w31-window-inner">
		<div class="w31-titlebar">
			<div class="w31-menu" role="menu" tabindex="0">
				<div class="w31-minus"></div>
				<ul class="w31-dropdown">
					<li role="menuitem" tabindex="0" class="action-posts"><span>P</span>osts</li>
					<li role="menuitem" tabindex="0" class="action-categories"><span>C</span>ategories</li>
					<li role="menuitem" tabindex="0" class="action-color_settings">Color <span>S</span>ettings...</li>
					<li role="menuitem" tabindex="0" class="action-reading_settings"><span>R</span>eading Settings...</li>
					<li role="menuitem" tabindex="0" class="action-test_screensaver">Screensaver</li>
				</ul>
			</div>
			<div class="w31-title">
				Post Manager
			</div>
			<div class="w31-minimize">
			</div>
			<div class="w31-maximize w31-available action-maximize_window" role="button" tabindex="0">
			</div>
			<div class="w31-restore w31-available action-restore_window" role="button" tabindex="0">
			</div>
		</div>
		<div class="w31-menubar">
			<div role="button" tabindex="0" class="action-posts"><span>P</span>osts</div>
			<div role="button" tabindex="0" class="action-categories"><span>C</span>ategories</div>
		</div>
		<div class="w31-topbar w31-flexbar">
			<div class="w31-label">
				<img src="<?php echo get_template_directory_uri(); ?>/icons/PROGM025.png" alt="News icon" />
				Joshua Woehlke's Posts
			</div>
			<?php get_search_form(); ?>
		</div>
		<div class="w31-content">
			<div class="w31-scroller posts">
				<div class="w31-scroller-content">
					<table>
						<thead>
							<tr>
								<th>Date</th>
								<th>Post Title</th>
							</tr>
						</thead>
						<tbody>
							<?php 
								$args = array(
										'posts_per_page'   => -1,
										'post_type'        => 'post',
									);
									$the_query = new WP_Query( $args );
							?>
							<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
								<tr>
									<td><?php the_time('Y-m-d'); ?></td>
									<td><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></td>
								</tr>
							<?php endwhile; ?>
						</tbody>
					</table>
				</div>
			</div>
			<div class="w31-scroller categories">
				<div class="w31-scroller-content">
					<table>
						<thead>
							<tr>
								<th>Category</th>
								<th>Posts</th>
								<th>Latest Post</th>
							</tr>
						</thead>
						<tbody>
							<!-- Make one row per category containing cells for the category name, the number of posts in that category, and the latest post in that category -->
							<?php
								$categories = get_categories();

								// order the categories by their post count, descending
								usort($categories, function($a, $b) {
									return $b->count - $a->count;
								});

								foreach ($categories as $category) {
									// continue if the count is 0
									if ($category->count == 0) {
										continue;
									}

									// get the latest post in this category
									$args = array(
										'posts_per_page' => 1,
										'offset' => 0,
										'cat' => $category->cat_ID,
										'orderby' => 'ID',
										'order' => 'DESC',
										'post_type' => 'post',
										'post_status' => 'publish',
										'suppress_filters' => true 
									);
									$the_query = new WP_Query( $args );
									if ($the_query->have_posts()) {
										$latest_post = $the_query->the_post();
									} else {
										continue;
									}
									?>
									<tr>
										<td><a href="<?php echo get_category_link($category->cat_ID); ?>"><?php echo $category->name; ?></a></td>
										<td><?php echo $category->count; ?></td>
										<td><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></td>
									</tr>
									<?php
								}
							?>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="w31-bottombar">
			<div class="w31-bottombar-inner">
				Unless otherwise noted in a post or repo, all content is licensed <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="blank">CC-BY-SA</a>.
			</div>
		</div>
	</div>
</section>