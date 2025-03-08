<?php
if (!defined('ABSPATH')) exit;

// Theme Setup
function webcraftai_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array('search-form', 'comment-form', 'comment-list', 'gallery', 'caption'));
    add_theme_support('custom-logo');
    
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'webcraftai'),
        'footer' => __('Footer Menu', 'webcraftai')
    ));
}
add_action('after_setup_theme', 'webcraftai_setup');

// Enqueue Scripts and Styles
function webcraftai_scripts() {
    wp_enqueue_style('webcraftai-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('tailwindcss', get_template_directory_uri() . '/dist/output.css', array(), '1.0.0');
    
    wp_enqueue_script('webcraftai-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0.0', true);
    
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'webcraftai_scripts');

// Custom Post Types
function webcraftai_register_post_types() {
    // Portfolio Post Type
    register_post_type('portfolio', array(
        'labels' => array(
            'name' => __('Portfolio', 'webcraftai'),
            'singular_name' => __('Portfolio Item', 'webcraftai')
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-portfolio',
        'rewrite' => array('slug' => 'portfolio')
    ));

    // Services Post Type
    register_post_type('services', array(
        'labels' => array(
            'name' => __('Services', 'webcraftai'),
            'singular_name' => __('Service', 'webcraftai')
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-admin-tools',
        'rewrite' => array('slug' => 'services')
    ));
}
add_action('init', 'webcraftai_register_post_types');

// Custom Taxonomies
function webcraftai_register_taxonomies() {
    register_taxonomy('portfolio_category', 'portfolio', array(
        'labels' => array(
            'name' => __('Portfolio Categories', 'webcraftai'),
            'singular_name' => __('Portfolio Category', 'webcraftai')
        ),
        'hierarchical' => true,
        'show_admin_column' => true,
        'rewrite' => array('slug' => 'portfolio-category')
    ));
}
add_action('init', 'webcraftai_register_taxonomies');

// ACF Fields (if using Advanced Custom Fields)
if (function_exists('acf_add_local_field_group')) {
    // Portfolio Fields
    acf_add_local_field_group(array(
        'key' => 'group_portfolio',
        'title' => 'Portfolio Details',
        'fields' => array(
            array(
                'key' => 'field_client',
                'label' => 'Client',
                'name' => 'client',
                'type' => 'text',
            ),
            array(
                'key' => 'field_project_url',
                'label' => 'Project URL',
                'name' => 'project_url',
                'type' => 'url',
            ),
            array(
                'key' => 'field_technologies',
                'label' => 'Technologies',
                'name' => 'technologies',
                'type' => 'repeater',
                'sub_fields' => array(
                    array(
                        'key' => 'field_technology_name',
                        'label' => 'Technology',
                        'name' => 'technology',
                        'type' => 'text',
                    ),
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'portfolio',
                ),
            ),
        ),
    ));
}