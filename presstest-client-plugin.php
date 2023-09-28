<?php
/**
 * Plugin Name: presstest.io
 * Plugin URI: https://www.your-site.com/
 * Description: This plugin adds an admin page to allow site owners to setup and run various acceptance tests on their site.
 * Version: 0.0.1
 * Author: pie-web
 * Author URI: https://pie.co.de/
 * Text Domain: presstest-client-plugin
 **/

namespace PIE\PressTestClient;
use YahnisElsts\PluginUpdateChecker\v5\PucFactory;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Plugin definitions
 */
require_once plugin_dir_path( __FILE__ ) . 'definitions.php';

/**
 * Load Composer autoloader
 */
require_once PIE_TESTING_PLATFORM_FILE_PATH . 'vendor/autoload.php';

/**
 * Check for updates
 */
$update_checker = PucFactory::buildUpdateChecker(
    'https://pie.github.io/presstest-client-plugin/update.json',
    __FILE__,
    'presstest-client-plugin'
);

/**
 * Helpers
 */
require_once PIE_TESTING_PLATFORM_FILE_PATH . 'includes/helpers.php';

/**
 * The core plugin class
 */
require_once PIE_TESTING_PLATFORM_FILE_PATH . 'includes/classes/class-pt-wp-admin-form.php';

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