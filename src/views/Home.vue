<template>
    <div class="home">
        <BlogPost v-if="!user" :post="welcomeScreen" />
        <BlogPost
            :post="post"
            v-for="(post, index) in blogPostsFeed"
            :key="index"
        />
        <div class="blog-card-wrap">
            <div class="container">
                <h3>View More Recent Blogs</h3>
                <div class="blog-cards">
                    <BlogCard
                        :post="post"
                        v-for="(post, index) in blogPostsCards"
                        :key="index"
                    />
                </div>
            </div>
        </div>
        <div v-if="!user" class="updates">
            <div class="container">
                <h2>
                    Never miss a post. Register for your free account today!
                </h2>
                <rounter-link class="router-button" to="#">
                    Register for FireBlogs <Arrow class="arrow arrow-light" />
                </rounter-link>
            </div>
        </div>
    </div>
</template>

<script>
import Arrow from "../assets/Icons/arrow-right-light.svg";
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
export default {
    name: "Home",
    components: { BlogPost, BlogCard, Arrow },
    data() {
        return {
            welcomeScreen: {
                title: "Welcome!",
                blogPost:
                    "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
                welcomeScreen: true,
                photo: "coding",
            },
            // sampleBlogPost: [
            //     {
            //         title: "This is a Filter Title!",
            //         blogHTML: "This is a filter glob post title",
            //         blogCoverPhoto: "beautiful-stories",
            //     },
            //     {
            //         title: "This is a Filter Title!",
            //         blogHTML: "This is a filter glob post title",
            //         blogCoverPhoto: "designed-for-everyone",
            //     },
            // ],
        };
    },
    computed: {
        blogPostsCards() {
            return this.$store.getters.blogPostsCards;
        },
        blogPostsFeed() {
            return this.$store.getters.blogPostsFeed;
        },

        user() {
            return this.$store.state.user;
        },
    },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
    h3 {
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 32px;
    }
}
.updates {
    .container {
        padding: 100px 25px;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        @media (min-width: 800px) {
            padding: 125px 25px;
            flex-direction: row;
        }
        .router-button {
            display: flex;
            height: 100%;
            font-size: 14px;
            text-decoration: none;
            @media (min-width: 800px) {
                margin-left: auto;
            }
            @media (max-width: 800px) {
                width: 250px;
            }
        }
        h2 {
            font-weight: 300;
            font-size: 32px;
            max-width: 425px;
            width: 100%;
            text-align: center;
            text-transform: uppercase;
            @media (min-width: 800px) {
                text-align: initial;
                font-size: 40px;
            }
        }
    }
}
</style>
