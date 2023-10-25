<?php
/*
Plugin Name: VWO
Plugin URI: https://vwo.com/
Description: VWO is the all-in-one platform that helps you conduct visitor research, build an optimization roadmap, and run continuous experimentation. Simply enable the plugin and start running tests on your Wordpress website without doing any other code changes. Visit <a href="https://vwo.com/">VWO</a> for more details.
Author: VWO
Version: 3.8
visual-website-optimizer.php
Author URI: https://vwo.com/

This relies on the actions being present in the themes header.php and footer.php
* header.php code before the closing </head> tag
* 	wp_head();
*
*/

//------------------------------------------------------------------------//
//---Config---------------------------------------------------------------//
//------------------------------------------------------------------------//

/**
 * Generate Common Code
 * @param type $vwo_id integer
 * @return type string
 */
function get_vwo_clhf_script_common_code($vwo_clicks = 10) {
    ob_start();
    ?>
    <!-- Start VWO Common Smartcode -->
    <script <?php echo vwo_clhf_ignore_js_attr(); ?> type='text/javascript'>
        var _vwo_clicks = <?php echo $vwo_clicks ?>;
    </script>
    <!-- End VWO Common Smartcode -->
    <?php
    $script_code = ob_get_clean();
    return $script_code;
}

/**
 * Get ignore js field setting
 * @return type boolean
 */
function get_vwo_clhf_ignore_js(){
    $ignore_js = get_option('ignore_js');
    $ignore_js = ($ignore_js == '1') ? true : false;
    return $ignore_js;
}

/**
 * Get ignore js script attribute value
 * @return type boolean
 */
function vwo_clhf_ignore_js_attr(){
    $ignore_js = get_vwo_clhf_ignore_js();
    $js_attr = '';
    if(function_exists('get_vwo_clhf_ignore_js') && $ignore_js){
        $js_attr = 'data-cfasync="false"';
    }
    return $js_attr;
}

/**
 * Generate Synchronous Code
 * @param type $vwo_id integer
 * @return type string
 */
function get_vwo_clhf_script_sync_code($vwo_id = 0) {
    ob_start();
    ?>
    <!-- Start VWO Smartcode -->
    <script <?php echo vwo_clhf_ignore_js_attr();?> src="https://dev.visualwebsiteoptimizer.com/lib/<?php echo $vwo_id ?>.js"></script>
    <!-- End VWO Smartcode -->
    <?php
    $sync_script = ob_get_clean();
    return $sync_script;
}

/**
 * Generate Asynchronous Code
 * @param type $vwo_id integer
 * @param type $settings_tolerance integer
 * @param type $library_tolerance integer
 * @param type $use_existing_jquery string
 * @return type string
 */
function get_vwo_clhf_script_async_code($vwo_id = 0, $settings_tolerance, $library_tolerance, $use_existing_jquery) {
    ob_start();
?>
    <!-- Start VWO Async Smartcode -->
    <script <?php echo vwo_clhf_ignore_js_attr(); ?> type='text/javascript'>
    // Fix: wp-rocket (application/ld+json)
    window._vwo_code = window._vwo_code || (function(){
    var account_id= <?php echo $vwo_id ?>,
    settings_tolerance= <?php echo $settings_tolerance ?>,
    library_tolerance= <?php echo $library_tolerance ?>,
    use_existing_jquery= <?php echo ($use_existing_jquery) ? 'true' : 'false'; ?>,
    is_spa=1,
    hide_element='body',
    /* DO NOT EDIT BELOW THIS LINE */
    f=false,d=document,code={use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){
    window.settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);var a=d.createElement('style'),b=hide_element?hide_element+'{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}':'',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&f='+(+is_spa)+'&r='+Math.random());return settings_timer; }};window._vwo_settings_timer = code.init(); return code; }());
    </script>
    <!-- End VWO Async Smartcode -->
    <?php
    $async_script = ob_get_clean();
    return $async_script;
}

//------------------------------------------------------------------------//
//---Hook-----------------------------------------------------------------//
//------------------------------------------------------------------------//
add_action( 'wp_head', 'vwo_clhf_headercode',1 );
add_action( 'admin_menu', 'vwo_clhf_plugin_menu' );
add_action( 'admin_init', 'vwo_clhf_register_mysettings' );
add_action( 'admin_notices','vwo_clhf_warn_nosettings');


//------------------------------------------------------------------------//
//---Functions------------------------------------------------------------//
//------------------------------------------------------------------------//
// options page link
function vwo_clhf_plugin_menu() {
  add_options_page('Visual Website Optimizer', 'VWO', 'create_users', 'clhf_vwo_options', 'vwo_clhf_plugin_options');
}

// whitelist settings
function vwo_clhf_register_mysettings(){
	register_setting('clhf_vwo_options','vwo_id','intval');
    register_setting('clhf_vwo_options','code_type');
    register_setting('clhf_vwo_options','vwo_clicks');
    register_setting('clhf_vwo_options','ignore_js','boolval');
	register_setting('clhf_vwo_options','settings_tolerance','intval');
	register_setting('clhf_vwo_options','library_tolerance','intval');
    register_setting('clhf_vwo_options','use_existing_jquery','boolval');
}

//------------------------------------------------------------------------//
//---Output Functions-----------------------------------------------------//
//------------------------------------------------------------------------//
function vwo_clhf_headercode() {
    // runs in the header
    $vwo_id = get_option('vwo_id');
    $code_type = get_option('code_type');
   
    if ($vwo_id) {
        if(empty(get_option('vwo_clicks'))){
            update_option('vwo_clicks', '10' );
        }
        $vwo_clicks = get_option('vwo_clicks');
        //common script code
        echo get_vwo_clhf_script_common_code($vwo_clicks);
        if ($code_type == 'SYNC') {
             //sync script code
            echo get_vwo_clhf_script_sync_code($vwo_id); // only output if options were saved
        } else {

            $settings_tolerance = get_option('settings_tolerance');
            if (!is_numeric($settings_tolerance))
                $settings_tolerance = 2000;

            $library_tolerance = get_option('library_tolerance');
            if (!is_numeric($library_tolerance))
                $library_tolerance = 2500;
            
            $use_existing_jquery = get_option('use_existing_jquery');
            $use_existing_jquery = ($use_existing_jquery == 1) ? true : false;

            //async script code
            echo get_vwo_clhf_script_async_code($vwo_id, $settings_tolerance, $library_tolerance, $use_existing_jquery);
        }
    }
}

//------------------------------------------------------------------------//
//---Page Output Functions------------------------------------------------//
//------------------------------------------------------------------------//
// options page
function vwo_clhf_plugin_options() {
   //Set value for checkbox by default
    $ignore_js_options = get_option('ignore_js');
    $show_ignore_js =  $ignore_js_options;
    if( $ignore_js_options === false ) {
        // nothing is set, so apply the default here
        $show_ignore_js = 1;
        update_option('ignore_js', '1');
    }

    echo '<div class="wrap">';?>
	<h2>VWO</h2>
	<p>You need to have a <a href="https://vwo.com/">VWO</a> account in order to use this plugin. This plugin inserts the neccessary code into your Wordpress site automatically without you having to touch anything. In order to use the plugin, you need to enter your VWO Account ID:</p>
	<form method="post" action="options.php">
	<?php settings_fields( 'clhf_vwo_options' ); ?>
	<table class="form-table">
        <tr valign="top">
            <th scope="row">Your VWO Account ID</th>
            <td><input type="text" name="vwo_id" value="<?php echo get_option('vwo_id'); ?>" /></td>
        </tr>
        <tr valign="top">
            <th scope="row">No. of Heatmap Clicks</th>
            <td><input type="number" name="vwo_clicks" value="<?php echo get_option('vwo_clicks') ? get_option('vwo_clicks'):10 ; ?>" min="3"/></td>
        </tr>
		<tr valign="top">
	        <th scope="row">Code (default: Asynchronous)</th>
	        <td>
		        <input style="vertical-align: text-top;" type="radio" onclick="selectCodeType();" name="code_type" id="code_type_async" value="ASYNC" <?php if(get_option('code_type')!='SYNC') echo "checked"; ?> /> Asynchronous&nbsp;&nbsp;&nbsp;
		        <input style="vertical-align: text-top;" type="radio" onclick="selectCodeType();" name="code_type" id="code_type_sync" value="SYNC" <?php if(get_option('code_type')=='SYNC') echo "checked"; ?> /> Synchronous
		        &nbsp;<a href="https://vwo.com/blog/asynchronous-code" target="_blank">[Help]</a>
	        </td>
        </tr>
		<tr valign="top" id='asyncOnly1' <?php if(get_option('code_type')=='SYNC') echo "style='display:none;'" ?>>
	        <th scope="row">Settings Timeout</th>
			<td style="vertical-align: middle;"><input type="text" name="settings_tolerance" value="<?php echo get_option('settings_tolerance')?get_option('settings_tolerance'):2000; ?>" />ms  (default: 2000)</td>
	    </tr>
		<tr valign="top" id='asyncOnly2' <?php if(get_option('code_type')=='SYNC') echo "style='display:none;'" ?>>
	        <th scope="row">Library Timeout</th>
			<td style="vertical-align: middle;"><input type="text" name="library_tolerance" value="<?php echo get_option('library_tolerance')?get_option('library_tolerance'):2500; ?>" />ms  (default: 2500)</td>
	    </tr>
            <tr valign="top" id='asyncOnly3' <?php if(get_option('code_type')=='SYNC') echo "style='display:none;'" ?>>
	        <th scope="row">Use Existing jQuery</th>
                <td style="vertical-align: middle;"><input type="checkbox" name="use_existing_jquery" value="1" <?php if(get_option('use_existing_jquery') == true) echo "checked"; ?>/>Yes</td>
	    </tr>
        <tr valign="top">
	        <th scope="row">Skip Deferred Execution</th>
            <td style="vertical-align: middle;"><input type="checkbox" name="ignore_js" value="1"  <?php if($show_ignore_js ==  true) echo "checked"; ?>/>Yes</td>
	    </tr>
	</table>

	<script type="text/javascript">
		function selectCodeType() {
			var code_type = 'ASYNC';
			if(document.getElementById('code_type_sync').checked)
				code_type = 'SYNC';

			if(code_type == 'ASYNC') {
				document.getElementById('asyncOnly1').style.display = 'table-row';
				document.getElementById('asyncOnly2').style.display = 'table-row';
				document.getElementById('asyncOnly3').style.display = 'table-row';
			}
			else {
				document.getElementById('asyncOnly1').style.display = 'none';
				document.getElementById('asyncOnly2').style.display = 'none';
				document.getElementById('asyncOnly3').style.display = 'none';
			}
		}
	</script>
	<p class="submit"><input type="submit" class="button-primary" value="<?php _e('Save Changes') ?>" /></p>
	<p>Your Account ID (a number) can be found in <i>Settings</i> area (top-right) after you <a href="https://app.vwo.com">login</a> into your VWO account.</p>
<?php
  echo '</div>';
}

function vwo_clhf_warn_nosettings(){
    if (!is_admin())
        return;

  $clhf_option = get_option("vwo_id");
  if (!$clhf_option || $clhf_option < 1){
    echo "<div id='vwo-warning' class='updated fade'><p><strong>VWO is almost ready.</strong> You must <a href=\"options-general.php?page=clhf_vwo_options\">enter your Account ID</a> for it to work.</p></div>";
  }
}


add_filter('plugin_action_links_'.plugin_basename(__FILE__), 'vwo_clhf_add_plugin_page_settings_link');
/**
 * Function to add Settings Links on Plugin page
 * @param array $links
 * @return string
 */
function vwo_clhf_add_plugin_page_settings_link( $links ) {
    $links[] = '<a href="' .
        admin_url( 'options-general.php?page=clhf_vwo_options' ) .
        '">' . __('Settings') . '</a>';
    return $links;
}

function disable_vwo_in_divi_builder(){
    if (has_action('wp_head', 'vwo_clhf_headercode') && function_exists('et_core_is_fb_enabled') && et_core_is_fb_enabled()){
        remove_action('wp_head', 'vwo_clhf_headercode', 1);
    }
    return;
}

add_action('wp_head', 'disable_vwo_in_divi_builder', 0);

?>