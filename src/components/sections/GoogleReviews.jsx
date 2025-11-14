import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function GoogleLiveReviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(null);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  const PLACE_ID = "ChIJ5Xg9_jNlUjoRrmMkX_uDHDA"; // Your place ID
  const API_KEY = "AIzaSyBbw-xmzBK3ca9p-dEqGz8MhiLtsYFlyMI"; // Your key

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount,reviews&key=${API_KEY}`,
          {
            headers: {
              "Content-Type": "application/json",
              "X-Goog-FieldMask": "rating,userRatingCount,reviews",
            },
          }
        );

        const data = await response.json();

        if (data.rating) setRating(data.rating);
        if (data.userRatingCount) setCount(data.userRatingCount);

        if (data.reviews) {
          // Normalize text and add expand flag
          const cleaned = data.reviews.map((review) => ({
            ...review,
            text: review.text?.text || review.text || "",
            expanded: false,
          }));

          setReviews(cleaned);
        }
      } catch (error) {
        console.error("Google Reviews API Error:", error);
      }

      setLoading(false);
    };

    fetchReviews();
  }, []);

  // Expand/collapse a single review text
  const toggleExpand = (index) => {
    setReviews((prev) =>
      prev.map((review, i) =>
        i === index ? { ...review, expanded: !review.expanded } : review
      )
    );
  };

  // Determine what to show (6 or full list)
  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-12 sm:py-16 bg-[#111827]"
    >
      <div className="px-4 mx-auto text-center sm:px-6 max-w-7xl">

        {/* Heading */}
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl" style={{ color: "#FF4C00" }}>
          Customer Reviews
        </h2>

        {rating && (
          <p className="mb-10 text-lg font-semibold text-gray-200">
            ⭐ {rating} / 5.0 — {count} Reviews
          </p>
        )}

        {/* Loading */}
        {loading && <p className="text-gray-300">Fetching live reviews…</p>}

        {/* Reviews Grid */}
        {!loading && (
          <>
            <div className="grid gap-6 mb-10 sm:grid-cols-2 md:grid-cols-3">
              {visibleReviews.map((review, index) => {
                const fullText = review.text;
                const shortText = fullText.slice(0, 150);

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 }}
                    className="p-5 transition rounded-lg shadow-md bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                  >
                    {/* Reviewer */}
                    <div className="flex items-center gap-3 mb-3">
                      {review.authorAttribution?.photoUri ? (
                        <img
                          src={review.authorAttribution.photoUri}
                          referrerPolicy="no-referrer"
                          alt={review.authorAttribution.displayName}
                          className="w-12 h-12 rounded-full border border-[#FF4C00]"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-gray-600 rounded-full">
                          {review.authorAttribution?.displayName?.charAt(0) || "U"}
                        </div>
                      )}

                      <div className="text-left">
                        <p className="font-semibold text-white">
                          {review.authorAttribution?.displayName}
                        </p>
                        <p className="text-sm text-gray-400">
                          {new Date(review.publishTime).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Rating stars */}
                    <div className="flex gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="leading-relaxed text-gray-200">
                      {review.expanded ? fullText : shortText}
                      {!review.expanded && fullText.length > 150 ? "..." : ""}
                    </p>

                    {fullText.length > 150 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-2 font-semibold text-[#FF4C00] hover:underline"
                      >
                        {review.expanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Show All / Show Less Button */}
            {reviews.length > 6 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 font-semibold text-white rounded-lg bg-[#FF4C00] hover:bg-[#e04300] transition"
              >
                {showAll ? "Show Less" : `Show All ${reviews.length} Reviews`}
              </button>
            )}
          </>
        )}

        {/* No Reviews */}
        {!loading && reviews.length === 0 && (
          <p className="text-gray-400">No reviews available right now.</p>
        )}
      </div>
    </motion.section>
  );
}
