import { useRef, useEffect } from 'react'
import { useEventListener } from '../../hooks/useEventListener'
import { useWindowResizeListener } from '../../hooks/useWindowResizeListener'
import './ChannelListSimple.scss'

type Item = {
  id: string
  name: string
  image: {
    url: string
  }
}

function ChannelListSimple({
  onPress,
  onNext,
  onPrev,
  items,
  current,
}: {
  onPress: (id: Item['id']) => void
  onNext: () => void
  onPrev: () => void
  items: Item[]
  current: Item
}) {
  const listRef = useRef<HTMLDivElement>(null)
  const listSlideRef = useRef<boolean>(false)
  const listSlidePositionRef = useRef({
    left: 0,
    x: 0,
  })
  useWindowResizeListener(() => void updateScrollPosition(listRef))

  // Init Scroll Position
  useEffect(() => {
    void updateScrollPosition(listRef)
  }, [items, current])

  // Slide channels on drag in element. (Only for desktop)
  const onMouseMove = (event: any) => {
    const element = listRef?.current
    if (!element) return

    if (!listSlideRef.current) {
      listSlideRef.current = true
    }
    const elementPosition = listSlidePositionRef.current
    const dx = event.clientX - elementPosition.x
    element.scrollLeft = elementPosition.left - dx
  }

  useEventListener('mouseup', (e) => {
    const element = listRef?.current
    if (!element) return

    // Remove the event listener after the mouse up event
    element.removeEventListener('mousemove', onMouseMove)
    // Clean up the reference for the flag to allow  onmouseMove to be added again as a listener
    listSlideRef.current = false
  })

  useEventListener(
    'mousedown',
    (event: any) => {
      const element = listRef?.current
      if (!element) return

      element.style.cursor = 'grab'
      element.style.removeProperty('user-select')
      listSlidePositionRef.current = {
        left: element.scrollLeft,
        x: event?.clientX,
      }
      if (!listSlideRef.current) {
        element.addEventListener('mousemove', onMouseMove)
      }
    },
    listRef
  )

  return (
    <div id="channel-list-simple">
      <div className="channel-list" ref={listRef} data-items-amount={items.length}>
        <div className="channel-list__container">
          {items.map((item, index) => (
            <button
              type="button"
              className={`channel-list__item ${
                item.id === current.id ? 'channel-list__item--ACTIVE' : ''
              }`}
              disabled={current.id === item.id}
              key={item.id}
              data-item-index={index}
              onClick={() => onPress(item.id)}
            >
              <h3>{item.name}</h3>
              <img src={item.image.url} alt={item.name} />
            </button>
          ))}
        </div>
      </div>

      <div className="channel-controls">
        <button type="button" onClick={onPrev}>
          Previous
        </button>
        <button type="button" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  )
}

// Utils
const updateScrollPosition = (listRef: React.RefObject<HTMLDivElement>) => {
  // No ref, no need to scroll
  if (!listRef.current) {
    return
  }
  const list = listRef.current
  const amount = Number(list.dataset?.itemsAmount) || 0
  // No items, no need to scroll
  if (amount === 0) {
    return
  }
  const activeItem = list.querySelector('.channel-list__item--ACTIVE') as HTMLButtonElement
  const listContainer = list.querySelector('.channel-list__container') as HTMLDivElement

  // No active item or list container, no need to scroll
  if (!listContainer || !activeItem) {
    return
  }

  const itemIndex = Number(activeItem.dataset?.itemIndex) || 0
  const listBounding = list.getBoundingClientRect()
  const listContainerBounding = listContainer.getBoundingClientRect()
  // List is bigger than container, no need to scroll
  if (listBounding.width >= listContainerBounding.width) {
    return
  }

  // Calculate scroll position to move
  let moveTo = 0
  // First item, scroll to start
  if (itemIndex === 0) {
    // skipped, default value is 0
  }
  // Last item, scroll to end
  if (itemIndex === amount - 1) {
    moveTo = listContainerBounding.width
  } else {
    // Middle item, scroll to center(ish)
    const totalWidth = listContainerBounding.width
    const itemWidth = totalWidth / amount
    const itemPosition = itemIndex * itemWidth
    // Left offset of 1 item to display before the active item
    const offset = itemWidth
    moveTo = itemPosition - offset
  }
  // Move scroll left
  list.scrollTo({
    left: moveTo,
    behavior: 'smooth',
  })
  return
}

export { ChannelListSimple }
