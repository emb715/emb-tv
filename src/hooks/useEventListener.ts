import { useRef, useEffect, RefObject } from 'react'

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | MediaQueryList | void = void
>(
  eventName: KW | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | HTMLElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event
      | KeyboardEvent
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions
): void {
  // Create a ref that stores handler
  const savedHandler = useRef(handler)
  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])
  useEffect(
    () => {
      const targetElement: T | Window = element?.current ?? window
      // Make sure element supports addEventListener
      if (!(targetElement && targetElement.addEventListener)) return
      // Create event listener that calls handler function stored in ref
      const eventListener: typeof handler = (event) => savedHandler.current(event)
      // Add event listener
      targetElement.addEventListener(eventName, eventListener, options)
      // Remove event listener on cleanup
      return () => {
        targetElement.removeEventListener(eventName, eventListener, options)
      }
    },
    [eventName, element, options] // Re-run if eventName or element changes
  )
}

export { useEventListener }
