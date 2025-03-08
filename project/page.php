<?php get_header(); ?>

<main class="min-h-screen bg-[#0A1128] pt-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <?php while (have_posts()): the_post(); ?>
            <article class="bg-[#001F54]/50 backdrop-blur-md p-8 rounded-2xl shadow-xl">
                <h1 class="text-4xl font-bold text-[#FEFCFB] mb-8">
                    <?php the_title(); ?>
                </h1>
                
                <div class="prose prose-lg prose-invert max-w-none text-[#FEFCFB]/80">
                    <?php the_content(); ?>
                </div>
            </article>
        <?php endwhile; ?>
    </div>
</main>

<?php get_footer(); ?>