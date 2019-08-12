import "./style.scss";
import Vue from "vue";
import genres from "./util/genres.js";

new Vue({
    el:"#app",
    components:{
        "movie-list":{
            template:`<div id="movie-list">
                <div v-for="movie in movies" class="movie">
                {{ movie.title}}
                </div>
            </div>`,
            data:function(){
                return {movies:[
                    {title:"Pulp-fiction"},
                    {title:"Home Alone"},
                    {title:"Odyssey 200"},
                ],}
            },
        },
        "movie-filter":{
            data: function(){
                return {
                    genres
                }
            },
            template:`
            <div id="movie-filter">
                <h2> Filter Results</h2>
                <div class="filter-group">
                    <check-filter v-for="genre in genres" v-bind:title="genre">
                    {{ genre }}
                    </check-filter>
                </div>                
            </div>`,
            components:{
                "check-filter": {
                    data(){
                        return {
                            checked:false
                        };
                    },
                    props:["title"],
                    template:`<div class="check-filter">
                    <span class="checkbox"></span>
                    <span class="check-filter-title">{{ title }}</span>
                    </div>`,
                },
            },
        },
    },
});