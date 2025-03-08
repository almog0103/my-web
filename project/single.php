<?php get_header(); ?>

<main class="min-h-screen bg-[#0A1128] pt-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <?php while (have_posts()): the_post(); ?>
            <article class="bg-[#001F54]/50 backdrop-blur-md p-8 rounded-2xl shadow-xl">
                <?php if (has_post_thumbnail()): ?>
                    <div class="mb-8">
                        <?php the_post_thumbnail('large', array('class' => 'w-full h-64 object-cover')); ?>
                    </div>
                <?php endif; ?>
                
                <h1 class="text-4xl font-bold text-[#FEFCFB] mb-6">
                    <?php the_title(); ?>
                </h1>
                
                <div class="flex items-center text-[#FEFCFB]/60 mb-8">
                    <span><?php echo get_the_date(); ?></span>
                    <span class="mx-2">•</span>
                    <span><?php the_category(', '); ?></span>
                </div>
                
                <div class="prose prose-lg prose-invert max-w-none text-[#FEFCFB]/80">
                    <?php the_content(); ?>
                </div>
                
                <?php if (has_tag()): ?>
                    <div class="mt-8 pt-8 border-t border-[#1282A2]/20">
                        <div class="flex items-center gap-2 text-[#FEFCFB]/60">
                            <span><?php _e('תגיות:', 'webcraftai'); ?></span>
                            <?php the_tags('', ', '); ?>
                        </div>
                    </div>
                <?php endif; ?>
            </article>
            
            <?php
            if (comments_open() || get_comments_number()):
                comments_template();
            endif;
            ?>
            
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>