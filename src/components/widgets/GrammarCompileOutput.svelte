<script>
	import { onMount, onDestroy } from 'svelte';
	import Inspect from 'svelte-inspect';

  import {
    grammarCompilationErrors
  } from "../../stores/common.js";

  onMount(async () => {

	});

  onDestroy(async () => {

	});


  let log = (e) => { console.log(e.detail.value); }

  let nil = (e) => { }


</script>


<style>

  .codemirror-container {
    position: relative;
    width: 100%;
    height: 100%;
    border: none;

    line-height: 1.4;
    overflow: hidden;
    font-family: monospace;
  }

	.scrollable {
		flex: 1 1 auto;
		/* border-top: 1px solid #eee; */
		margin: 0 0 0.5em 0;
		overflow-y: auto;
	}


  .error-state {
    color:red;
    margin:25px 0px 15px 5px;
  }

  .correct-state {
    color:green;
    margin:25px 0px 15px 5px;

  }


  .headline {
    overflow-y: scroll;
    height:auto;
    margin-top:6px;
    margin-left:20px;
    margin-bottom: 10px;
  }

</style>

<div id="grammarOutput" class="codemirror-container flex scrollable">
  <div class="headline">
    <strong>GRAMMAR COMPILER OUTPUT</strong>
  </div>
  {#if $grammarCompilationErrors !== ""}
  <div>
    <strong class="error-state">Grammar compilation errors!</strong>
    <br>
    <div style="margin-left:5px">
    <!-- <div style="overflow-y: scroll; height:auto;"> -->
      <span style="white-space: pre-wrap">{ $grammarCompilationErrors } </span>
    </div>
  </div>
  {:else}
  <div class="headline">
    <strong class="correct-state">Grammar validated and parser generated!</strong>
  </div>
  {/if}
</div>