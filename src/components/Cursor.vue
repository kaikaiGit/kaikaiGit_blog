
<template>
  <div ref="curzr" class="curzr" hidden>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <path class="inner" d="M25,30a5.82,5.82,0,0,1-1.09-.17l-.2-.07-7.36-3.48a.72.72,0,0,0-.35-.08.78.78,0,0,0-.33.07L8.24,29.54a.66.66,0,0,1-.2.06,5.17,5.17,0,0,1-1,.15,3.6,3.6,0,0,1-3.29-5L12.68,4.2a3.59,3.59,0,0,1,6.58,0l9,20.74A3.6,3.6,0,0,1,25,30Z" />
      <path class="outer" d="M16,3A2.59,2.59,0,0,1,18.34,4.6l9,20.74A2.59,2.59,0,0,1,25,29a5.42,5.42,0,0,1-.86-.15l-7.37-3.48a1.84,1.84,0,0,0-.77-.17,1.69,1.69,0,0,0-.73.16l-7.4,3.31a5.89,5.89,0,0,1-.79.12,2.59,2.59,0,0,1-2.37-3.62L13.6,4.6A2.58,2.58,0,0,1,16,3m0-2h0A4.58,4.58,0,0,0,11.76,3.8L2.84,24.33A4.58,4.58,0,0,0,7,30.75a6.08,6.08,0,0,0,1.21-.17,1.87,1.87,0,0,0,.4-.13L16,27.18l7.29,3.44a1.64,1.64,0,0,0,.39.14A6.37,6.37,0,0,0,25,31a4.59,4.59,0,0,0,4.21-6.41l-9-20.75A4.62,4.62,0,0,0,16,1Z" />
    </svg>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue';
import { throttle } from '@/utils/index.js'

const curzr = ref(null);
const position = ref({
  distanceX: 0,
  distanceY: 0,
  distance: 0,
  pointerX: 0,
  pointerY: 0,
});
const previousPointerX = ref(0);
const previousPointerY = ref(0);
const angle = ref(0);
const previousAngle = ref(0);
const angleDisplace = ref(0);
const degrees = 57.296;
const cursorSize = ref(0);

const move = (event, root) => {
  previousPointerX.value = position.value.pointerX;
  previousPointerY.value = position.value.pointerY;
  position.value.pointerX = event.pageX + root.getBoundingClientRect().x;
  position.value.pointerY = event.pageY + root.getBoundingClientRect().y;
  position.value.distanceX = previousPointerX.value - position.value.pointerX;
  position.value.distanceY = previousPointerY.value - position.value.pointerY;
  position.value.distance = Math.sqrt(position.value.distanceY ** 2 + position.value.distanceX ** 2);

  if(curzr.value)curzr.value.style.transform = `translate3d(${position.value.pointerX}px, ${position.value.pointerY}px, 0)`;

  if (position.value.distance > 1) {
    rotate(position.value);
  } else {
    curzr.value.style.transform += ` rotate(${angleDisplace.value}deg)`;
  }
};

const rotate = (position) => {
  let unsortedAngle = Math.atan(Math.abs(position.distanceY) / Math.abs(position.distanceX)) * degrees;
  let modAngle;
  const style = curzr.value.style;
  previousAngle.value = angle.value;

  if (position.distanceX <= 0 && position.distanceY >= 0) {
    angle.value = 90 - unsortedAngle + 0;
  } else if (position.distanceX < 0 && position.distanceY < 0) {
    angle.value = unsortedAngle + 90;
  } else if (position.distanceX >= 0 && position.distanceY <= 0) {
    angle.value = 90 - unsortedAngle + 180;
  } else if (position.distanceX > 0 && position.distanceY > 0) {
    angle.value = unsortedAngle + 270;
  }

  if (isNaN(angle.value)) {
    angle.value = previousAngle.value;
  } else {
    if (angle.value - previousAngle.value <= -270) {
      angleDisplace.value += 360 + angle.value - previousAngle.value;
    } else if (angle.value - previousAngle.value >= 270) {
      angleDisplace.value += angle.value - previousAngle.value - 360;
    } else {
      angleDisplace.value += angle.value - previousAngle.value;
    }
  }
  style.transform += ` rotate(${angleDisplace.value}deg)`;

  setTimeout(() => {
    modAngle = angleDisplace.value >= 0 ? angleDisplace.value % 360 : 360 + angleDisplace.value % 360;
    if (modAngle >= 45 && modAngle < 135) {
      style.left = `${-cursorSize.value}px`;
      style.top = `${-cursorSize.value / 2}px`;
    } else if (modAngle >= 135 && modAngle < 225) {
      style.left = `${-cursorSize.value / 2}px`;
      style.top = `${-cursorSize.value}px`;
    } else if (modAngle >= 225 && modAngle < 315) {
      style.left = '0px';
      style.top = `${-cursorSize.value / 2}px`;
    } else {
      style.left = `${-cursorSize.value / 2}px`;
      style.top = '0px';
    }
  }, 0);
};

onMounted(() => {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    cursorSize.value = Number(getComputedStyle(curzr.value).getPropertyValue('--size').slice(0, -2));
    curzr.value.removeAttribute('hidden');
    const throttledMove = throttle(move, 16); // Throttle to 60fps (~16ms delay)
    document.body.addEventListener('mousemove', (event) => {
      throttledMove(event, document.body);
    });
  } else {
    // Cleanup if the device is mobile
    curzr.value?.remove();
  }
});

onBeforeUnmount(() => {
  // Cleanup when the component is about to be destroyed
  document.body.removeEventListener('mousemove', move);
});

</script>

<style scoped>
.curzr {
  --size:  20px;
  --delay: 100ms;
  --body-color: #F2F5F8;
  --outline-color: #111920;

  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: calc(var(--size) / -2);
  z-index: 2147483647;
  width: var(--size);
  height: var(--size);
  transition: 500ms, transform var(--delay);
  user-select: none;
  pointer-events: none;
}

.curzr .inner {
  fill: var(--body-color);
}

.curzr .outer {
  fill: var(--outline-color);
}
</style>