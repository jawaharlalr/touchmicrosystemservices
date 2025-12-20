import React, { useState, useEffect } from "react";
import { Star, Quote, ExternalLink, Google } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        // Note: Using a proxy for development as Google doesn't allow direct client-side CORS for Details API
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
    <section id="reviews" className="relative py-24 overflow-hidden bg-brand-black">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 p-10 pointer-events-none select-none opacity-[0.03]">
        <span className="font-black tracking-tighter text-white uppercase text-9xl">Feedback</span>
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 px-3 py-1 mb-4 border rounded-full border-brand-orange/30 bg-brand-orange/10"
          >
            <Star size={14} className="text-brand-orange fill-brand-orange" />
            <span className="text-[10px] font-black tracking-widest uppercase text-brand-orange">
              Social Proof
            </span>
          </motion.div>
          
          <h2 className="text-4xl font-black tracking-tighter text-white uppercase md:text-5xl">
            Client <span className="text-brand-orange">Testimonials</span>
          </h2>

          {/* Rating Summary Card */}
          {rating && !loading && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-8 flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
            >
              <div className="pr-6 text-left border-r border-white/10">
                <p className="text-3xl font-black text-white">{rating}</p>
                <div className="flex gap-1">
                   {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"} />
                  ))}
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold tracking-widest text-white uppercase">{count} Google Reviews</p>
                <p className="text-xs text-gray-500">Verified Technical Service</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center py-20">
            <div className="w-12 h-12 mb-4 border-4 rounded-full border-brand-orange border-t-transparent animate-spin" />
            <p className="font-mono text-sm tracking-widest text-gray-400">CONNECTING_TO_GOOGLE_API...</p>
          </div>
        )}

        {/* Reviews Grid */}
        {!loading && (
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
                    className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-orange/40 transition-all duration-300 flex flex-col"
                  >
                    {/* Floating Quote Icon */}
                    <div className="absolute transition-colors top-6 right-8 text-white/5 group-hover:text-brand-orange/10">
                      <Quote size={48} />
                    </div>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        {review.profile_photo_url ? (
                          <img
                            src={review.profile_photo_url}
                            alt={review.author_name}
                            className="w-12 h-12 transition-colors border-2 rounded-full border-brand-orange/20 group-hover:border-brand-orange"
                          />
                        ) : (
                          <div className="flex items-center justify-center w-12 h-12 font-black text-white border rounded-full bg-brand-dark border-white/10">
                            {review.author_name?.charAt(0)}
                          </div>
                        )}
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" className="w-3 h-3" alt="Google" />
                        </div>
                      </div>

                      <div className="text-left">
                        <p className="font-bold text-white transition-colors group-hover:text-brand-orange">{review.author_name}</p>
                        <p className="text-[10px] font-mono uppercase text-gray-500 tracking-widest">
                          {review.relative_time_description}
                        </p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-700"} 
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="flex-grow text-sm leading-relaxed text-gray-400">
                      <span className="text-gray-200">
                        {review.expanded ? fullText : shortText}
                        {!review.expanded && fullText.length > 150 ? "..." : ""}
                      </span>
                    </p>

                    {fullText.length > 150 && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="mt-4 text-xs font-black tracking-widest text-left uppercase transition-colors text-brand-orange hover:text-orange-400"
                      >
                        {review.expanded ? "[ SHOW_LESS ]" : "[ READ_FULL_REPORT ]"}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Pagination & CTA */}
        {!loading && (
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {reviews.length > 6 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-4 text-xs font-black tracking-widest uppercase transition-all border-2 rounded-sm border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              >
                {showAll ? "View Less" : `View All ${reviews.length} Reviews`}
              </button>
            )}
            
            <a 
              href={`https://search.google.com/local/writereview?placeid=${PLACE_ID}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 text-xs font-black tracking-widest text-white uppercase transition-all border rounded-sm bg-white/5 border-white/10 hover:bg-white/10"
            >
              Write a Review <ExternalLink size={14} />
            </a>
          </div>
        )}

        {/* Empty State */}
        {!loading && reviews.length === 0 && (
          <div className="py-20 border-2 border-dashed border-white/5 rounded-3xl">
            <p className="text-gray-500 font-mono uppercase tracking-[0.3em]">No_Reviews_Found_In_Cache</p>
          </div>
        )}
      </div>
    </section>
  );
}