<?php
	add_theme_support( 'post-thumbnails' );

	//////////// SHIT REMOVAL /////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	remove_action('wp_head', 'rsd_link');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'start_post_rel_link');
	remove_action('wp_head', 'index_rel_link');
	remove_action('wp_head', 'adjacent_posts_rel_link');
	remove_action('wp_head', 'wp_shortlink_wp_head');
	remove_action('wp_head', 'feed_links');
	remove_action('wp_head', 'feed_links_extra');
	remove_action('wp_head', 'adjacent_posts_rel_link_wp_head');
	remove_action('wp_head', 'print_emoji_detection_script', 7);
	remove_action('admin_print_scripts', 'print_emoji_detection_script');
	remove_action('wp_print_styles', 'print_emoji_styles');
	remove_action('admin_print_styles', 'print_emoji_styles');
	remove_filter('the_content_feed', 'wp_staticize_emoji');
	remove_filter('comment_text_rss', 'wp_staticize_emoji');
	remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
	remove_action('wp_head', 'rest_output_link_wp_head', 10);
	remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);
	wp_deregister_script('jquery');
	
	//////////// TITLE RESOLUTION /////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////

	/**
	 * Filters wp_title to print a neat <title> tag based on what is being viewed.
	 *
	 * @param string $title Default title text for current view.
	 * @param string $sep Optional separator.
	 * @return string The filtered title.
	 */
	function theme_name_wp_title( $title, $sep ) {
		if ( is_feed() ) {
			$title = str_replace($sep, '', $title);
			return $title;
		}
		
		global $page, $paged;
		$title = str_replace($sep, '', $title);

		$site_description = get_bloginfo( 'description', 'display' );

		// Add the blog name
		if ( $site_description && ( is_home() || is_front_page() ) ) {
			$title .= get_bloginfo( 'name', 'display' );
		} else {
			$title .= " $sep " . get_bloginfo( 'name', 'display' );
		}

		// Add the blog description for the home/front page.
		if ( $site_description && ( is_home() || is_front_page() ) ) {
			$title .= " - $site_description";
		}

		// Add a page number if necessary:
		if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
			$title .= " $sep " . sprintf( __( 'Page %s', '_s' ), max( $paged, $page ) );
		}

		return $title;
	}
	add_filter( 'wp_title', 'theme_name_wp_title', 10, 2 );

?>