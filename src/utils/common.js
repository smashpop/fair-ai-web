export function avatarImageSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/avatar/${id}` : undefined
}

export function avatarTempImageSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/avatar/temp/${id}` : undefined
}

export function imageLibSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/image-lib/${id}` : undefined
}

export function libTempImageSrc(id) {
  return id !== undefined
    ? `${import.meta.env.VITE_APP_STORAGE_URL}/image-lib/temp/${id}`
    : undefined
}

export function mediaImageSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/media/${id}` : undefined
}

export function mediaTempImageSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/media/temp/${id}` : undefined
}

export function institutionImageSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/institution/${id}` : undefined
}

export function institutionTempImageSrc(id) {
  return id !== undefined
    ? `${import.meta.env.VITE_APP_STORAGE_URL}/institution/temp/${id}`
    : undefined
}

export function popularImageSrc(id) {
  return id !== undefined ? `${import.meta.env.VITE_APP_STORAGE_URL}/popular/${id}` : undefined
}
