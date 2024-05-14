<?php get_template_part( 'window', 'posts' ); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
	<?php if( $wp_query->current_post < 1 && !is_paged() ) : ?>
		<?php get_template_part( 'window', 'post' ); ?>
	<?php else : ?>
		<?php get_template_part( 'window', 'excerpt' ); ?>
	<?php endif; ?>
<?php endwhile; endif; ?>
	
<footer>
		<nav>
			<?php previous_posts_link( '<img src="' . get_template_directory_uri() . '/icons/MORIC0662.png" alt="Newer Posts" /><br><div>Newer Posts</div>' ); ?>
			<?php next_posts_link( '<img src="' . get_template_directory_uri() . '/icons/MORIC066.png" alt="Older Posts" /><br><div>Older Posts</div>' ); ?>
		</nav>
</footer>