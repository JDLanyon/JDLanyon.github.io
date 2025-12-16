// colours icons to the primary colour
export function ColouredIcon({name, className = ''} : {name: string; className?: string; }) {
  var scale = "w-24 h-24 md:w-48 md:h-48"
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