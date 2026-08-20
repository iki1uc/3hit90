<script type="module">
import { PIPELINE_RUN8 } from "./pipeline.js";

document.querySelector("#run8").addEventListener("click", () => {
    const result = PIPELINE_RUN8(window.AIR_INPUT);
    console.log("RUN 8:", result);
});
</script>
