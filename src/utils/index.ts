import { nextTick } from 'vue';
import { useDark } from '@vueuse/core'; // 主题切换相关

/* 防抖函数 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Parameters<T>) {
    if (timer) clearTimeout(timer); // 清除之前的定时器
    timer = setTimeout(() => {
      fn.apply(this, args); // 延迟执行
    }, delay);
  };
}

/* 节流函数 */
export function throttle<T extends (...args: any[]) => any>(fn: T, delay: number): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

/* 主题相关 */
export const isdark = useDark();

export function toggleDark(event: MouseEvent): void {
  // @ts-expect-error experimental API
  const isAppearanceTransition = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!isAppearanceTransition) {
    isdark.value = !isdark.value;
    return;
  }

  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    isdark.value = !isdark.value;
    await nextTick();
  });
  transition.ready
    .then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isdark.value
            ? [...clipPath].reverse()
            : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          pseudoElement: isdark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      );
    });
}