import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function GoogleLiveReviews() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(null);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  // Load from .env
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const PLACE_ID = process.env.REACT_APP_GOOGLE_PLACE_ID;

  useEffect(() => {
    async function fetchReviews() {
      try {
        // Google Places API (Web Service version)
        const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&key=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.result) {
          setRating(data.result.rating);
          setCount(data.result.user_ratings_total);

          if (data.result.reviews) {
            const cleaned = data.result.reviews.map((rev) => ({
              ...rev,
              text: rev.text || "",
              expanded: false,
            }));
            setReviews(cleaned);
          }
        }
      } catch (error) {
        console.error("Google Reviews Error:", error);
      }
      setLoading(false);
    }

    fetchReviews();
  }, [API_KEY, PLACE_ID]);

  const toggleExpand = (index) => {
    setReviews((prev) =>
      prev.map((review, i) =>
        i === index ? { ...review, expanded: !review.expanded } : review
      )
    );
  };

  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="py-12 sm:py-16 bg-[#111827]"
    >
      <div className="px-4 mx-auto text-center max-w-7xl">

        {/* Heading */}
        <h2 className="mb-6 text-2xl font-bold sm:text-3xl" style={{ color: "#FF4C00" }}>
          Customer Reviews
        </h2>

        {/* Rating Summary */}
        {rating && (
          <p className="mb-10 text-lg text-gray-200">
            ⭐ {rating} / 5 — {count} Reviews
          </p>
        )}

        {/* Loading State */}
        {loading && (
          <p className="text-gray-300">Fetching live reviews…</p>
        )}

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
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-lg shadow-md bg-white/10 backdrop-blur-sm hover:bg-white/20"
                  >
                    {/* Reviewer */}
                    <div className="flex items-center gap-3 mb-3">
                      {review.profile_photo_url ? (
                        <img
                          src={review.profile_photo_url}
                          alt={review.author_name}
                          className="w-12 h-12 rounded-full border border-[#FF4C00]"
                        />
                      ) : (
                        <div className="flex items-center justify-center w-12 h-12 text-white bg-gray-600 rounded-full">
                          {review.author_name?.charAt(0) || "U"}
                        </div>
                      )}

                      <div className="text-left">
                        <p className="font-semibold text-white">{review.author_name}</p>
                        <p className="text-sm text-gray-400">
                          {review.relative_time_description}
                        </p>
                      </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="leading-relaxed text-gray-200">
                      {review.expanded ? fullText : shortText}
                      {!review.expanded && fullText.length > 150 ? "..." : ""}
                    </p>

                    {fullText.length > 150 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-2 text-[#FF4C00] font-semibold hover:underline"
                      >
                        {review.expanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Show All / Show Less */}
            {reviews.length > 6 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 bg-[#FF4C00] text-white rounded-md hover:bg-[#e04300]"
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
