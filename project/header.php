<!DOCTYPE html>
<html <?php language_attributes(); ?> dir="rtl">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="fixed w-full bg-[#0A1128]/95 backdrop-blur-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
            <div class="flex-shrink-0">
                <?php if (has_custom_logo()): ?>
                    <?php the_custom_logo(); ?>
                <?php else: ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center gap-2">
                        <svg class="h-8 w-8 text-[#1282A2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 18L22 12L16 6"></path>
                            <path d="M8 6L2 12L8 18"></path>
                        </svg>
                        <span class="text-[#FEFCFB] text-xl font-bold"><?php bloginfo('name'); ?></span>
                    </a>
                <?php endif; ?>
            </div>

            <nav id="site-navigation" class="hidden md:flex items-center justify-center flex-1">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'flex items-center justify-center space-x-8',
                    'container' => false,
                    'fallback_cb' => false,
                ));
                ?>
            </nav>

            <button id="mobile-menu-button" class="md:hidden p-2 text-[#FEFCFB] hover:text-[#1282A2]">
                <span class="sr-only">תפריט</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>

    <div id="mobile-menu" class="hidden md:hidden bg-[#0A1128] border-t border-[#1282A2]/20">
        <?php
        wp_nav_menu(array(
            'theme_location' => 'primary',
            'menu_class' => 'px-2 pt-2 pb-3 space-y-1',
            'container' => false,
            'fallback_cb' => false,
        ));
        ?>
    </div>
</header>

<div class="h-20"></div>