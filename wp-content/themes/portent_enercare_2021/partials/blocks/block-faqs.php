<?php
/**
 * Card Block
 *
 * @package      Enercare
 * @author       Portent
 * @since        1.0.0
 * @license      GPL-2.0+
 **/

$heading = get_field( 'header' );
$content = get_field( 'content' );
$faqs = get_field( 'faqs' );

echo '<div class="block-faqs block-faqs--tablet--'.$tablet_appearance.'">';

if( !empty( $heading ) )
	echo '<h3 class="block-faqs--header">' . esc_html( $heading ) . '</h3>';
if( !empty( $content ) )
	echo '<p class="block-faqs--content">' . esc_html( $content ) . '</p>';

if( !empty( $faqs ) )  {
  foreach ($faqs as $faq) {
    echo '<div class="block-faqs--faq-container">';
    echo esc_html($faq->post_title);
    
    echo '<div class="block-faqs--faq-answer-container" data-state="closed">';
    echo esc_html($faq->post_content);
    echo '</div>';
    
    echo '</div>';
  }
  echo '<div class="block-faqs--cta"><a href="' . get_bloginfo('url') . '/faqs" class="btn">See All FAQs</a></div>';
}

echo '</div>';
