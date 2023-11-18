import { Blurhash } from "react-blurhash";
import { useState, useEffect } from "react";

export default function ImageComponent({ source, styles, width, height }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.onload = () => {
      setImageLoaded(true)
    }
    image.src = source

  }, [source])

  return (
    <>
      <div style={{ display: imageLoaded ? 'none' : 'block' }}>
        <Blurhash
          hash="LKBf^R_N%NWC_3%gbwWBogofV@Ri"
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className={styles}

        />
      </div>

      <img
        src={source}
        alt="Picture"
        loading="lazy"
        className={styles}
        style={{ display: !imageLoaded ? 'none' : 'block' }}
      />

    </>
  )
}
