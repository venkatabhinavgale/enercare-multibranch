<?php
/**
 * Template Tags
 *
 * @package      EAStarter
 * @author       Bill Erickson
 * @since        1.0.0
 * @license      GPL-2.0+
**/

/**
 * Entry Category
 *
 */
function enercare_entry_category() {
	$term = enercare_first_term();
	if( !empty( $term ) && ! is_wp_error( $term ) )
		echo '<p class="entry-category"><a href="' . get_term_link( $term, 'category' ) . '">' . $term->name . '</a></p>';
}

/**
 * Post Summary Title
 *
 */
function enercare_post_summary_title() {
	global $wp_query;
	$tag = ( is_singular() || -1 === $wp_query->current_post ) ? 'h3' : 'h2';
  $the_title = get_the_title();
  if (get_field('display_title'))
    $the_title = get_field('display_title');
	echo '<' . $tag . ' class="post-summary__title"><a href="' . get_permalink() . '">' . $the_title . '</a></' . $tag . '>';
}

/**
 * Post Summary
 *
 */
function enercare_post_summary() {
  the_excerpt();
}

/**
 * Post Summary Image
 *
 */
function enercare_post_summary_image( $size = 'thumbnail_medium' ) {
  echo wp_get_attachment_image( enercare_entry_image_id(), $size, null, array("class" => "post-summary__image") );
}


/**
 * Entry Image ID
 *
 */
function enercare_entry_image_id() {
	return has_post_thumbnail() ? get_post_thumbnail_id() : get_option( 'options_enercare_default_image' );
}

/**
 * Entry Author
 *
 */
function enercare_entry_author() {
	$id = get_the_author_meta( 'ID' );
	echo '<p class="entry-author"><a href="' . get_author_posts_url( $id ) . '" aria-hidden="true" tabindex="-1">' . get_avatar( $id, 40 ) . '</a><em>by</em> <a href="' . get_author_posts_url( $id ) . '">' . get_the_author() . '</a></p>';
}

/**
 * Post Date
 *
 */
function enercare_post_date() {
  echo '<p class="publish-date single-post__date">' . get_the_date( 'F j, Y' ) . '</p>';
}
