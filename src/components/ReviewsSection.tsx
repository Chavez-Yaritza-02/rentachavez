import { reviews } from "@/data/reviews";

const renderStars = (rating: number) =>
  "★★★★★"
    .slice(0, Math.max(0, Math.min(5, rating)))
    .padEnd(5, "☆");

export function ReviewsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Reseñas de huéspedes
            </h2>
            <p className="text-sm text-slate-600">
              Testimonios verificados de estancias recientes.
            </p>
          </div>
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-600">
            Opiniones moderadas
          </p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name + review.message}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 shadow-sm"
            >
              <p className="font-semibold text-slate-900">{review.name}</p>
              <p className="text-amber-500">{renderStars(review.rating)}</p>
              <p className="mt-1 text-slate-700">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
