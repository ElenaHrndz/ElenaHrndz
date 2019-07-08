<template lang="html">
  <div id="app">
      <div class="title-container">
        <div>
          <h3 class="title">Projects</h3>
        </div>
        <div class="filters">
          <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</span>
          <span class="filter" v-bind:class="{ active: currentFilter === 'WEB' }" v-on:click="setFilter('WEB')">WEB</span>
          <span class="filter" v-bind:class="{ active: currentFilter === 'NODE' }" v-on:click="setFilter('NODE')">NODE</span>
          <span class="filter" v-bind:class="{ active: currentFilter === 'DESIGN' }" v-on:click="setFilter('DESIGN')">DESIGN</span>
        </div>
      </div>

      <transition-group class="projects" name="projects" >
        <div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="project in projects">
          <div class="project-image-wrapper">
            <img class="project-image" v-bind:src="project.image">
            <div class="gradient-overlay"></div>
            <div class="circle">
              <span class="project-title">{{project.title}}</span>
            </div>
          </div>
          <div class="">
            <p>{{ project.text }}</p>
          </div>
          <div class="">
            <v-btn flat>Code</v-btn>
            <v-btn flat>WEB</v-btn>
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
        {title: 'Encrypt', image: '/static/images/Encrypt.png', text:'On Encrypt you can codify your messages to keep them on secret.' ,category: 'WEB'},
        {title: 'Edulab', image: '/static/images/Edulab.png', text:'Educativ Social Network used to promote the student-teacher communication and also to allow the knowles between students', category: 'WEB'},
        // {title: 'Pokeworld', image: '/static/images/pokeworld.png', text:'', category: 'WEB'},
        {title: 'mdlinks-finder', image: '/static/images/mdlinks-finder.png', text:'mdlink-finder is a library of npm that proves links on .md files to verify the status and the amount of them.', category: 'NODE'},
        {title: 'Food Marathon', img: 'https://www.youtube.com/embed/JfRaFqmBzew', text:'A really exciting running game with 16 levels and infinite mode.', category: 'DESIGN'},
        // {title: 'Injured People', image: '/static/images/InjuredPeople.png', text:'', category: 'WEB'},
        {title: 'Jungle Jam', image: 'https://img.itch.zone/aW1nLzIwNTc2NzAucG5n/original/69Ibep.png', text:'Jungle Jam it is a game made for the Social Game Jam, Its for 3 to 6 players, it is a party game like where you are a monkey that had to collect coins the first one to collect the number of coins that you establish won there are three mini-games', category: 'DESIGN'}
      ]
    }
  },
  methods: {
    setFilter (filter) {
      this.currentFilter = filter
    }
  }
}
</script>

<style lang="css" scoped>


p{
  margin-top: 20px;
  background-color: #fafafa;
  color: black;
  text-transform: capitalize;
}

 #app{
   z-index: 999;
 }
html,body {
  margin:0;
  font-family: 'Dawning of a New Day', cursive;
}

.title-container {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.title {
  font-family: 'Dawning of a New Day', cursive;
  font-size:30pt;
  font-weight:normal;
}

.project-title {
  font-size:16pt
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
  position:absolute;
  bottom:-38px;
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
  border-radius:3px;
  width:300px;
  height:450px;
  display:flex;
  flex-direction:column;
  align-items:center;
}

.project-image-wrapper {
  position:relative;
}

.gradient-overlay {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:150px;
  opacity:0.09;
  background:
    linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%),
    linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
}

.project-image {
  width:100%;
  height:150px;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
}
</style>
