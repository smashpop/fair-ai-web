export function avatarImageSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/avatar/${id}` : undefined
}

export function avatarTempImageSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/avatar/temp/${id}` : undefined
}

export function cardImageSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/card/${id}` : undefined
}

export function cardTempImageSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/card/temp/${id}` : undefined
}
