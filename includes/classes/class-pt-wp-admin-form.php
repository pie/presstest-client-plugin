<?php

namespace PIE\ClassAdminPage;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( ! class_exists( 'Pie_WCWL_Waitlist_Initialise' ) ) {

    /**
     * Initialise PT_WP_ADMIN_FORM
     * 
     * Setup the WP Admin pages and at to the navigation side bar
     * 
     * @package Press Test 
     * 
     */


    class PT_WP_ADMIN_FORM
    {
        /**
         * Set the plugin ID
         */
        const ID = 'presstest';

        public $file_path    = PIE_TESTING_PLATFORM_FILE_PATH . '/build';
        public $enqueue_path = PIE_TESTING_PLATFORM_ENQUEUE_PATH . '/build';

       


        public function init()
        {

            $asset_file = include($this -> file_path. '/index.asset.php');

            add_action( 'admin_menu', array($this, 'add_menu_page'), 20 );

            wp_enqueue_script( 'pt-react-app', $this -> enqueue_path . '/index.js',  $asset_file['dependencies'], $asset_file['version'], true );
            
        }

        /**
         * Create a get function for Plugin ID
         */

        public function get_id()
        {
            return self::ID;
        }

        /**
         * Add a page to wp-admin and a nav item to the navigation for the main page and settings page
         */

        public function add_menu_page()
        {
            add_menu_page(
                esc_html__('Press Test', 'pt-admin'),
                esc_html__('Press Test', 'pt-admin'),
                'manage_options',
                $this->get_id(),
                array($this, 'load_presstest_app') 
            );
            add_submenu_page(
                $this->get_id(),
                esc_html__('Settings', 'pt-admin'),
                esc_html__('Settings', 'pt-admin'),
                'manage_options',
                $this->get_id() . '/settings',
                array($this, 'load_presstest_app') 
            );
        }

        public function load_presstest_app(){
            echo "
                <div id='app'></div>
                <h1>HelloWorld</h1>
            ";
        }


      
    }
}