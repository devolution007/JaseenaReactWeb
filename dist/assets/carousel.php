<?php
/**
 * Plugin Name: Carousel JSON Generator
 * Description: Generates a JSON file for a carousel and provides an API endpoint.
 * Version: 1.0.0
 * Author: Your Name
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

// Function to generate the JSON file
function generate_carousel_json() {
    $carousel_data = array(
        "images" => array(
            array("title" => "Image 1", "url" => plugins_url('images/image1.jpg', __FILE__)),
            array("title" => "Image 2", "url" => plugins_url('images/image2.jpg', __FILE__)),
            array("title" => "Image 3", "url" => plugins_url('images/image3.jpg', __FILE__)),
            array("title" => "Image 4", "url" => plugins_url('images/image4.jpg', __FILE__))
        )
    );
    
    $upload_dir = wp_upload_dir();
    $file_path = $upload_dir['basedir'] . '/carousel.json';
    
    file_put_contents($file_path, json_encode($carousel_data, JSON_PRETTY_PRINT));
}

// Hook to generate JSON on plugin activation
register_activation_hook(__FILE__, 'generate_carousel_json');

// REST API Endpoint to retrieve carousel JSON
function get_carousel_json() {
    $upload_dir = wp_upload_dir();
    $file_path = $upload_dir['basedir'] . 'https://magnetmakerz.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css';
    $max_files = $upload_dir['basedir'] . 'https://magnetmakerz.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css';
    
    if (file_exists($file_path)) {
        $json = file_get_contents($file_path);
        wp_send_json_success(json_decode($json));
    } else {
        wp_send_json_error("Carousel JSON file not found.");
    }
}

add_action('rest_api_init', function () {
    register_rest_route('carousel/v1', '/data/', array(
        'methods'  => 'GET',
        'callback' => 'get_carousel_json',
    ));
});
