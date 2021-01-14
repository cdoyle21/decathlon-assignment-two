<script>
    import { onMount } from "svelte";
    import ImageLoader from '../ImageLoader.svelte';

    export let sportsExperience;
    export let dumbells;

    export let customClassName;
    
    let loaded = false;
    let thisSection;

    onMount(() => {
      thisSection.onload = () => {
        loaded = true;
      }
    }) 
  </script>
  
<style>
.Over-70-sports-to-ex {
        position: relative;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        color: #000;
        top: 50%;
        left: 50%;
        width: 150px;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
    }

    .sportsExperienceBlock {
        padding: 20px 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .sportsExperience {
        position: relative;
        height: 75px;
        width: calc(100% - 30px);
        display: block;
        max-width: 1000px;
        margin: 0 auto;
    }

    .sportsExperienceBg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-color: transparent;
        background-image: url(http://localhost:5000/images/78.svg);
    }

@media (min-width: 0px) and (max-width: 479px) {
    .Over-70-sports-to-ex {
        width: 100%;
    }

    .sportsExperience {
        width: 100%;
        margin: 0;
    }
}
</style>
  
<section class={customClassName} class:loaded bind:this={thisSection} loading="lazy">
    <div class="sportsExperience">
        <div class="sportsExperienceBg">
            <div class="Over-70-sports-to-ex">
                {sportsExperience}
            </div>
        </div>
    </div>
    <div>
    <ImageLoader 
        media="" 
        srcset="" 
        customClassName="sportsExperience" 
        src="{dumbells}" 
        alt="TEST" /></div>
</section>