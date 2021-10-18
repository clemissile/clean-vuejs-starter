<template>
    <!-- Footer -->
    <footer class="bg-dark text-white">
        <div class="container p-4">
            <!-- Social media -->
            <section class="mb-4 text-center">
                <a v-for="item in social" :key="item.label" :href="item.to" class="mx-2" target="_blank">
                    <span :class="item.icon"></span>
                </a>
            </section>

            <!-- Newsletter -->
            <section class="">
                <form action="">
                    <div class="row d-flex justify-content-center">
                        <div class="col-auto">
                            <p class="pt-2">
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        <div class="col-md-5 col-12">
                            <div class="form-outline form-white mb-4">
                                <input type="email" id="form5Example21" class="form-control" placeholder="Email adress" />
                            </div>
                        </div>

                        <div class="col-auto">
                            <button type="submit" class="btn btn-outline-light mb-4">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </form>
            </section>

            <!-- Links -->
            <section :class="$mq === 'mobile' ? 'text-center' : ''">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Footer Content</h5>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                            molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                            voluptatem veniam, est atque cumque eum delectus sint!
                        </p>
                    </div>
                    
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Links</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="#!" class="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-0">Links</h5>

                        <ul class="list-unstyled">
                            <li>
                                <a href="#!" class="text-white">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 2</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 3</a>
                            </li>
                            <li>
                                <a href="#!" class="text-white">Link 4</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            v{{ version }} &copy; {{ new Date().getFullYear() }}
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",

    data() {
        return {
            version: process.env.VUE_APP_VERSION
        }
    },

    computed: {
        social() {
            return [
                {
                    label: 'facebook',
                    icon: 'mdi mdi-facebook mdi-24px',
                    to: process.env.VUE_APP_FACEBOOK_URL
                },
                {
                    label: 'twitter',
                    icon: 'mdi mdi-twitter mdi-24px',
                    to: process.env.VUE_APP_TWITTER_URL
                },
                {
                    label: 'instagram',
                    icon: 'mdi mdi-instagram mdi-24px',
                    to: process.env.VUE_APP_INSTAGRAM_URL
                },
                {
                    label: 'linkedin',
                    icon: 'mdi mdi-linkedin mdi-24px',
                    to: process.env.VUE_APP_LINKEDIN_URL
                },
                {
                    label: 'github',
                    icon: 'mdi mdi-github mdi-24px',
                    to: process.env.VUE_APP_GITHUB_URL
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped></style>