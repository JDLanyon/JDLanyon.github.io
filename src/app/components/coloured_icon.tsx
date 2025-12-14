// colours icons to the primary colour
export default function ColouredIcon({name, className = ''} : {name: string; className?: string; }) {
  var scale = "w-32 h-32 md:w-64 md:h-64"
  if (name == "flat_lotus")
    scale = "w-8 h-8 md:w-16 md:h-16"

  return (
    <i className={`inline-block ${scale} bg-(--primary) ${className}`}
      style={{
        mask: `url('/${name}.svg') no-repeat center / contain`,
        WebkitMask: `url('/${name}.svg') no-repeat center / contain`
      }}
      role="img"
      aria-label={name}
    />
  );
}