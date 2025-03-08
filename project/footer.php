<footer class="bg-[#0A1128] border-t border-[#1282A2]/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div class="space-y-6">
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
                
                <p class="text-[#FEFCFB]/60">
                    <?php bloginfo('description'); ?>
                </p>
            </div>

            <div>
                <h3 class="text-[#FEFCFB] font-semibold mb-4"><?php _e('ניווט מהיר', 'webcraftai'); ?></h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'menu_class' => 'space-y-2',
                    'container' => false,
                    'fallback_cb' => false,
                ));
                ?>
            </div>

            <div>
                <h3 class="text-[#FEFCFB] font-semibold mb-4"><?php _e('שירותים', 'webcraftai'); ?></h3>
                <?php
                $services = get_posts(array(
                    'post_type' => 'services',
                    'posts_per_page' => 5
                ));
                if ($services): ?>
                    <ul class="space-y-2">
                        <?php foreach ($services as $service): ?>
                            <li>
                                <a href="<?php echo get_permalink($service->ID); ?>" class="text-[#FEFCFB]/60 hover:text-[#1282A2] transition-colors">
                                    <?php echo get_the_title($service->ID); ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
            </div>

            <div>
                <h3 class="text-[#FEFCFB] font-semibold mb-4"><?php _e('צור קשר', 'webcraftai'); ?></h3>
                <div class="space-y-4">
                    <?php if (get_theme_mod('webcraftai_phone')): ?>
                        <p class="text-[#FEFCFB]/60"><?php echo get_theme_mod('webcraftai_phone'); ?></p>
                    <?php endif; ?>
                    <?php if (get_theme_mod('webcraftai_email')): ?>
                        <p class="text-[#FEFCFB]/60"><?php echo get_theme_mod('webcraftai_email'); ?></p>
                    <?php endif; ?>
                    <?php if (get_theme_mod('webcraftai_address')): ?>
                        <p class="text-[#FEFCFB]/60"><?php echo get_theme_mod('webcraftai_address'); ?></p>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <div class="border-t border-[#1282A2]/20 pt-8 text-center">
            <p class="text-[#FEFCFB]/60">
                © <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. <?php _e('כל הזכויות שמורות', 'webcraftai'); ?>
            </p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>