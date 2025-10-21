<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    border?: "grey" | "none" | "shadow";
    spacing?: "slim" | "medium" | "large";
  }>(),
  {
    border: "grey",
    spacing: "medium",
  }
);

const gapMap: Record<NonNullable<typeof props.spacing>, string> = {
  slim: "0.25rem", // 4px
  medium: "0.75rem", // 12px
  large: "1.5rem", // 24px
};

const gap = computed(() => gapMap[props.spacing!]);

const borderClass = computed(() => {
  switch (props.border) {
    case "none":
      return "vstack--border-none";
    case "shadow":
      return "vstack--border-shadow";
    case "grey":
    default:
      return "vstack--border-grey";
  }
});
</script>

<template>
  <div class="vstack" :class="borderClass" :style="{ gap }">
    <slot />
  </div>
</template>

<style scoped>
.vstack {
  display: flex;
  flex-direction: column;
  align-items: stretch; /* children fill the available inline space */
  width: 100%;
  box-sizing: border-box;
  /* gap is controlled via inline style binding */
}

/* Ensure all direct children fill the container's width */
.vstack > * {
  width: 100%;
  box-sizing: border-box;
}

/* Border variants */
.vstack--border-grey {
  border: 1px solid #e5e7eb; /* light grey */
  border-radius: 6px;
  padding: 0.5rem;
}

.vstack--border-none {
  border: none;
  padding: 0;
}

.vstack--border-shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  padding: 0.5rem;
}
</style>
