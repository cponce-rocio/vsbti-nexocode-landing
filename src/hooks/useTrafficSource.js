export function useTrafficSource() {
  const params = new URLSearchParams(window.location.search);

  if (params.get("utm_source") === "instagram") return "ig";
  if (params.get("utm_source") === "ads") return "ads";

  return "organic";
}
