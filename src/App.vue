<template>
<v-app>
  <v-toolbar dark class="primary">
  <i class="fas fa-bars hidden-sm-and-up" @click.stop="sideNav = !sideNav"></i>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">ElenaHrndz</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
        <v-icon left dark>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

  <v-navigation-drawer absolute temporary v-model="sideNav">
    <v-list>
      <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>{{ item.title }}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

  <div class="wrap-banner">
      <router-view class="main"></router-view>
      <vue-particles class="particles"
        color="#002154"
        :particleOpacity="0.7"
        linesColor="#002154"
        :particlesNumber="80"
        shapeType="star"
        :particleSize="4"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="7"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="false"
        clickMode="push"
      >
      </vue-particles>
    </div>

    <foot></foot>
</v-app>
</template>

<script>
import Foot from './components/Foot'
export default {
  name: 'app',
  components: {
    Foot
  },
  data () {
    return {
      sideNav: null
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        {
          icon: 'fas fa-user',
          title: 'About Me',
          link: '/aboutMe'
        },
        {
          icon: 'fas fa-folder-open',
          title: 'Projects',
          link: '/projects'
        },
        {
          icon: 'fas fa-user-cog',
          title: 'Skills',
          link: '/skills'
        }
      ]
      return menuItems
    }
  }
}
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Merienda|Signika+Negative|Ubuntu";

.fa-bars{
  font-size: x-large;
}

.wrap-banner {
  position: relative;
  -ms-flex-align: center;
  -webkit-box-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.main {
  display: block;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
  color: #002154;
  font-size: 100%;
}

body {
  background-color: #fafafa;
  margin: 0;
  text-align: center;
  font-family: 'Signika Negative', sans-serif;
}

h1 {
  color: #002154;
  font-family: 'Merienda', cursive;
  font-size: 3.5rem;
}

h2 {
  font-family: 'Ubuntu', sans-serif;
  font-size: 2.5rem;
  color: #41709c;
}

h3 {
  font-family: 'Ubuntu', sans-serif;
  color: #8eb8de;
}

h4{
  font-size: 20px;
}

.footer-links {
  display: inline-block;
}

/************ class***************/
.footer {
  font-family: 'Ubuntu', sans-se;
  font-size: 1.1rem;
  color: #41709c;
  display: block;
  margin-bottom: 0;
  background-color: #bbdcef;
  padding-bottom: 4px;
}

.artist {
  text-decoration: underline;
}

p {
  background-color: #8eb8de;
  clear: both;
  font-family: 'Work Sans', Helvetica, sans-serif;
  text-transform: none;
  text-rendering: optimizeLegibility;
  font-weight: 500;
  line-height: 1.15;
  word-wrap: break-word;
  margin: 1em 0 0.5em;
  margin: 0;
  padding: 0;
  color: #fff;
  position: relative;
  word-wrap: break-word;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.proy {
  position: absolute;
  margin-top: 25%;
}

.profilePic {
  width: 30%;
  border-radius: 50%;
}
</style>
