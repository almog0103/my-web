<?php get_header(); ?>

<main class="min-h-screen bg-[#0A1128] pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div class="text-center mb-16">
            <h1 class="text-4xl font-bold text-[#FEFCFB] mb-6">
                <?php post_type_archive_title(); ?>
            </h1>
            <p class="text-xl text-[#FEFCFB]/80 max-w-2xl mx-auto">
                <?php _e('גלה את הפרויקטים המובילים שלנו', 'webcraftai'); ?>
            </p>
        </div>

        <?php if (have_posts()): ?>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <?php while (have_posts()): the_post(); ?>
                    <article class="bg-[#001F54]/50 backdrop-blur-md overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                        <?php if (has_post_thumbnail()): ?>
                            <div class="relative h-64">
                                <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover')); ?>
                                <div class="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/60 to-transparent">
                                    <div class="absolute bottom-0 p-6">
                                        <h2 class="text-xl font-bold text-[#FEFCFB] mb-2">
                                            <?php the_title(); ?>
                                        </h2>
                                        <div class="text-[#FEFCFB]/80 mb-4">
                                            <?php the_excerpt(); ?>
                                        </div>
                                        <a href="<?php the_permalink(); ?>" class="inline-flex items-center px-4 py-2 bg-[#1282A2] text-[#FEFCFB] hover:bg-[#1282A2]/90 transition-colors">
                                            <?php _e('צפה בפרויקט', 'webcraftai'); ?>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>
                    </article>
                <?php endwhile; ?>
            </div>
            
            <?php the_posts_pagination(); ?>
            
        <?php else: ?>
            <div class="text-center text-[#FEFCFB]">
                <h2 class="text-2xl font-bold mb-4">
                    <?php _e('לא נמצאו פרויקטים', 'webcraftai'); ?>
                </h2>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>