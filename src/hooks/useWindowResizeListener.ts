import { useDebouncedCallback } from 'use-debounce';
import { useEventListener } from './useEventListener';

interface UseWindowResizeListenerOptions {
  delay?: number; // in ms // resize callback will be called after this delay
  listenerOptions?: AddEventListenerOptions;
}

type UseWindowResizeListener = {
  resizeCallback: () => void;
  options?: UseWindowResizeListenerOptions;
}

function useWindowResizeListener(
  resizeCallback: UseWindowResizeListener['resizeCallback'],
  options?: UseWindowResizeListener['options']
):void {  
  const delay = options?.delay || 150;
  const debounceResize = useDebouncedCallback(resizeCallback, delay);

  useEventListener('resize', debounceResize, undefined, options?.listenerOptions);
}

export { useWindowResizeListener }