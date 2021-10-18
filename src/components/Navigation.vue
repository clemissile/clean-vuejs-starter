<template>
    <header class="header sticky-top w-100" :class="{'bg-color-fill': scrollPosition > 50}">

        <!-- Desktop navigation -->
        <nav class="navbar w-100" role="navigation" v-if="$mq === 'desktop'">
            <div class="navbar-container">
                <div class="navbar-left">
                    <div class="nav-item">
                        <router-link :to="getRoute('Home')">
                            <img src="@/assets/img/logo.png" alt="Vue logo" />
                        </router-link>
                    </div>
                </div>

                <div class="navbar-right">
                    <div class="nav-item" v-for="item in menu" :key="item.label">
                        <router-link :to="item.to" :class="item.hoverable ? 'underline' : ''">
                            {{ item.label }}
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Tablet & mobile navigation -->
        <nav class="navbar navbar-mobile w-100" v-else>
            <div class="container-fluid">
                <div class="nav-item">
                    <router-link :to="getRoute('Home')">
                        <img src="@/assets/img/logo.png" alt="Vue logo" />
                    </router-link>
                </div>

                <div class="nav-item">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="mdi mdi-menu mdi-36px"></span>
                    </button>
                </div>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" class="btn" data-bs-dismiss="offcanvas" aria-label="Close">
                            <span class="mdi mdi-close mdi-36px"></span>
                        </button>
                    </div>
                    <div class="offcanvas-body text-center">
                        <div class="nav-item" v-for="item in menu" :key="item.label" data-bs-dismiss="offcanvas">
                            <router-link :to="item.to">
                                {{ item.label }}
                            </router-link>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: "Navigation",

    data() {
        return {
            scrollPosition: null
        }
    },

    computed: {
        ...mapGetters({
            getRoute: 'ui/getRoute'
        }),
        
        menu() {
            return [
                    {
                        label: 'Home',
                        to: this.getRoute('Home'),
                        hoverable: true
                    },
                    {
                        label: 'About',
                        to: this.getRoute('About'),
                        hoverable: true
                    }
                ]
        }
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },

    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    -webkit-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    transition: all 0.3s linear;
    padding: 20px 0;

    &.bg-color-fill {
        padding: 0;
        background-color: $primary;
        color: $white;
        -webkit-transition: all 0.3s linear;
        -ms-transition: all 0.3s linear;
        transition: all 0.3s linear;

        .underline {
            &:after {
                background: $white !important;
            }
        }

        button {
            span {
                color: $white;
            }
        }
    }

    nav {
        background: none !important;
        font-size: 18px;
        padding: 0;

        .navbar-container {
            max-width: 1140px;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            .navbar-left, .navbar-right {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
            }
        }

        .nav-item {
            padding: 15px 0;
            position: relative;
            cursor: pointer;

            img {
                max-width: 20%;
            }

            .router-link-exact-active {
                &:after {
                    left: 0 !important;
                    right: auto !important;
                    width: 100% !important;
                }
            }

            .underline {
                display: inline;
                position: relative;
                overflow: hidden;
                &:after {
                    content: "";
                    position: absolute;
                    z-index: -1;
                    right: 0;
                    width: 0;
                    bottom: -5px;
                    background: $primary;
                    height: 2px;
                    transition-property: width;
                    transition-duration: 0.3s;
                    transition-timing-function: ease-out;
                }
            }

            &:hover {
                .underline:after {
                    left: 0;
                    right: auto;
                    width: 100%;
                }
            }

            button {
                border: none;
            }
        }
    }

    .navbar-mobile {
        color: $black;

        .offcanvas-header {
            span {
                color: $black;
            }
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>