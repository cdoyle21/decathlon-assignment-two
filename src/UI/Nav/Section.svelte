<script>
    import { onMount } from "svelte";

    export let navAllSports;
    export let navMen;
    export let navWomen;
    export let navKids;
    export let navAccessories;
    export let navNutritionAndBodyCare;

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
.navBar {
        background-color: #fafafa;
        box-shadow: 2px 2px 7px rgb(0 0 0 / 12%);
        width: 100%;
        margin: 0 auto;
        display: block;
        box-sizing: border-box;
    }

    .menu-tabs {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        height: 100%;
        margin: 0 auto;
        max-width: 1180px;
    }

    .menu-tabs div {
        position: relative;
        -webkit-box-pack: center;
        justify-content: center;
        flex: 1;
        text-transform: uppercase;
        margin-left: -1px;
        -webkit-box-align: center;
        align-items: center;
        height: 100%;
        display: flex;
        text-decoration: none;
        color: #575d5e!important;
        font-size: 14px;
        -webkit-box-pack: center;
        justify-content: center;
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
        font-weight: 700;
        font-family: Roboto-Condensed,sans-serif;
        cursor: pointer;
        border-width: 0;
        transition: color .4s ease,background-color .4s ease;
        background-color: #fafafa;
        height: 55px;
    }

    .menu-tabs div:not(:last-child):after {
        content: "";
        position: absolute;
        height: 25px;
        width: 1px;
        border-right: 1px solid #ccc;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        -webkit-transform: translateY(-50%);
        z-index: 1;
    }

@media (min-width: 0px) and (max-width: 479px) {
    .navBar {
        display: none;
    }
}
</style>
  
<section class={customClassName} class:loaded bind:this={thisSection} loading="lazy">
    <div class="menu-tabs">
        <div>{navAllSports}</div>
        <div>{navMen}</div>
        <div>{navWomen}</div>
        <div>{navKids}</div>
        <div>{navAccessories}</div>
        <div>{navNutritionAndBodyCare}</div>
    </div>  
</section>