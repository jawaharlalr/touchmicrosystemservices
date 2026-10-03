import React, { useState, useEffect } from "react";
import { Star, Quote, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STATIC_REVIEWS = [
  {
    author_name: "Surya Saravanan",
    rating: 5,
    relative_time_description: "8 months ago",
    text: "Best place to service your Laptop and Computer. I 100% recommend. Very much satisfied 💯💗 . I give 5 🌟🌟🌟🌟🌟 rating. Thank you Arun for your fabulous service. I am glad.",
    profile_photo_url: ""
  },
  {
    author_name: "arun arumugam",
    rating: 5,
    relative_time_description: "8 months ago",
    text: "I had a good experience with Touch Micro System's service. I fully recommend and suggest considering Touch Micro for any system-related service.",
    profile_photo_url: ""
  },
  {
    author_name: "Riya Rivel",
    rating: 5,
    relative_time_description: "8 months ago",
    text: "Trust 💯 office. Readily services, low budget, best sales and service in this area.",
    profile_photo_url: ""
  },
  {
    author_name: "Prabu Ganesan",
    rating: 5,
    relative_time_description: "8 months ago",
    text: "They provide timely service and have a nice, professional approach.",
    profile_photo_url: ""
  },
  {
    author_name: "Jeeva nandhan",
    rating: 5,
    relative_time_description: "8 months ago",
    text: "Good service and courteous technical approach.",
    profile_photo_url: ""
  },
  {
    author_name: "Bala Mk",
    rating: 5,
    relative_time_description: "5 years ago",
    text: "Extremely reliable technician. Repaired my machine quickly when others could not isolate the board issue.",
    profile_photo_url: ""
  }
];

export default function GoogleLiveReviews() {
  const [reviews, setReviews] = useState(STATIC_REVIEWS);
  const [rating, setRating] = useState(5.0);
  const [count, setCount] = useState(6);
  const [showAll, setShowAll] = useState(false);

  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const PLACE_ID = process.env.REACT_APP_GOOGLE_PLACE_ID || "ChIJKbGLsfhgUjoRr8wX5ngw9vA";

  useEffect(() => {
    if (!API_KEY || !PLACE_ID) {
      return;
    }

    async function fetchReviews() {
      try {
        const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.result) {
          setRating(data.result.rating || 5.0);
          setCount(data.result.user_ratings_total || 6);

          if (data.result.reviews && data.result.reviews.length > 0) {
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
    <section id="reviews" className="relative py-20 bg-white border-t border-gray-300">
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-7xl">

        {/* Header Section */}
        <div className="flex flex-col items-center mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3.5 py-1 mb-3.5 border rounded-full border-orange-200 bg-orange-50"
          >
            <Star size={14} className="text-orange-600 fill-orange-600" />
            <span className="text-xs font-semibold tracking-wide uppercase text-orange-800">
              Verified Client Feedback
            </span>
          </motion.div>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Customer <span className="text-orange-600">Reviews &amp; Ratings</span>
          </h2>
          <p className="max-w-xl mt-3 text-base text-gray-600">
            Read what our clients have to say about our computer repairs, chip-level diagnostics, and customer service.
          </p>

          {/* Rating Summary Card */}
          {rating && (
            <div className="mt-8 flex items-center gap-6 px-7 py-3.5 rounded-2xl bg-slate-50 border border-gray-300 shadow-xs">
              <div className="pr-6 text-left border-r border-gray-300">
                <p className="text-3xl font-extrabold text-gray-900 leading-none mb-1">{rating.toFixed(1)}</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">Google Verified Reviews</p>
                <p className="text-xs text-gray-500">Based on {count}+ customer ratings</p>
              </div>
            </div>
          )}
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {visibleReviews.map((review, index) => {
              const fullText = review.text;
              const shortText = fullText.slice(0, 150);

              return (
                <motion.div
                  key={index}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-6 transition-all duration-300 bg-white border border-gray-300 rounded-2xl shadow-xs hover:shadow-md hover:border-orange-400 flex flex-col justify-between"
                >
                  <div>
                    {/* Reviewer Info */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 font-bold text-orange-700 bg-orange-100 rounded-full border border-orange-200">
                          {review.author_name?.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{review.author_name}</p>
                          <p className="text-xs text-gray-500">{review.relative_time_description}</p>
                        </div>
                      </div>
                      
                      {/* Quote Icon */}
                      <Quote size={20} className="text-gray-300" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm leading-relaxed text-gray-700">
                      {review.expanded ? fullText : shortText}
                      {!review.expanded && fullText.length > 150 ? "..." : ""}
                    </p>
                  </div>

                  {fullText.length > 150 && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="mt-4 text-xs font-semibold text-orange-600 hover:text-orange-700 text-left"
                    >
                      {review.expanded ? "Show Less" : "Read More"}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {reviews.length > 6 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 text-xs font-semibold tracking-wide uppercase transition-all border border-orange-500 rounded-lg text-orange-600 hover:bg-orange-50"
            >
              {showAll ? "View Less" : `View All ${reviews.length} Reviews`}
            </button>
          )}

          <a
            href={`https://search.google.com/local/writereview?placeid=${PLACE_ID}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-gray-700 uppercase transition-all bg-white border border-gray-300 rounded-lg hover:border-orange-400 hover:text-orange-600 shadow-xs"
          >
            <span>Write a Review on Google</span>
            <ExternalLink size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}