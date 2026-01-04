type VideoItem = {
  title: string;
  description: string;
  src: string;
  poster: string;
};

const videos: VideoItem[] = [
  {
    title: "Bosque al amanecer",
    description: "Recorrido breve mostrando senderos y vistas de la sierra.",
    src: "/videos/promo1.mp4",
    poster: "/img/placeholder.jpg",
  },
  {
    title: "Noche de chimenea",
    description: "Ambiente nocturno con chimenea y terraza iluminada.",
    src: "/videos/promo2.mp4",
    poster: "/img/placeholder.jpg",
  },
];

export function VideoSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Videos</h2>
          <p className="text-sm text-slate-600">
            Comparte campañas con video para inspirar a tus huéspedes.
          </p>
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Placeholder multimedia
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {videos.map((video) => (
          <div
            key={video.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="relative aspect-video overflow-hidden bg-neutral-200">
              <video
                className="h-full w-full object-cover"
                controls
                poster={video.poster}
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
                Tu navegador no soporta video embebido.
              </video>
            </div>
            <div className="space-y-1 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                {video.title}
              </h3>
              <p className="text-sm text-slate-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
