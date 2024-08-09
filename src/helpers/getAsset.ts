export function getAsset(src?:string){
  if (!src) console.warn('Asset not found');

  return new URL(`../assets/${src}`, import.meta.url).href;
}
