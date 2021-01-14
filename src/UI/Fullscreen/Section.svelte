<script>
    import { onMount } from "svelte";

    export let getReady;
    export let discoverYourself;
    export let discover;
    export let discoverAlt;
    export let getReadyImg;
    export let getReadyImgAlt;
    export let getReadyImgMob;

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
.fullscreen {
        margin-top: 5px;
        background-color: #ffffff;
        background-size: 100%;
        width: 100%;
        position: relative;
        height: max-content;
        min-height: 400px;
    }

    .row {
        margin-right: -15px;
        margin-left: -15px;
        width: 100%;
    }

    .fullscreen .row {
        flex-direction: column;
        justify-content: normal;
    }

    .container {
        width: 84%;
        max-width: 94%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 1%;
        padding-right: 15px;
        padding-left: 15px;
    }

    .home-banner-title-section {
        float: left;
        width: 41%;
    }

    .Rectangle {
        width: 460px;
        height: 1px;
        margin: 16px 40px 16px 0;
        background-image: linear-gradient(to right, #0072b5 0%, rgba(0, 114, 181, 0) 100%);
        float: left;
    }

    .Get-ready-to-wrap-up {
        width: 500px;
        height: 164px;
        margin: 0 0 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 70px;
        font-weight: bold;
        font-stretch: condensed;
        font-style: italic;
        line-height: normal;
        letter-spacing: normal;
        color: #0072b5;
    }

    .Decathlon-Discover {
        width: 277px;
        height: 28px;
        margin: 16px 223px 24px 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 24px;
        font-weight: bold;
        font-stretch: condensed;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #1a171b;
        float: left;
    }

    .buttonsprimaryicon-rightnormal {
        width: 91px;
        height: 40px;
        margin: 24px 398px 0 11px;
        object-fit: contain;
        float: left;
    }

    .Getreadywrapup-desktop {
        width: 50%;
        height: 380px;
        float: right;
    }

@media (min-width: 0px) and (max-width: 479px) {
    .fullscreen {
        min-height: 240px;
    }
    .container {
        width: 100%;
        max-width: 94%;
        margin-right: 0;
        padding-right: 0;
    }
    
    .row {
        margin-right: 0px;
        margin-left: 0px;
    }
    .Get-ready-to-wrap-up {
        font-size:24px;
        width: 139px;
        height: 73px;
        margin: 0px;
        padding: 40px 0 0;
    }

    .Getreadywrapup-desktop {
        width: 50%;
        height: 236px;
    }

    .Rectangle {
        display: none;
    }

    .Decathlon-Discover {
        width: 155px;
        font-size: 16px;
        margin: 0px;
    }
}
</style>
  
<section class={customClassName} class:loaded bind:this={thisSection} loading="lazy">
    <div class="container">
        <div class="row">
            <div class="home-banner-title-section">
                <div class="Get-ready-to-wrap-up">{getReady}</div>
                <div class="Rectangle"></div>
                <div class="Decathlon-Discover">{discoverYourself}</div>
                <div><img class="buttonsprimaryicon-rightnormal" src="{discover}" alt="{discoverAlt}" /></div> 
            </div>  
            <picture>   
                <source media="(min-width: 0px) and (max-width: 479px)" 
                    srcset="{getReadyImgMob}">        
                <img class="Getreadywrapup-desktop" src="{getReadyImg}" alt="{getReadyImgAlt}"/>
            </picture>
        </div>
    </div>
</section>