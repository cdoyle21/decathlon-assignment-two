<script>
    import SectionLoader from "./SectionLoader.svelte";

    export let sportsExperience;
    export let dumbells;
</script>

<SectionLoader 
    customClassName="sportsExperienceBlock"
    sportsExperience={sportsExperience}
    dumbells={dumbells}>
</SectionLoader>