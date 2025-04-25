<script lang="ts">
  import { get } from "svelte/store";
  import Grid from "$lib/Components/Grid.svelte";
  import { gridColumns, gridRows } from "$lib/store";
  import type { PuzzlePiece } from "$lib/Types/interfaces";

  let pieces: PuzzlePiece[] = [];
  let currIdx: number = 0;
  let tag: number = 1;

  for (let y = 0; y < get(gridRows); y++) {
    for (let x = 0; x < get(gridColumns); x++) {
      pieces.push({ x, y, tag, correct: false, visible: false });
      tag++;
    }
  }

  pieces[currIdx].visible = true;
</script>

<div>
  <Grid />
</div>