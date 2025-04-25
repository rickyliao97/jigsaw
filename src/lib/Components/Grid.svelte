<script lang="ts">
  import { get } from "svelte/store";
  import { gridColumns, gridSize, gridRows, puzzleImage } from "$lib/store";

  let rows: number;
  let columns: number;
  let size: number;
  let img: string;
  let tags: number[];
  
  // Svelte only happens in reactive statements or template expressions
  $: {
    rows = get(gridRows);
    columns = get(gridColumns);
    size = get(gridSize);
    img = get(puzzleImage);
    tags = Array.from({ length: rows * columns }, (_, i) => i + 1);
  }
</script>

<div class="grid-wrapper">
  <div
    class="grid"
    style="grid-template-columns: repeat({columns}, {size}px);
           grid-template-rows: repeat({rows}, {size}px);
           background-image: url({img});"
  >
    {#each tags as tag}
      <div
        class="grid-cell"
        style="width: {size}px;
               height: {size}px;"
      >
        {tag}
      </div>
    {/each}
  </div>
</div>

<style>
  .grid-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .grid {
    position: relative;
    display: grid;

    /* Ensure the image fits the grid */
    background-size: cover; /* Scales the image to fit the container while maintaining aspect ratio */
    background-position: center; /* Centers the image within the grid */
    background-repeat: no-repeat; /* Ensures the image doesn't repeat */
  }

  .grid-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: rgb(0, 0, 0, 0.5);
    border: 1px solid white;
    font-size: 3.0em;
    color: white;
  }
</style>
