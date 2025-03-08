<?php get_header(); ?>

<main class="min-h-screen bg-[#0A1128] pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <?php if (have_posts()): ?>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php while (have_posts()): the_post(); ?>
                    <article class="bg-[#001F54]/50 backdrop-blur-md p-8 rounded-2xl shadow-xl">
                        <?php if (has_post_thumbnail()): ?>
                            <div class="mb-6">
                                <?php the_post_thumbnail('large', array('class' => 'w-full h-48 object-cover')); ?>
                            </div>
                        <?php endif; ?>
                        
                        <h2 class="text-2xl font-bold text-[#FEFCFB] mb-4">
                            <a href="<?php the_permalink(); ?>" class="hover:text-[#1282A2] transition-colors">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        
                        <div class="text-[#FEFCFB]/80 mb-6">
                            <?php the_excerpt(); ?>
                        </div>
                        
                        <a href="<?php the_permalink(); ?>" class="inline-flex items-center px-6 py-3 bg-[#1282A2] text-[#FEFCFB] hover:bg-[#1282A2]/90 transition-all">
                            <?php _e('קרא עוד', 'webcraftai'); ?>
                        </a>
                    </article>
                <?php endwhile; ?>
            </div>
            
            <?php the_posts_pagination(array(
                'prev_text' => __('הקודם', 'webcraftai'),
                'next_text' => __('הבא', 'webcraftai'),
                'class' => 'mt-12 flex justify-center gap-4'
            )); ?>
            
        <?php else: ?>
            <div class="text-center text-[#FEFCFB]">
                <h2 class="text-2xl font-bold mb-4"><?php _e('לא נמצאו פוסטים', 'webcraftai'); ?></h2>
                <p><?php _e('נסה לחפש משהו אחר', 'webcraftai'); ?></p>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>