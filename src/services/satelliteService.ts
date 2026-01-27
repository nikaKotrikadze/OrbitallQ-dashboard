export async function getActiveSatellites() {
  const res = await fetch(
    "https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=json"
  );
  const data = await res.json();
  console.log(data);
}
