<template lang="html">
  <div id="app">
      <div class="title-container">
        <div>
          <h2>Projects</h2>
        </div>
        <div class="filters">
          <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</span>
          <span class="filter" v-bind:class="{ active: currentFilter === 'WEB' }" v-on:click="setFilter('WEB')">WEB</span>
          <span class="filter" v-bind:class="{ active: currentFilter === 'NODE' }" v-on:click="setFilter('NODE')">NODE</span>
          <span class="filter" v-bind:class="{ active: currentFilter === 'DESIGN' }" v-on:click="setFilter('DESIGN')">DESIGN</span>
          <span class="filter" v-bind:class="{ active: currentFilter === 'MOBILE' }" v-on:click="setFilter('MOBILE')">MOBILE</span>
        </div>
      </div>

      <transition-group class="projects" name="projects" >
        <div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="project in projects">
          <div class="project-image-wrapper">
            <div v-if="project.isImage">
              <img class="project-image" v-bind:src="project.image">
            </div>
            <div v-else>
              <iframe class="project-image" v-bind:src="project.image" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <h2 class="project-title">{{project.title}}</h2>
          </div>
          <div class="">
            <p>{{ project.category }}</p>
            <p class="text">{{ project.text }}</p>
          </div>
          <div v-if="project.isDownload">
            <v-btn flat v-on:click.native="goToWeb(project.download)">Download</v-btn>
          </div>
          <div v-else>
            <v-btn flat v-on:click.native="goToWeb(project.code)">Code</v-btn>
            <v-btn flat v-on:click.native="goToWeb(project.web)">Demo</v-btn>
          </div>
        </div>
      </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentFilter: 'ALL',
      projects: [
        {title: 'Encrypt', image: '/static/images/Encrypt.png', text: 'On Encrypt you can codify your messages to keep them on secret.', category: 'WEB', isImage: true, isDownload: false, web: 'https://elenahrndz.github.io/Encrypt/src/', code: ' https://github.com/ElenaHrndz/Encrypt'},
        {title: 'Edulab', image: '/static/images/Edulab.png', text: 'Educativ Social Network used to promote the student-teacher communication and also to allow the knowles between students', category: 'WEB', isImage: true, isDownload: false, web: 'https://elenahrndz.github.io/Red-Social/src/', code: 'https://github.com/ElenaHrndz/Red-Social'},
        {title: 'Burger Queen', image: 'https://lh3.googleusercontent.com/hWoVqY6UgC637edr0IYelHx405xOjKGZPTROVI3abbLCWiK50SYOPJg8a4v5H6DOOL4Vqu0RwGw_N7pzCt5zrGCoBc3r-5mbSdUqwLKZ7bPG4Enz6-LTFpjZXPAuvJKNrTTO95WAZ8EjfLVzhobv8fgdZtNKgxSKHybQycjnO4F3j5Hr1tbzu0s7LFkrBy5tL4wjNa0QSqmBJAu9CamG2B593QAheogoxYWk-OmrW1yk9UlVIN5HQgQ-l4WHGrAE5d-pyLe-j0LqW4gyHVlhFU3Wf1sRDi8H3sNwTh0bZ_Jkb5N5IrUsI13QiMBdLlH3oXIPl82un6lyk1TVje5U4hl--7CRY7aEuIYlx82HXHngRAxB3bN4vmkEQr9UDKVkJ0RHIFJP29CvgZdOm969uzM1G_4FeJiJuUgQbC-RmbJzelOV7sVWqywpzO85N7sBLwtGIFgg3O-kjWpg22qJe8QDrLZdhB5__15bF5i8Ayq-fwlJgloS9xDk7L6j3My3wwCjnOFZx61Zt49IoN07X-75IcpeWc96mameWSxq6tiThN_l0IMdeLNj3mCtbkIDuirnuwYVV9ZpFcsI9z22GAWXK5yWQU5Wy2tuMvr1PSS-hVX6f5fPUwMMvimy1QwgblQbkmO6BmRlQ5X0fL-ZXjIXiOHFQW2ZwwtvhUnW2WIWpPCabGqiSWi-nUqUfNDwhJaW8NfMVft1U4vhJYUWdZqOwA=w952-h685-no', text: 'Burger Queen is  designed as a frendly graphic interface that allows everone to take orders and send to the kitchen easily and quickly', category: 'WEB', isImage: true, isDownload: false, web: 'https://burger-queen-661d6.web.app/', code: 'https://github.com/ElenaHrndz/Burger-queen'},
        {title: 'mdlinks-finder', image: '/static/images/mdlinks-finder.png', text: 'mdlink-finder is a library of npm that proves links on .md files to verify the status and the amount of them.', category: 'NODE', isImage: true, isDownload: false, web: 'https://www.npmjs.com/package/mdlinks-finder', code: 'https://github.com/ElenaHrndz/mdlinks-finder'},
        {title: 'Food Marathon', image: 'https://www.youtube.com/embed/JfRaFqmBzew', text: 'A really exciting running game with 16 levels and infinite mode.', category: 'DESIGN', isImage: false, isDownload: true, download: 'https://play.google.com/store/apps/details?id=com.andoid.FoodRun'},
        {title: 'Tic-Tac-Toe', image: 'https://lh3.googleusercontent.com/pgjSTDYOLGAqm8J7bUmW3UnO8mU9po7r3CDng4eTdh4dJrej1gcQLceh2jRwlc0oNaP6977aFZw3B2DEo_tA5KstapOkdkUEafuvjETvL8oI4LVtB1RpCa5VnndcfjIycprbOok9QpqMFqbi5B-YZwpKJSM4IZ5bnYvIx1psmHEDod0EbUOa8qzmwPxk1CUZPvSXyDV4Lmcnw2OFHCIcJrnYaKDZqoj9D4vxUKDg9DrAFhOJVZ_ocXT2BgM9HliBj-MhrcCD6-_MaZtFqGVRAkkqX5GCElZetY4wjY8s8FsLEn_91YjChtFzeFYK4R4_hdOHXJOnr3x4Gq_DGjF2-2esNl4wW2Mn0iX-gxsuy1qt6ciOjcfAD3OMaFyuVljA9u_Qyn-2q30h91W5yjKs4aUfpWYaUQSkt1eHGqp3tGfD20BtoE_3KvLF9-d19h1b8V0Ks0RapX7FBOdLO0SU1_IoRxbG3DkIpTB8jbtptPAUq-xOSGgKWe9SvLNG32r0FOeZjtShCmOWBCUVD4ufIujVGneGADCgmo1QpYvhHrZiKEUSu36e633LaeU1_eskoIlL41ScEHfY3RQ4RiOdA9JQ3RfTDVZ-m-duCoi3Koq7GMby3GG1JlANq09bBIjrbF30jfOaoOwLSetRf0lrLLlcy9eNy1Fj5Ff3qIiT1UxjuhdRfTm4xhPrfKAH8Xy6DlWrexJ1Qb00Map5b6itRbEQNA=w532-h943-no', text: 'This native application is a classic Tic Tac Toe game created on FLutter', category: 'MOBILE', isImage: true, isDownload: false, web: '', code: 'https://github.com/ElenaHrndz/Tic-Tac-Toe_Flutter'},
        {title: 'Jungle Jam', image: 'https://img.itch.zone/aW1nLzIwNTc2NzAucG5n/original/69Ibep.png', text: 'Jungle Jam it is a game made for the Social Game Jam, Its for 3 to 6 players, it is a party game like where you are a monkey that had to collect coins the first one to collect the number of coins that you establish won there are three mini-games', category: 'DESIGN', isDownload: true, isImage: true, download: 'https://barricagames.itch.io/junglejam'}
      ]
    }
  },
  methods: {
    setFilter (filter) {
      this.currentFilter = filter
    },
    goToWeb (web) {
      window.open(web, '_blank')
    }
  }
}
</script>

<style lang="css" scoped>

#app{
  z-index: 5;
}

html,body {
  margin:0;
}

p{
  margin: 10px;
  background-color: #fafafa;
  color: black;
  text-transform: capitalize;
  font-size: 18px;
}

.v-btn:before{
  background: #41709c;
}

.title-container {
  margin: 25px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.text{
  margin: 5px 25px;
}

.project-title {
  font-size:16pt;
}

.filter {
  font-family:arial;
  padding: 6px 6px;
  cursor:pointer;
  border-radius: 6px;
  transition: all 0.35s;
}

.filter.active {
  box-shadow:0px 1px 3px 0px #00000026;
}

.filter:hover {
  background:lightgray;
}

.projects {
  margin-bottom:50px;
  margin-top:25px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity:0;
}

.projects-leave-to{
  transform: translatey(30px);
  opacity:0;
}

.projects-leave-active {
  position: absolute;
  z-index:-1;
}

.circle {
  text-align:center;
  left:40px;
  width:100px;
  height:100px;
  border-radius:50px;
  display:flex;
  box-shadow: 0px -4px 3px 0px #494d3257;
  justify-content:center;
  align-items:center;
  background-color:#fff;
}

.project {
  transition: all .35s ease-in-out;
  margin:10px;
  box-shadow:0px 2px 8px lightgrey;
  border-radius:10px;
  width:300px;
  height:480px;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color: #fafafa;
}

.project-image-wrapper {
  position:relative;
}

.gradient-overlay {
  top:0;
  left:0;
  width:100%;
  height:150px;
  opacity:0.09;
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
}

.project-image {
  padding: 5px;
  height:150px;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
}
</style>
