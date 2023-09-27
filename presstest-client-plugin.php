<?php
/**
* Plugin Name: presstest.io
* Plugin URI: https://www.your-site.com/
* Description: Adds an admin page that allows you to run tests on your domain ...
* Version: 0.0.1
* Author: pie-web
* Author URI: https://pie.co.de/
**/


namespace PIE\PressTestClient;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require plugin_dir_path( __FILE__ ) . 'definitions.php';

/**
 * Helpers
 */
require PIE_TESTING_PLATFORM_FILE_PATH . 'includes/helpers.php';

/**
 * The core plugin class
 */

require PIE_TESTING_PLATFORM_FILE_PATH . 'includes/classes/class-pt-wp-admin-form.php';

/**
 * Undocumented function
 *
 * @return void
 */

function run_pt_wp_admin_form() {
    $plugin = new \PIE\ClassAdminPage\PT_WP_ADMIN_FORM();
    $plugin->init();
}
run_pt_wp_admin_form();