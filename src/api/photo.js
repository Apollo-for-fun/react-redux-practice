export const getPhoto = async () => {
  const resp = await fetch('/photos')
  // console.log(`getPhoto ${JSON.stringify(resp)}`);
  const photos = await resp.json() || []
  return photos
}