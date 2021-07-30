<?php
/**
 * Functions
 *
 * @package      EAStarter
 * @author       Bill Erickson
 * @since        1.0.0
 * @license      GPL-2.0+
**/

/*
BEFORE MODIFYING THIS THEME:
Please read the instructions here (private repo): https://github.com/billerickson/EA-Starter/wiki
Devs, contact me if you need access
*/

define( 'portent_VERSION', filemtime( get_template_directory() . '/assets/css/main.css' ) );

// General cleanup
include_once( get_template_directory() . '/inc/wordpress-cleanup.php' );

// Theme
include_once( get_template_directory() . '/inc/tha-theme-hooks.php' );
include_once( get_template_directory() . '/inc/layouts.php' );
include_once( get_template_directory() . '/inc/helper-functions.php' );
include_once( get_template_directory() . '/inc/navigation.php' );
include_once( get_template_directory() . '/inc/loop.php' );
include_once( get_template_directory() . '/inc/template-tags.php' );
include_once( get_template_directory() . '/inc/site-footer.php' );

// Editor
include_once( get_template_directory() . '/inc/disable-editor.php' );
include_once( get_template_directory() . '/inc/tinymce.php' );

// Functionality
include_once( get_template_directory() . '/inc/login-logo.php' );
include_once( get_template_directory() . '/inc/block-area.php' );
include_once( get_template_directory() . '/inc/social-links.php' );

// Plugin Support
include_once( get_template_directory() . '/inc/acf.php' );
include_once( get_template_directory() . '/inc/amp.php' );
include_once( get_template_directory() . '/inc/shared-counts.php' );
include_once( get_template_directory() . '/inc/wpforms.php' );

/**
 * Enqueue scripts and styles.
 */
function ea_scripts() {

	if( ! ea_is_amp() ) {
		wp_enqueue_script( 'ea-global', get_template_directory_uri() . '/assets/js/global-min.js', array( 'jquery' ), filemtime( get_template_directory() . '/assets/js/global-min.js' ), true );

		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}

		// Move jQuery to footer
		if( ! is_admin() ) {
			wp_deregister_script( 'jquery' );
			wp_register_script( 'jquery', includes_url( '/js/jquery/jquery.js' ), false, NULL, true );
			wp_enqueue_script( 'jquery' );
		}

	}

	wp_enqueue_style( 'ea-fonts', ea_theme_fonts_url() );
	wp_enqueue_style( 'ea-style', get_template_directory_uri() . '/assets/css/main.css', array(), filemtime( get_template_directory() . '/assets/css/main.css' ) );

}
add_action( 'wp_enqueue_scripts', 'ea_scripts' );

/**
 * Gutenberg scripts and styles
 *
 */
function ea_gutenberg_scripts() {
	wp_enqueue_style( 'ea-fonts', ea_theme_fonts_url() );
	wp_enqueue_script( 'ea-editor', get_template_directory_uri() . '/assets/js/editor.js', array( 'wp-blocks', 'wp-dom' ), filemtime( get_template_directory() . '/assets/js/editor.js' ), true );
}
add_action( 'enqueue_block_editor_assets', 'ea_gutenberg_scripts' );

/**
 * Theme Fonts URL
 *
 */
function ea_theme_fonts_url() {
	return false;
}

if ( ! function_exists( 'ea_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function ea_setup() {
	/*
	 * Make theme available for translation.
	 */
	load_theme_textdomain( 'ea-starter', get_template_directory() . '/languages' );

	// Editor Styles
	add_theme_support( 'editor-styles' );
	add_editor_style( 'assets/css/editor-style.css' );

	// Admin Bar Styling
	add_theme_support( 'admin-bar', array( 'callback' => '__return_false' ) );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	// Body open hook
	add_theme_support( 'body-open' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/**
	 * Set the content width in pixels, based on the theme's design and stylesheet.
	 *
	 */
	 $GLOBALS['content_width'] = apply_filters( 'ea_content_width', 768 );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary Navigation Menu', 'ea-starter' ),
		'secondary' => esc_html__( 'Secondary Navigation Menu', 'ea-starter' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Gutenberg

	// -- Responsive embeds
	add_theme_support( 'responsive-embeds' );

	// -- Wide Images
	add_theme_support( 'align-wide' );

	// -- Disable custom font sizes
	add_theme_support( 'disable-custom-font-sizes' );

	// -- Editor Font Styles
	add_theme_support( 'editor-font-sizes', array(
		array(
			'name'      => __( 'Small', 'ea-starter' ),
			'shortName' => __( 'S', 'ea-starter' ),
			'size'      => 14,
			'slug'      => 'small'
		),
		array(
			'name'      => __( 'Normal', 'ea-starter' ),
			'shortName' => __( 'M', 'ea-starter' ),
			'size'      => 20,
			'slug'      => 'normal'
		),
		array(
			'name'      => __( 'Large', 'ea-starter' ),
			'shortName' => __( 'L', 'ea-starter' ),
			'size'      => 24,
			'slug'      => 'large'
		),
	) );

	// -- Disable Custom Colors
	add_theme_support( 'disable-custom-colors' );

	// -- Editor Color Palette
	add_theme_support( 'editor-color-palette', array(
		array(
			'name'  => __( 'Red', 'portent' ),
			'slug'  => 'red',
			'color'	=> '#DC1C28',
		),
		array(
			'name'  => __( 'Dark Red', 'portent' ),
			'slug'  => 'dark-red',
			'color' => '#C30D18',
		),
		array(
			'name'  => __( 'Darker Red', 'portent' ),
			'slug'  => 'darker-red',
			'color' => '#AB000B',
		),
		array(
			'name'  => __( 'Light Red', 'portent' ),
			'slug'  => 'light-red',
			'color' => '#F6323E',
		),
		array(
			'name'  => __( 'Lighter Red', 'portent' ),
			'slug'  => 'lighter-red',
			'color' => '#FE4B56',
		),
		array(
			'name'  => __( 'Blue', 'portent' ),
			'slug'  => 'blue',
			'color' => '#B9D9EC',
		),
		array(
			'name'  => __( 'Dark Blue', 'portent' ),
			'slug'  => 'dark-blue',
			'color' => '#A9CDE2',
		),
		array(
			'name'  => __( 'Darker Blue', 'portent' ),
			'slug'  => 'darker-blue',
			'color' => '#95BCD3',
		),
		array(
			'name'  => __( 'Light Blue', 'portent' ),
			'slug'  => 'light-blue',
			'color' => '#C6E3F4',
		),
		array(
			'name'  => __( 'Lighter Blue', 'portent' ),
			'slug'  => 'lighter-blue',
			'color' => '#D1EBFB',
		),
		array(
			'name'  => __( 'Grey (Text)', 'portent' ),
			'slug'  => 'grey',
			'color' => '#29292C',
		),
		array(
			'name'  => __( 'Black', 'portent' ),
			'slug'  => 'black',
			'color' => '#000000',
		),
		array(
			'name'  => __( 'Grey 80%', 'portent' ),
			'slug'  => 'grey-80',
			'color' => '#3D3D43',
		),
		array(
			'name'  => __( 'Grey 70%', 'portent' ),
			'slug'  => 'grey-70',
			'color' => '#505156',
		),
		array(
			'name'  => __( 'Grey 60%', 'portent' ),
			'slug'  => 'grey-60',
			'color' => '#646469',
		),
		array(
			'name'  => __( 'Grey 40%', 'portent' ),
			'slug'  => 'grey-40',
			'color' => '#B3B1B1',
		),
		array(
			'name'  => __( 'Grey 30%', 'portent' ),
			'slug'  => 'grey-30',
			'color' => '#D3D1D1',
		),
		array(
			'name'  => __( 'Grey 20%', 'portent' ),
			'slug'  => 'grey-20',
			'color' => '#E6E4E4',
		),
		array(
			'name'  => __( 'Grey 10%', 'portent' ),
			'slug'  => 'grey-10',
			'color' => '#F5F2F2',
		),
		array(
			'name'  => __( 'White', 'portent' ),
			'slug'  => 'white',
			'color' => '#FFFFFF',
		),
	) );

}
endif;
add_action( 'after_setup_theme', 'ea_setup' );

/**
 * Template Hierarchy
 *
 */
function ea_template_hierarchy( $template ) {

	if( is_home() || is_search() )
		$template = get_query_template( 'archive' );
	return $template;
}
add_filter( 'template_include', 'ea_template_hierarchy' );