import { useEffect } from "react";
import { useLoading } from "@/components/Context/LoadingProvider";

export default function TrackedImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const { registerAsset, assetLoaded } = useLoading();

  useEffect(() => {
    registerAsset();
  }, []);

  return <img src={src} alt={alt} onLoad={assetLoaded} className={className} />;
}
