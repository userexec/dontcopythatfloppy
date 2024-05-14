<form role="search" method="get" class="w31-search" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<input name="s" type="search" class="w31-input-text" placeholder="Title, Keywords..." value="<?php echo esc_attr( get_search_query() ); ?>">
	<input type="submit" class="w31-button">
</form>