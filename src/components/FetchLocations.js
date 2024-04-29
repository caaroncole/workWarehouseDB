export async function fetchLocations() {
  const response = await fetch('/locations');
  const locations = await response.json();
  return locations;
}