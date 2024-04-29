export async function fetchParts() {
    const response = await fetch('/parts');
    const parts = await response.json();
    return parts;
  }