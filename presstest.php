<?php
/**
* Plugin Name: presstesst
* Plugin URI: https://www.your-site.com/
* Description: Test your sites plugins.
* Version: 1.0
* Author: pie-web
* Author URI: https://pie.co.de/
**/


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
/**
 * Helpers
 */
require plugin_dir_path( __FILE__ ) . 'includes/helpers.php';
/**
 * The core plugin class
 */
require plugin_dir_path( __FILE__ ) . 'includes/classes/class-pt-wp-admin-form.php';
function run_pt_wp_admin_form() {
    $plugin = new PT_WP_ADMIN_FORM();
    $plugin->init();
}
run_pt_wp_admin_form();