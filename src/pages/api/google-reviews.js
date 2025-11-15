export default async function handler(req, res) {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const PLACE_ID = process.env.REACT_APP_PLACE_ID;

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
      }
    );

    const data = await response.json();
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: "Google API Request Failed" });
  }
}
