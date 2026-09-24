import bgVideo from '../assets/video/video.mp4';

interface VideoBackgroundProps {
  /** Clase de opacidad de Tailwind, p. ej. "opacity-30". */
  opacity: string;
}

/** Video decorativo de fondo. */
export default function VideoBackground({ opacity }: VideoBackgroundProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      className={`absolute top-0 left-0 w-full h-full object-cover ${opacity}`}
    >
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
}
