<script>
  import SectionLoader from "./SectionLoader.svelte";

  export let navAllSports;
  export let navMen;
  export let navWomen;
  export let navKids;
  export let navAccessories;
  export let navNutritionAndBodyCare;
</script>

<SectionLoader
    customClassName="navBar"
    {navAllSports}
    {navMen}
    {navWomen}
    {navKids}
    {navAccessories}
    {navNutritionAndBodyCare} >
</SectionLoader>