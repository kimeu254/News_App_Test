<template>
    <div class="container-scroller">
        <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <a class="navbar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
                <a class="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-stretch">
                <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize" @click="minimize">
                    <span class="mdi mdi-menu"></span>
                </button>

                <ul class="navbar-nav navbar-nav-right">
                    <li class="nav-item nav-profile dropdown">
                        <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="nav-profile-img">
                                <img src="assets/images/faces/face1.jpg" alt="image">
                                <span class="availability-status online"></span>
                            </div>
                            <div class="nav-profile-text">
                                <p class="mb-1 text-black text-capitalize">{{ user.name }}</p>
                            </div>
                        </a>
                        <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                            <a class="dropdown-item" href="javascript:void(0)" @click="logout">
                            <i class="mdi mdi-logout me-2 text-primary"></i> Signout </a>
                        </div>
                    </li>
                </ul>
                <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas" @click="isActive = !isActive">
                    <span class="mdi mdi-menu"></span>
                </button>
            </div>
        </nav>
        <div class="container-fluid page-body-wrapper">
            <nav class="sidebar sidebar-offcanvas" id="sidebar" :class="{ active : isActive}">
                <ul class="nav">
                    <li class="nav-item nav-profile">
                    <a href="#" class="nav-link">
                        <div class="nav-profile-image">
                            <img src="assets/images/faces/face1.jpg" alt="profile">
                            <span class="login-status online"></span>
                        </div>
                        <div class="nav-profile-text d-flex flex-column">
                            <span class="font-weight-bold mb-2">David Grey. H</span>
                            <span class="text-secondary text-small">Project Manager</span>
                        </div>
                        <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
                    </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <span class="menu-title">Dashboard</span>
                            <i class="mdi mdi-home menu-icon"></i>
                        </a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                            <span class="menu-title">News</span>
                            <i class="menu-arrow "></i>
                            <i class="mdi mdi-newspaper-variant-multiple-outline menu-icon"></i>
                        </a>
                        <div class="collapse" id="ui-basic">
                            <ul class="nav flex-column sub-menu">
                            <li class="nav-item"> <a class="nav-link">South Eastern</a></li>
                            <li class="nav-item"> <a class="nav-link">National</a></li>
                            <li class="nav-item"> <a class="nav-link">International</a></li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" data-bs-toggle="collapse" href="#ui-basics" aria-expanded="false" aria-controls="ui-basic">
                            <span class="menu-title">Categories</span>
                            <i class="menu-arrow "></i>
                            <i class="mdi mdi-shape-outline menu-icon"></i>
                        </a>
                        <div class="collapse" id="ui-basics">
                            <ul class="nav flex-column sub-menu">
                            <li class="nav-item"> <a class="nav-link">Politics</a></li>
                            <li class="nav-item"> <a class="nav-link">Business</a></li>
                            <li class="nav-item"> <a class="nav-link">Sports</a></li>
                            <li class="nav-item"> <a class="nav-link">Lifestyle</a></li>
                            </ul>
                        </div>
                    </li>
                    
                </ul>
            </nav>
            <div class="main-panel">
                <main class="content-wrapper">
                    <router-view></router-view>
                </main>
                <footer class="footer">
                    <div class="container-fluid">
                        <span class="text-muted d-block text-center d-sm-inline-block">Copyright © 2022 All Rights Reserved</span>
                    </div>
                </footer>
            </div>
        </div>        
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name:"default-layout",
    data(){
        return {
            user:this.$store.state.auth.user,
            isActive:false
        }
    },
    mounted () {
        function addActiveClass(element) {
            if (current === "") {
                //for root url
                if (element.attr('href').indexOf("index.html") !== -1) {
                    element.parents('.nav-item').last().addClass('active');
                    if (element.parents('.sub-menu').length) {
                        element.closest('.collapse').addClass('show');
                        element.addClass('active');
                    }
                }
            } else {
                //for other url
                if (element.attr('href').indexOf(current) !== -1) {
                    element.parents('.nav-item').last().addClass('active');
                    if (element.parents('.sub-menu').length) {
                        element.closest('.collapse').addClass('show');
                        element.addClass('active');
                    }
                    if (element.parents('.submenu-item').length) {
                        element.addClass('active');
                    }
                }
            }
        }
        $(document).on('mouseenter mouseleave', '.sidebar .nav-item', function(ev) {
            var body = $('body');
            var sidebarIconOnly = body.hasClass("sidebar-icon-only");
            var sidebarFixed = body.hasClass("sidebar-fixed");
            if (!('ontouchstart' in document.documentElement)) {
                if (sidebarIconOnly) {
                    if (sidebarFixed) {
                        if (ev.type === 'mouseenter') {
                            body.removeClass('sidebar-icon-only');
                        }
                    } else {
                        var $menuItem = $(this);
                        if (ev.type === 'mouseenter') {
                            $menuItem.addClass('hover-open')
                        } else {
                            $menuItem.removeClass('hover-open')
                        }
                    }
                }
            }
        });
        $('.aside-toggler').click(function(){
            $('.chat-list-wrapper').toggleClass('slide')
        });
    },
    methods:{
        ...mapActions({
            signOut:"auth/logout"
        }),
        async logout(){
            await axios.post('/logout').then(({data})=>{
                this.signOut()
                this.$router.push({name:"login"})
            })
        },
        minimize() {
            var myBody = document.getElementsByTagName('body')[0]
            if ((myBody.classList.contains('sidebar-toggle-display') || myBody.classList.contains('sidebar-absolute'))) {
                myBody.classList.toggle('sidebar-hidden')
            }
            else {
                myBody.classList.toggle('sidebar-icon-only')
            }
        },
    }
}
</script>
