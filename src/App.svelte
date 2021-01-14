<script>
  import { onMount } from "svelte";
  import Header from "./UI/Header.svelte";
  import Nav from "./UI/Nav/Nav.svelte";
  import Fullscreen from "./UI/Fullscreen/Fullscreen.svelte";
  import ProductSlide from "./Homepage/ProductSlide.svelte";
  import SportExperience from "./UI/SportExperience/SportExperience.svelte";

  let loadedContent = [];
  let isLoading = false;

  onMount(() => {
    isLoading = true;
    fetch("http://localhost:4001/homepage")
      .then(res => {
        if (!res.ok) {
          throw new Error('Fetching content failed, please try again later!');
        }
        return res.json();
      })
      .then(data => {
        loadedContent = Object.values(data);
        console.log(loadedContent);
        let keys = Object.keys(data);
        console.log(keys);
      })
      .catch(err => {
        //error = err;
        isLoading = false;
        console.log(err);
      })
  })
  
</script>

<style>
  .main-container {
    max-width: inherit;
    width: 100%;
  }
</style>

{#if isLoading}
  {#each loadedContent as content}
    <div class="container-header">
      <Header 
        decathlonLogo={content.images[4].image} decathlonLogoAlt={content.images[4].alt}
        contactUs={content.images[3].image} contactUsAlt={content.images[3].alt}
        contactUsText={content.content[0].text}
        findAStore={content.images[5].image} findAStoreAlt={content.images[5].alt}
        findAStoreText={content.content[1].text}
        myAccount={content.images[13].image} myAccountAlt={content.images[13].alt}
        myAccountText={content.content[2].text}
        myBasket={content.images[12].image} myBasketAlt={content.images[12].alt}
        myBasketText={content.content[3].text}
        searchGlass={content.images[13].image} searchGlassAlt={content.images[13].alt}
        menu={content.content[14].text} />
    </div>
    <div class="main-container">
      <Nav 
        navAllSports={content.content[4].text}
        navMen={content.content[5].text}
        navWomen={content.content[6].text}
        navKids={content.content[7].text}
        navAccessories={content.content[8].text}
        navNutritionAndBodyCare={content.content[9].text} />
      <Fullscreen 
        getReady={content.content[10].text}
        discoverYourself={content.content[11].text}
        discover={content.images[1].image} discoverAlt={content.images[1].alt}
        getReadyImg={content.images[6].image} getReadyImgAlt={content.images[6].alt}
        getReadyImgMob={content.images[14].image} />
      <ProductSlide
        mostSearched={content.content[12].text}
        iconsLeft={content.images[9].image} iconsLeftAlt={content.images[9].alt}
        iconsRight={content.images[10].image} iconsRightAlt={content.images[10].alt}
        weights={content.products[3].productImage} weightsProductAlt={content.products[3].productAlt} weightsProductHeadline={content.products[3].productHeadline} weightsProductText={content.products[3].productText}
        weightsMob={content.images[15].image}
        barbells={content.products[0].productImage} barbellsProductAlt={content.products[0].productAlt} barbellsProductHeadline={content.products[0].productHeadline} barbellsProductText={content.products[0].productText}
        dumbells={content.products[1].productImage} dumbellsProductAlt={content.products[1].productAlt} dumbellsProductHeadline={content.products[1].productHeadline} dumbellsProductText={content.products[1].productText} 
        seeMore={content.images[2].image} />
    </div>
    <div class="container-footer">
      <SportExperience 
      sportsExperience={content.content[13].text} 
      dumbells={content.products[1].productImage} />
    </div>
  {/each} 
  <div></div>
{/if}