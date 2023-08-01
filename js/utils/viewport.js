

export function setViewportSize($el){
  const ViewPortBlockSize = getViewport()
  $el.style.blockSize =`${ViewPortBlockSize}px`
}
export function getViewport(){
 return window.innerHeight
}

export function onViewportResize(callback){

  window.addEventListener('resize', callback)
}

export function offViewportResize(callback){
  window.addEventListener('resize', callback)
}

export function viewportSize ($el){
  setViewportSize($el)
  
  onViewportResize(() => setViewportSize($el))
}

